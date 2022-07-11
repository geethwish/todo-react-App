
import styles from './InputField.module.scss';

import classnames from 'classnames'
interface InputFieldProps {
    label: string
    name: string,
    id?: string,
    placeholder?: string,
    type?: React.HTMLInputTypeAttribute,
    onChange?: React.EventHandler<React.ChangeEvent>
}
const InputField = (props: InputFieldProps) => {
    const { label, name, id, type, onChange, placeholder } = props
    return (
        <div className={classnames(styles.formGroup)}>
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
        </div>
    )
}

export default InputField