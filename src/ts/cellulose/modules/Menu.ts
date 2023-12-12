export interface MenuProps {
  element: HTMLElement | null
  headerElement: HTMLElement | null
}

export class Menu {

  public props: MenuProps = {
    element: null,
    headerElement: null,
  }

  constructor(props: MenuProps) {
    Object.assign(this.props, props)
  }

  public init = (): void => {
    this.addEvent()
    this.scroll()
  }

  private scroll = (): void => {
    const element = this.props.element
    if (!element) return
    const headerElement = this.props.headerElement
    const headerHeight = headerElement ? headerElement.offsetHeight : 0
    const bounds = element.getBoundingClientRect()
    if (bounds.y >= headerHeight) {
      element.classList.remove('_fixed')
    } else {
      element.classList.add('_fixed')
    }
  }

  private addEvent = (): void => {
    window.addEventListener('scroll', this.scroll)
  }

}