import { ModalButton } from './modal/ModalButton'
import { ModalContent } from './modal/ModalContent'

export interface ModalOptions {
  element: HTMLElement | null
  openButtonNodeList?: NodeList | null
  onOpen: (element: HTMLElement) => void
  onOpenEnd?: () => void
  onClose: (element: HTMLElement) => void
  onCloseEnd?: () => void
}

export class Modal {
  public options: ModalOptions = {
    element: null,
    openButtonNodeList: null,
    onOpen: () => {},
    onOpenEnd: () => {},
    onClose: () => {},
    onCloseEnd: () => {},
  }

  public isAnimate = false
  public isOpen = false

  private openButtonList: ModalButton[] = []
  private content!: ModalContent
  private contentElement!: HTMLElement | null
  private scrollElement!: HTMLElement | null
  private overlayElement!: HTMLElement | null
  private wrapperElement!: HTMLElement | null
  private bodyElement!: HTMLElement | null
  private closeButton!: ModalButton

  private youtubeHTML = ''

  constructor(options: ModalOptions) {
    Object.assign(this.options, options)
  }

  // z-indexの取得
  public getDepth = (): string | void => {
    if (!this.options.element) return
    const style = window.getComputedStyle(this.options.element)
    return style.getPropertyValue('z-index')
  }

  // モーダルを展開する
  public open = (): void => {
    this.isOpen = true
    this.isAnimate = true
    this.updateOpenButton(false)
    if (!this.content) return
    const modalId = this.options.element?.getAttribute('data-modal')
    this.content.open()
    if (modalId === 'modal-concept-movie' && this.contentElement) {
      this.contentElement.innerHTML = ''
      this.contentElement.innerHTML = this.youtubeHTML
    }
    if (this.scrollElement) this.scrollElement.scrollTop = 0
    ;(document.getElementsByTagName('html')[0] as HTMLHtmlElement).classList.add('_modal-open')
    // this.options.onOpen(this.options.element)
    //- this.scrollElement.style.maxHeight = this.contentElement.offsetHeight + 'px'
    this.resize()
  }

  // モーダルを閉じる
  public close = (): void => {
    if (!this.options.element) return
    this.isOpen = false
    this.isAnimate = true
    if (!this.content.isAnimate) {
      const modalId = this.options.element.getAttribute('data-modal')
      this.content.close()
      if (modalId === 'modal-concept-movie' && this.contentElement) {
        this.contentElement.innerHTML = ''
      }
      ;(document.getElementsByTagName('html')[0] as HTMLHtmlElement).classList.remove('_modal-open')
      this.options.onClose(this.options.element)
    }
  }

  // リサイズ
  public resize = (): void => {
    const h = window.innerHeight

    // TODO // SPレイアウト時のサイズ分岐
    // const value = (734 * h) / 1094 // PCレイアウト

    // const parentNode = this.scrollElement.parentNode as HTMLElement
    // console.log('parentNode', parentNode.offsetHeight)

    // this.scrollElement.style.height = parentNode.offsetHeight + 'px'
  }

  // 初期設定
  public init = (): void => {
    const element = this.options.element
    if (!element) return
    this.overlayElement = element.querySelector('[data-modal-overlay]')
    this.wrapperElement = element.querySelector('[data-modal-wrapper]')
    this.bodyElement = element.querySelector('[data-modal-body]')
    this.scrollElement = element.querySelector('[data-modal-scroll]')
    this.contentElement = element.querySelector('[data-modal-content]')
    const closeButtonElement = element.querySelector('[data-modal-button="close"]')
    if (closeButtonElement) {
      this.closeButton = new ModalButton({
        element: closeButtonElement as HTMLButtonElement,
        onClick: () => {
          this.close()
        },
      })
      this.closeButton.init()
    }
    this.setOpenButtonNodeList()
    this.setModalContent(element)
    this.addEvent()
    this.resize()

    const modalId = element.getAttribute('data-modal')
    if (modalId === 'modal-concept-movie' && this.contentElement) {
      this.youtubeHTML = this.contentElement.innerHTML
    }

  }

  // モーダルコンテンツの設定
  private setModalContent = (element: HTMLElement): void => {
    this.content = new ModalContent({
      element: element,
      onClose: (): void => {
        this.close()
      },
      onEnterEnd: (): void => {
        this.content.isAnimate = false
        this.isAnimate = false
        if (this.options.onOpenEnd) this.options.onOpenEnd()
      },
      onLeaveEnd: (): void => {
        this.content.closed()
        this.updateOpenButton(true)
        this.content.isAnimate = false
        this.isAnimate = false
        if (this.options.onCloseEnd) this.options.onCloseEnd()
      },
    })
    this.content.init()
  }

  // 展開するボタンの設定
  private updateOpenButton = (isEnable: boolean): void => {
    if (this.openButtonList.length) {
      this.openButtonList.forEach((button: ModalButton) => {
        if (isEnable) {
          if (button) button.enable()
        } else {
          if (button) button.disabled()
        }
      })
    }
  }

  // イベント設定
  private addEvent = (): void => {
    if (this.overlayElement) {
      if (this.overlayElement.getAttribute('data-modal-overlay') !== 'noclick') {
        this.overlayElement.addEventListener('click', () => {
          this.close()
        })
      }
    }

    if (this.wrapperElement) {
      if (this.wrapperElement.getAttribute('data-modal-wrapper') !== 'noclick') {
        this.wrapperElement.addEventListener('click', () => {
          this.close()
        })
      }
    }
    
    if (this.bodyElement) {
      this.bodyElement.addEventListener('click', (e) => {
        e.stopPropagation()
      })
    }

    window.addEventListener('resize', this.resize)
  }

  // 展開ボタンの設定
  private setOpenButtonNodeList = (): void => {
    const nodelist = this.options.openButtonNodeList
    if (!nodelist) return
    nodelist.forEach((buttonElement: Node, index: number) => {
      this.openButtonList[index] = new ModalButton({
        element: buttonElement as HTMLButtonElement,
        onClick: (type: string) => {
          if (type === 'open' && this.options.element) this.options.onOpen(this.options.element)
          if (type === 'close') this.close()
        },
      })
      this.openButtonList[index].init()
    })
  }
}
