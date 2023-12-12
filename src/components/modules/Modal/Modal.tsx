import type { ReactNode } from 'react'
import type { ComponentProp } from '~/components/@types/Component'
import { CloseButton } from '~/components/parts/CloseButton'
import './Modal.scss'

type ModalProps = {
  modalID: string
  children?: ReactNode
} & ComponentProp

const Modal = ({ classNames, modalID, children }: ModalProps): JSX.Element | null => {
  return (
    <div className={"modal _closed" + (classNames ? ` ${classNames}` : "")}  id={modalID} data-modal={modalID} aria-hidden="true">
      <div className="modal_overlay" data-modal-overlay></div>
      <div className="modal_wrapper" data-modal-wrapper>
        <div className="modal_body" data-modal-body>
          <div className="modal_scroll" data-modal-scroll>
            <div className="modal_content" data-modal-content>
              {children}
            </div>
            <CloseButton classNames="modal_close-button" data-modal-button="close" />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Modal }
