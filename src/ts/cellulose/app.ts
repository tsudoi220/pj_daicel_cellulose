import { Accordion } from './modules/Accordion'
import { Modal } from './modules/Modal'
import { Menu } from './modules/Menu'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// let gnavElement!: HTMLElement | null
// let innerElement!: HTMLElement | null
// let siteHeaderElement!: HTMLElement | null
// let slider!: Slider

const BREAK_POINT = 768
// const PC_MIN_WIDTH = 1236
let menu: Menu
// let headerElement!: HTMLElement | null
// let footerContainerElement!: HTMLElement | null
let layoutMode: string
const modalList: {
  [key: string]: Modal
} = {}
const accordionList: Accordion[] = []

// レイアウトの取得
const getLayout = () => {
  if (window.innerWidth >= BREAK_POINT) {
    return 'pc'
  } else {
    return 'sp'
  }
}

// リサイズ
const resize = () => {
  if (layoutMode !== getLayout()) {
  }
  layoutMode = getLayout()
}

// モーダルを起動する
const openModal = (modalId: string): void => {
  if (!Object.keys(modalList).length) return
  if (!modalList[modalId]) return
  modalList[modalId].open()
}

// モーダルを閉じる SP→PC
const closeModal = () => {
  for (const key in modalList) {
    modalList[key].close()
  }
}

// モーダルの生成
const createModal = () => {
  const nodelist = document.querySelectorAll('[data-modal]')
  if (nodelist.length <= 0) return
  nodelist.forEach((element: Element) => {
    const name = element.getAttribute('data-modal')
    if (name) {
      modalList[name] = new Modal({
        element: element as HTMLElement,
        openButtonNodeList: document.querySelectorAll('[aria-controls="' + name + '"]'),
        onOpen: (element: HTMLElement) => {
          const modalId = element.getAttribute('data-modal')
          if (modalId) openModal(modalId)
        },
        onClose: () => {
          //
        },
      })
      modalList[name].init()
    }
  })
}

// メニューの生成
const createMenu = () => {
  const element = document.querySelector('[data-menu]')
  if (!element) return
  menu = new Menu({
    element: element as HTMLElement,
    headerElement: document.getElementById('header') as HTMLElement,
  })
  menu.init()
}

/*
Accordionクラスの生成
*/
const createAccordion = () => {
  const nodelist = document.querySelectorAll('[data-accordion-summary]')
  if (nodelist.length === 0 || !nodelist) return false
  for (let i = 0; i < nodelist.length; i++) {
    accordionList[i] = new Accordion({
      trigger: nodelist[i] as HTMLButtonElement,
      onSlideDownStart: () => {
        // onSlideDownStart
      },
      onSlideDownEnd: () => {
        // onSlideDownEnd
      },
      onSlideUpStart: () => {
        // onSlideUpStart
      },
      onSlideUpEnd: () => {
        // onSlideUpEnd
      },
    })
    accordionList[i].init()
  }
}

/*
スクロールアニメーション
*/
const setAnimationElement = (element: HTMLElement): void => {
  const type = element.getAttribute('data-scroll-animation')
  const start = 'top 80%'
  gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: start,
      end: 'top top',
      onEnter: ({ trigger, progress, direction, isActive }) => {
        if (!element.classList.contains('_animation')) {
          element.classList.add('_animation')
        }
      },
      onEnterBack: ({ trigger, progress, direction, isActive }) => {
        if (!element.classList.contains('_animation')) {
          element.classList.add('_animation')
        }
      },
      onLeaveBack: ({ trigger, progress, direction, isActive }) => {
        if (!element.classList.contains('_animation')) {
          element.classList.add('_animation')
        }
      },
    },
  })
}

/*
アニメーション設定
*/
const setAnimationNodeList = (): void => {
  const nodeList = document.querySelectorAll('[data-scroll-animation]')
  for (let i = 0; i < nodeList.length; i++) {
    const element = nodeList[i] as HTMLElement
    setAnimationElement(element)
  }
}

/*
初期設定
*/
const init = () => {
  layoutMode = getLayout()
  createModal()
  createMenu()
  createAccordion()
  setAnimationNodeList()
  window.addEventListener('resize', resize)
  // window.addEventListener('scroll', scroll)
  // scroll()
  resize()
}

window.addEventListener('DOMContentLoaded', init)

export {}
