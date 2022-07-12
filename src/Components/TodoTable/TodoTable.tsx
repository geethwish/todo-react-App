import classNames from 'classnames';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axiosInstance from '../../Services/axiosInstance';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

import Paginator from './Paginator';

import styles from './TodoTable.module.scss';

import { AiFillCheckCircle } from 'react-icons/ai';
import { FaCalendarTimes } from 'react-icons/fa';


interface TodoTablePros {
    columns: Array<string>,
    todo: Array<any>
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


const TodoTable = (props: TodoTablePros) => {

    const { columns, todo } = props;

    const [currentList, setCurrentList]: any = useState([]);

    const [pages, setPage] = useState([]);

    const [pagesCount, setPagesCount] = useState(0);

    const [currentRecord, setCurrentRecord] = useState(0);

    const [currentPage, setCurrentPage]: any = useState(1)

    const [modalVisible, setModalVisible] = useState(false);

    const [selectedTodo, setSelectedTodo]: any = useState({});

    const handlePageChange = (page: any) => {

        console.log(currentPage, pagesCount, typeof currentPage);

        let start = page !== 1 ? ((20 * (page - 1)) + 1) : 20 * (page - 1)

        let End = 20 * page;


        if (page === "next" && parseInt(currentPage) <= pagesCount) {

            const nextPage = currentPage + 1;

            console.log(currentPage, nextPage, pagesCount);

            start = nextPage !== 1 ? ((20 * (nextPage - 1)) + 1) : 20 * (nextPage - 1);

            End = 20 * nextPage;

            setCurrentPage(nextPage);

            setCurrentList(todo.slice(start, End));

        } else if (page === "back" && currentPage > 1) {

            const previousPage = currentPage - 1;

            start = previousPage !== 1 ? ((20 * (previousPage - 1)) + 1) : 20 * (previousPage - 1);

            End = 20 * previousPage;

            setCurrentPage(previousPage);

            setCurrentList(todo.slice(start, End));

        } else {

            setCurrentPage(page);

            setCurrentList(todo.slice(start, End));
        }



    }

    useEffect(() => {

        if (todo.length > 0) {

            setCurrentList(todo.slice(0, 20));

            setPagesCount(Math.ceil(todo.length / 20));

            const pagesArray: any = [];

            for (let index = 0; index < (todo.length / 20); index++) {

                pagesArray.push(index + 1);

            }

            setPage(pagesArray);

            setCurrentRecord(20)
        }

    }, [todo])

    const handleTableClick = (id: any) => {

        setModalVisible(!modalVisible)

        setSelectedTodo({});

        axiosInstance.get(`/todos/${id}`).then((response) => {

            setTimeout(() => {
                setSelectedTodo(response.data)
            }, 2000);

        })
    }

    return (
        <div className={styles.tableContainer}>

            <table className={styles.table}>

                <tr>
                    {columns && columns.length > 0 &&
                        columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))
                    }

                </tr>

                {
                    currentList && currentList.length > 0 && currentList.map((todoItem: any, index: number) => (
                        <tr key={index} onClick={() => handleTableClick(todoItem.id)}>
                            <td>{todoItem.id}</td>
                            <td>{todoItem.title}</td>
                            <td>{todoItem.completed ?
                                <div className={classNames(styles.badge, styles.done)}>Done</div> :
                                <div className={classNames(styles.badge, styles.pending)}>Pending</div>}</td>
                        </tr>
                    ))
                }

            </table>

            <Paginator pages={pages} pageHandle={handlePageChange} active={currentPage} />

            <Modal
                isOpen={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className={styles.modalContainer}>

                    {
                        Object.keys(selectedTodo).length > 0 && <div className={styles.modalContent}>

                            <h2 className={styles.modalTitle} >
                                {selectedTodo.title}
                            </h2>

                            <div className={styles.iconWrapper}>
                                {selectedTodo.completed ? <AiFillCheckCircle className={styles.icon} /> : <FaCalendarTimes className={styles.iconPending} />}
                            </div>

                            <div className={styles.modalFooter}>

                                <Button label='Close' name='close' onClick={() => setModalVisible(false)} />

                            </div>

                        </div>

                    }

                    {
                        Object.keys(selectedTodo).length === 0 && <Loader />
                    }



                </div>

            </Modal>
        </div >
    )
}

export default TodoTable