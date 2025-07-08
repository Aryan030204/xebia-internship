import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTask } from '../utils/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li className={task.completed ? 'completed' : ''}>
      <span>{task.text}</span>
      <div className="buttons">
        <button onClick={() => dispatch(toggleComplete(task.id))} className='complete'>Complete</button>
        <button onClick={() => dispatch(deleteTask(task.id))} className="delete">Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
