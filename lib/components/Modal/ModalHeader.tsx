import { HtmlHTMLAttributes, PropsWithChildren, } from 'react';
import clsx from 'clsx';

import { CloseIcon } from './CloseIcon';

type ModalHeaderProps = HtmlHTMLAttributes<HTMLDivElement> & {
    hideCloseIcon?: boolean;
    onRequestClose?: VoidFunction;
    shouldShowBorder?: boolean;
}

export const ModalHeader = ({ children, hideCloseIcon, className, onRequestClose,shouldShowBorder=true, ...rest }: PropsWithChildren<ModalHeaderProps>) => {
    console.log(shouldShowBorder)
    return (
        <div className={clsx('deriv-modal__header', className)} {...rest}>
            {children}
            {!hideCloseIcon && <CloseIcon onClick={onRequestClose} className="deriv-modal__close-icon" />}
        </div>
    );
}
