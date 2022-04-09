import React from 'react';
import s from './FormValid.module.scss'

export const TexArea = (props:any) => {

    const {input, meta, ...rest} = props

    const hasError = meta.touched && meta.error

    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            <textarea placeholder={'Write New Message'} {...input} {...rest}/>
            <div>
            {hasError && <span className={s.errorText}>{meta.error}</span>}
            </div>
        </div>

    );
};
