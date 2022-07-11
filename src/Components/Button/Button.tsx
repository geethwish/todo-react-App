import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonsProps {
    label: string
    name: string,
    type?: "button" | "submit",
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const Button = (props: ButtonsProps) => {

    const { label, name, type, onClick } = props
    return (

        <button
            name={name}
            type={type ? type : "button"}
            onClick={onClick}
            className={styles.button}
        >
            {label}
        </button>
    )
}

export default Button