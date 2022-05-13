import React from 'react';
import s from './FormValid.module.scss'

export const TexArea = (props:any) => {

    const {input, meta:{touched, error}, ...rest} = props

    const hasError = touched && error

    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            <textarea placeholder={'Write New Message'} {...input} {...rest}/>
            <div>
            {hasError && <span className={s.errorText}>{error}</span>}
            </div>
        </div>

    );
};
