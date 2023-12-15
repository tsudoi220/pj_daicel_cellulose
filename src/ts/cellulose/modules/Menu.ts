export interface MenuProps {
  element: HTMLElement | null
  headerElement: HTMLElement | null
}

type MenuType = 'home' | 'fixed'

export class Menu {

  public props: MenuProps = {
    element: null,
    headerElement: null,
  }

  private type: MenuType = 'fixed'

  constructor(props: MenuProps) {
    Object.assign(this.props, props)
  }

  public init = (): void => {
    this.type = this.props.element?.getAttribute('data-menu') as MenuType || 'fixed'
    this.addEvent()
    this.scroll()
  }

  private scroll = (): void => {
    const element = this.props.element
    if (!element) return
    const headerElement = this.props.headerElement
    const headerHeight = headerElement ? headerElement.offsetHeight : 0
    const bounds = element.getBoundingClientRect()
    const scrollY = window.scrollY
    if (this.type !== 'fixed') {
      if (bounds.y >= headerHeight) {
        element.classList.remove('_fixed')
      } else {
        element.classList.add('_fixed')
      }
    } else {
      if (scrollY <= 0) {
        element.style.transitionDuration = `.3s`
        element.style.transform = `translateY(${ (window.innerWidth <= 768) ? 56 : 126 }px)`
      } else {
        element.style.transitionDuration = `0s`
        element.style.transform = `translateY(${headerHeight}px)`
      }
    }
  }

  private addEvent = (): void => {
    window.addEventListener('scroll', this.scroll)
    window.addEventListener('resize', this.scroll)
  }

}