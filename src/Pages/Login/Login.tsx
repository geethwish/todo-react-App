import React from 'react'
import Button from '../../Components/Button/Button';
import InputField from '../../Components/InputField/InputField';

import styles from './Login.module.scss';

const Login = (props: any) => {

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(e.target.username.value);

    }
    return (
        <div className={styles.loginContainer}>

            <div className={styles.title}>
                Todos
            </div>

            <div className={styles.wrapper}>


                <div className={styles.formWrapper}>

                    <form onSubmit={handleSubmit}>

                        <InputField name='username' label='Username' placeholder='jon doe' />
                        <InputField name='password' label='Password' type={'password'} />
                        <Button label='Sign In' type='submit' name='btnSubmit' />
                    </form>

                </div>


            </div>


        </div>
    )
}

export default Login