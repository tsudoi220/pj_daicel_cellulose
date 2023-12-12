import { ModalButton } from './ModalButton'

interface ModalContentOptions {
  element: HTMLElement | null
  onClose: () => void
  onEnterEnd: () => void
  onLeaveEnd: () => void
}

export class ModalContent {
  public options: ModalContentOptions = {
    element: null,
    onClose: () => {},
    onEnterEnd: () => {},
    onLeaveEnd: () => {},
  }

  private closeButton!: ModalButton
  private isOpen = false
  public isAnimate = false

  constructor(options: ModalContentOptions) {
    Object.assign(this.options, options)
  }

  // 展開する
  public open = (): void => {
    this.isAnimate = true
    const element = this.options.element
    if (!element) return
    element.classList.remove('_closed')
    element.classList.add('_enter')
    setTimeout(() => {
      element.classList.add('_enter-to')
      if (this.closeButton) this.closeButton.enable() // 閉じるボタンの有効化
      element.setAttribute('aria-hidden', 'false')
      this.isOpen = true
      this.isAnimate = false
    }, 100)
  }

  // 閉じる
  public close = (): void => {
    this.isAnimate = true
    if (!this.isOpen) return
    this.isOpen = false
    const element = this.options.element
    if (!element) return
    element.classList.remove('_enter-to')
    element.classList.add('_leave')
    if (this.closeButton) this.closeButton.disabled() // 閉じるボタンの無効化
    setTimeout(() => {
      element.classList.add('_leave-to')
      element.setAttribute('aria-hidden', 'true')
      this.isAnimate = false
    }, 100)
  }

  // 閉じた際の処理
  public closed = (): void => {
    const element = this.options.element
    if (!element) return
    element.classList.remove('_leave-to')
    element.classList.add('_closed')
  }

  // 初期設定
  public init = (): void => {
    const element = this.options.element as HTMLElement
    element.addEventListener('transitionend', this.endTransition)
    const closeButtonElement = element.querySelector('[data-modal-button="close"]')
    if (!closeButtonElement) return
    this.closeButton = new ModalButton({
      element: closeButtonElement as HTMLButtonElement,
      onClick: () => {
        //- this.options.onClose()
      },
    })
    this.closeButton.init()
  }

  // アニメーション完了後の処理
  private endTransition = (e: TransitionEvent): void => {
    const element = this.options.element
    if (!element) return
    const target = e.target as HTMLElement
    if (!target.classList.contains('modal')) return
    if (e.propertyName === 'opacity') {
      if (this.isOpen) {
        element.classList.remove('_enter')
        this.options.onEnterEnd()
      } else {
        element.classList.remove('_leave')
        this.options.onLeaveEnd()
      }
    }
  }
}
