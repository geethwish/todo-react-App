import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';
import { getTodo } from '../../Services/todo';


export interface TodoState {
    todo: any;
    status: 'idle' | 'loading' | 'failed' | 'success';
}

const initialState: TodoState = {
    todo: [],
    status: 'idle',
};


export const getTodoList = createAsyncThunk(
    'todo/getTodoList',
    async () => {

        const response = await getTodo();

        return response;

    }
);

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle';
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodoList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getTodoList.fulfilled, (state, action) => {
                state.status = 'success';

                state.todo = action.payload;
            })
            .addCase(getTodoList.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { reset } = todoSlice.actions;

export const todoList = (state: RootState) => state.todo;

export default todoSlice.reducer;
