import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Container from '../../Components/Container/Container'
import Loader from '../../Components/Loader/Loader'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import TodoTable from '../../Components/TodoTable/TodoTable'
import { getTodoList, todoList } from '../../Redux/Todo/todoSlice'

const Home = (props: any) => {

    const dispatch = useAppDispatch();

    const data: any = useAppSelector(todoList);

    console.log(data);

    const columns = [
        "ID",
        "Title",
        "Status"
    ];

    useEffect(() => {

        dispatch(getTodoList());

    }, [])

    return (
        <>
            <NavigationBar />

            <Container>

                <TodoTable columns={columns} todo={data.todo} />

                {
                    data.status === 'loading' && <Loader />
                }


            </Container>

        </>

    )
}

export default Home