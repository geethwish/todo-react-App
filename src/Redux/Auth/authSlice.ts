import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';
import { getLoginDetails } from '../../Services/login';


export interface AuthState {
    user: object;
    status: 'idle' | 'loading' | 'failed' | 'success';
    errorMessage?: string
}

const initialState: AuthState = {
    user: {},
    status: 'idle',
};


export const login = createAsyncThunk(
    'auth/login',
    async (credentials: any) => {

        // wait for few second
        const response: any = await getLoginDetails(credentials)

        // user name and password both correct then login

        if (response && response.username === 'admin' && response.password === 'admin') {

            const userDetails = { username: "Admin", userId: 1, verify: true };

            localStorage.setItem('user', JSON.stringify(userDetails))

            return userDetails;


        } else {

            // user name , password or both incorrect will get a error

            throw new Error("Invalid Credentials");

        }


    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle';
        },
        getUser: (state) => {
            const userDetails = JSON.parse(localStorage.getItem("user") || '{}')
            state.status = 'idle';
            state.user = userDetails;
        },
        logout: (state) => {
            localStorage.clear();
            state.status = 'idle';
            state.user = {};

        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'success';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.errorMessage = "Invalid Credentials"
                state.status = 'failed';
            });
    },
});

export const { reset, getUser, logout } = authSlice.actions;

export const user = (state: RootState) => state.auth;

export default authSlice.reducer;
