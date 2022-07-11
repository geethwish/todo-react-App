import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Button from '../../Components/Button/Button';
import InputField from '../../Components/InputField/InputField';
import Loader from '../../Components/Loader/Loader';
import { login, reset, user } from '../../Redux/Auth/authSlice';

import styles from './Login.module.scss';

const Login = (props: any) => {

    const userDetails = useAppSelector(user);

    const dispatch = useAppDispatch();

    let navigate = useNavigate();

    const [inputFieldErrors, setInputFieldErrors]: any = useState([])

    const notify = () => toast.success("Login SuccessFull");

    const notifyError = (msg: any) => toast.error(msg);

    const handleSubmit = (e: any) => {

        e.preventDefault();

        const username = e.target.username.value;

        const password = e.target.password.value;

        if (!username && !password) {

            setInputFieldErrors(['password', 'username']);

        } else if (!username) {

            setInputFieldErrors([...inputFieldErrors, 'username']);

        } else if (!password) {

            setInputFieldErrors([...inputFieldErrors, 'password']);

        } else {

            setInputFieldErrors([]);

            const data = {
                username,
                password

            }

            dispatch(login(data))

        }


    }

    useEffect(() => {

        // check login status
        if (userDetails.status === "success") {

            // show success message
            notify();

            // reset the api status
            reset();

            // redirect to todo page
            navigate('/');

        } else if (userDetails.status === "failed") {

            // notify error
            notifyError(userDetails.errorMessage);

        }

        return () => {
            reset();
        }

    }, [navigate, userDetails])


    return (
        <div className={styles.loginContainer}>

            <div className={styles.title}>
                Todos
            </div>


            {
                userDetails.status === "loading" && <Loader />
            }

            {
                userDetails.status !== "loading" && <div className={styles.wrapper}>


                    <div className={styles.formWrapper}>

                        <form onSubmit={handleSubmit}>

                            <InputField
                                name='username'
                                label='Username'
                                placeholder='jon doe'
                                errorMessage={inputFieldErrors.includes("username") ? "Please Enter Username" : ''}
                            />

                            <InputField
                                name='password'
                                label='Password'
                                type={'password'}
                                errorMessage={inputFieldErrors.includes("password") ? "Please Enter Password" : ''}
                            />

                            <Button label='Sign In' type='submit' name='btnSubmit' />

                        </form>

                    </div>


                </div>
            }



        </div>
    )
}

export default Login