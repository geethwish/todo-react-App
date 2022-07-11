import classNames from "classnames"
import { useEffect, useState } from "react"

import LogoutIcon from "../../Assets/icons/LogoutIcon"
import TodoIcon from "../../Assets/icons/Todo"
import Container from "../Container/Container"
import IconButton from "../IconButton/IconButton"
import styles from './NavigationBar.module.scss'
const NavigationBar = () => {

    const path: any = window.location.pathname;

    const [activeRoute, setActiveRoute] = useState('')

    useEffect(() => {

        if (path === '/') {

            setActiveRoute('todo');

        } else {
            setActiveRoute(path);

        }

    }, [path])


    const handleNavigation = (id: string) => {

        console.log(id);

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