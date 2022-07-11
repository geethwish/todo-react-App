import { useEffect } from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";

// import pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { getUser, user } from "./Redux/Auth/authSlice";

function App() {

    const dispatch = useAppDispatch();

    const userDetails = useAppSelector(user);

    // check for logged user
    useEffect(() => {

        dispatch(getUser());

    }, [])


    return (
        <Routes>

            <Route path="/" element={Object.keys(userDetails.user).length > 0 ? <Home /> : <Login />} />

            <Route path="/login" element={<Login />} />

        </Routes>
    );
}

export default App;
