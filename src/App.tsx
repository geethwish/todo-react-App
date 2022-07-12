import { useEffect } from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./app/hooks";

// import pages
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { getUser, user } from "./Redux/Auth/authSlice";

function App() {

    const dispatch = useAppDispatch();

    const userDetails: any = useAppSelector(user);

    // check for logged user
    useEffect(() => {

        dispatch(getUser());

    }, [])

    if (userDetails && userDetails.user && userDetails.user.verify) {

        <Navigate to="/" />
    }

    return (
        <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

        </Routes>
    );
}

export default App;
