import classNamesCombiner from "classnames";
import React, { ReactElement } from "react"
import styles from './IconButton.module.scss';

interface IconButtonsProps {
    id: string,
    icon?: ReactElement,
    label: string,
    onClick: any,
    className?: string,
    activePath: string
}

const IconButton = (props: IconButtonsProps) => {

    const { icon, id, label, onClick, className, activePath } = props;

    return (
        <div
            className={classNamesCombiner(styles.wrapper, className)}
            onClick={onClick ? () => onClick(id) : void (0)}
        >
            {icon}
            <p className={classNamesCombiner(styles.label, activePath === id ? styles.active : '')}>
                {label}
            </p>
        </div>
    )
}

export default IconButton