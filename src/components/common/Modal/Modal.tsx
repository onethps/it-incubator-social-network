import React, { FC, ReactNode } from 'react';

import s from './Modal.module.scss';

export type ModalType = {
  children?: ReactNode;
  setActive: (bool: boolean) => void;
  active: boolean;
};

const Modal: FC<ModalType> = ({ setActive, active, children }) => (
  <div>
    {active && (
      <div>
        <div className={s.modalBackground} onClick={() => setActive(!active)} />
        <div className={s.modal}>{children}</div>
      </div>
    )}
  </div>
);

export default Modal;
