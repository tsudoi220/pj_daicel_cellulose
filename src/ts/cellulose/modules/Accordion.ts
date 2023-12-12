type AccordionProps = {
  trigger: HTMLButtonElement | null
  onSlideDownStart: () => void
  onSlideDownEnd: () => void
  onSlideUpStart: () => void
  onSlideUpEnd: () => void
}

export class Accordion {

  public props: AccordionProps = {
    trigger: null,
    onSlideDownStart: () => {},
    onSlideDownEnd: () => {},
    onSlideUpStart: () => {},
    onSlideUpEnd: () => {}
  }

  private content!: HTMLElement
  private labelElement!: HTMLElement
  // private closeButtonElement!: HTMLButtonElement
  private initContentStyle!: {
    display: string | null
    position: string | null
    visibility: string | null
    height: string | null
    overflow: string | null
  }
  private timeoutID!: number

  private LABEL_LIST: string[] = ['対談を読む', '閉じる']

  constructor(props: AccordionProps) {
    Object.assign(this.props, props)
  }

  public stop = () => {
    window.clearTimeout(this.timeoutID)
    this.content.removeEventListener('transitionend', this.slideDownEnd)
    this.content.removeEventListener('transitionend', this.slideUpEnd)
  }

  /*
  change
  */
  public change = () => {
    window.clearTimeout(this.timeoutID)
    this.content.removeEventListener('transitionend', this.slideDownEnd)
    this.content.removeEventListener('transitionend', this.slideUpEnd)
    let _hidden: string
    this.content.style.overflow = 'hidden'
    if (this.content.getAttribute('aria-hidden') === 'true') {
      if (this.props.onSlideDownStart) this.props.onSlideDownStart()
      const h: number = this.getElementHeight(this.content)
      this.content.style.height = this.content.offsetHeight + 'px'
      this.content.classList.add('_open')
      this.content.addEventListener('transitionend', this.slideDownEnd)
      this.timeoutID = window.setTimeout(() => {
        this.content.style.height = h + 'px'
      }, 10)
      _hidden = 'false'
    } else {
      if (this.props.onSlideUpStart) this.props.onSlideUpStart()
      this.content.style.height = this.content.offsetHeight + 'px'
      this.content.addEventListener('transitionend', this.slideUpEnd)
      this.timeoutID = window.setTimeout(() => {
        this.content.style.height = 0 + 'px'
      }, 10)
      _hidden = 'true'
    }
    this.props.trigger?.setAttribute('aria-expanded', _hidden === 'true' ? 'false' : 'true')
    if (this.labelElement)
      this.labelElement.innerHTML = _hidden === 'true' ? this.LABEL_LIST[0] : this.LABEL_LIST[1]
    this.content.setAttribute('aria-hidden', _hidden)

    // if (this.closeButtonElement) {
    //   this.closeButtonElement.setAttribute('aria-expanded', _hidden === 'true' ? 'false' : 'true')
    // }
  }

  /*
  slideDownEnd
  */
  private slideDownEnd = () => {
    // this.content.style.height = <string>this.initContentStyle.height
    this.content.style.height = 'auto'
    this.content.style.overflow = <string>this.initContentStyle.overflow
    if (this.props.onSlideDownEnd) this.props.onSlideDownEnd()
  }

  /*
  slideUpEnd
  */
  private slideUpEnd = () => {
    this.content.classList.remove('_open')
    this.content.style.height = <string>this.initContentStyle.height
    this.content.style.overflow = <string>this.initContentStyle.overflow
    if (this.props.onSlideUpEnd) this.props.onSlideUpEnd()
  }

  /*
  init
  */
  public init = () => {
    const id = this.props.trigger?.getAttribute('aria-controls') as string
    this.content = <HTMLElement>document.getElementById(id)
    console.log('AAAAA', this.content, id)
    // this.closeButtonElement = <HTMLButtonElement>document.getElementById(id + '_close-btn')
    this.initContentStyle = this.setInitContentStyle(this.content)
    this.props.trigger?.addEventListener('click', () => {
      const type = this.props.trigger?.getAttribute('data-accordion-trigger')
      if (type === 'remove') this.props.trigger?.remove()
      this.change()
      return false
    })
    this.labelElement = <HTMLElement>this.props.trigger?.querySelector('[data-accordion-trigger-label]')
    // if (this.closeButtonElement) {
    //   this.closeButtonElement.addEventListener('click', () => {
    //     this.change()
    //     return false
    //   })
    // }
  }

  /*
  setInitContentStyle
  */
  private setInitContentStyle = (element: HTMLElement) => {
    return {
      display: element.style.display,
      position: element.style.position,
      visibility: element.style.visibility,
      height: element.style.height,
      overflow: element.style.overflow,
    }
  }

  /*

  */
  private getElementHeight = (element: HTMLElement) => {
    const h: number = element.offsetHeight
    element.style.display = 'block'
    element.style.position = 'relative'
    element.style.visibility = 'hidden'
    element.style.height = 'auto'
    const value: number = element.getBoundingClientRect().height
    element.style.display = this.initContentStyle.display as string
    element.style.position = this.initContentStyle.position as string
    element.style.visibility = this.initContentStyle.visibility as string
    element.style.height = h + 'px'
    return value
  }
}
