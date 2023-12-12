export type ComponentProp = {
  name?: string
  classNames?: string
}

export type ImageProp = {
  src: string | undefined
  alt: string | undefined
}

export type VideoProp = {
  src: string | undefined
  title?: string
  unit?: ImageProp
}

export type LinkProp = {
  label?: string
  href: string
  target?: string
}

export type PictureProp = {
  pc: string | undefined
  sp?: string | undefined
  alt: string | undefined
  classNames?: string
}

export type YouTubeProp = {
  src: string
  title: string
}