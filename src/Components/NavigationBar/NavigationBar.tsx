import classNames from "classnames"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// components
import LogoutIcon from "../../Assets/icons/LogoutIcon"
import TodoIcon from "../../Assets/icons/Todo"
import { logout } from "../../Redux/Auth/authSlice"
import Container from "../Container/Container"
import IconButton from "../IconButton/IconButton"

// styles
import styles from './NavigationBar.module.scss'

const NavigationBar = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const path: any = window.location.pathname;

    const [activeRoute, setActiveRoute] = useState('');

    useEffect(() => {

        if (path === '/') {

            setActiveRoute('todo');

        } else {
            setActiveRoute(path);

        }

    }, [path])


    const handleNavigation = (id: string) => {

        if (id === "todo") {

        } else if (id === "logout") {

            dispatch(logout())

            navigate('/login')

        }


    }

    return (
        <div className={styles.navigationBackground}>
            <Container>
                <div className={classNames(styles.navigationContainer)}>

                    <div className={styles.logoSection}>
                        Todos
                    </div>

                    <div className={styles.actionSection}>
                        <IconButton
                            id="todo"
                            label={"todo"}
                            icon={<TodoIcon className={styles.icon} />}
                            onClick={handleNavigation}
                            className={styles.mr2}
                            activePath={activeRoute}
                        />

                        <IconButton
                            id="logout"
                            label={"Logout"}
                            icon={<LogoutIcon className={styles.inactiveIcon} />}
                            onClick={handleNavigation}
                            activePath={activeRoute}
                        />


                    </div>

                </div>
            </Container>
        </div>

    )
}

export default NavigationBar