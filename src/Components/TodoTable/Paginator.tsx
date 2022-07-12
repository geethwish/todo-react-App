/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames';
import styles from './TodoTable.module.scss';

interface PaginatorProps {
    pages: Array<any>,
    pageHandle: any,
    active: number
}

const Paginator = (props: PaginatorProps) => {
    const { pages, pageHandle, active } = props;

    return (
        <div className={styles.paginatorContainer}>

            <div className={styles.pagination}>

                <button className={styles.btn} onClick={() => pageHandle('back')}>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.btnIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>

                </button>

                <div className={styles.pages}>
                    {
                        pages && pages.length > 0 && pages.map((page: any, index: number) => (
                            <a key={index} className={classNames(styles.page, active === page ? styles.active : '')} onClick={() => pageHandle(page)}>{page}</a>
                        ))
                    }


                </div>

                <button className={styles.btn} onClick={() => pageHandle('next')}>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.btnIcon}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>

                </button>

            </div>

        </div>
    )
}

export default Paginator