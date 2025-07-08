import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/taskSlice';

const TaskInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTask(input.trim()));
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskInput;
