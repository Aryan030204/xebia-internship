import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.unshift({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleComplete: (state, action) => {
      const task = state.find(t => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleComplete, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
