interface ModalButtonOptions {
  element: HTMLButtonElement | null
  onClick: (type: string) => void
}

export class ModalButton {
  public options: ModalButtonOptions = {
    element: null,
    onClick: () => {},
  }

  private type!: string | null

  constructor(options: ModalButtonOptions) {
    Object.assign(this.options, options)
  }

  // ボタンの有効化
  public enable = (): void => {
    const element = this.options.element
    if (!element) return
    element.removeAttribute('disabled')
    switch (this.type) {
      case 'open':
        element.setAttribute('aria-expanded', 'false')
        break
      case 'close':
        element.setAttribute('aria-expanded', 'true')
        break
    }
  }

  // ボタンの無効化
  public disabled = (): void => {
    const element = this.options.element
    if (!element) return
    element.setAttribute('disabled', 'disabled')
    switch (this.type) {
      case 'open':
        element.setAttribute('aria-expanded', 'true')
        break
      case 'close':
        element.setAttribute('aria-expanded', 'false')
        break
    }
  }

  // 初期設定
  public init = (): void => {
    const element = this.options.element
    if (!element) return
    this.type = element.getAttribute('data-modal-button')
    element.addEventListener('click', () => {
      if (this.type) this.options.onClick(this.type)
    })
  }
}
