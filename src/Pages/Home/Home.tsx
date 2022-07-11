import React from 'react'
import Container from '../../Components/Container/Container'
import Loader from '../../Components/Loader/Loader'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import TodoTable from '../../Components/TodoTable/TodoTable'

const Home = (props: any) => {

    const columns = [
        "ID",
        "Title",
        "Status"
    ]
    return (
        <>
            <NavigationBar />
            <Container>
                <TodoTable columns={columns} />
                <Loader />
            </Container>
        </>

    )
}

export default Home