
import styles from './InputField.module.scss';

import classnames from 'classnames'
interface InputFieldProps {
    label: string
    name: string,
    id?: string,
    placeholder?: string,
    type?: React.HTMLInputTypeAttribute,
    onChange?: React.EventHandler<React.ChangeEvent>,
    errorMessage?: string
}
const InputField = (props: InputFieldProps) => {
    const { label, name, id, type, onChange, placeholder, errorMessage } = props
    return (
        <div className={classnames(styles.formGroup, errorMessage ? styles.border : '')}>
            <label
                htmlFor={name || id}
                className={styles.label}
            >
                {label}
            </label>
            <input
                type={type || 'text'}
                id={id || name}
                name={name}
                placeholder={type === "password" ? "******" : placeholder}
                className={styles.input}
            />
            {
                errorMessage && <span className={styles.error}>
                    *{errorMessage}
                </span>
            }

        </div>
    )
}

export default InputField