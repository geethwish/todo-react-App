import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../Redux/Auth/authSlice';
import todoReducer from '../Redux/Todo/todoSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        todo: todoReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
