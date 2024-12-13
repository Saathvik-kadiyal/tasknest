import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIdea } from '../features/ideaSlice';

function AddIdeas() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addIdeaHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addIdea(input));
    setInput('');
  };

  return (
    <>
      <div className="mt-12 flex justify-center items-center">
        <form
          onSubmit={addIdeaHandler}
          className="relative flex mt-16 items-center justify-center bg-gradient-to-r from-slate-700 to-gray-800 p-4 rounded-full shadow-xl w-[90%] w-[90%] sm:w-[80%] md:w-[40%] lg:w-[40%] "
        >
          <label
            htmlFor="ideaInput"
            className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-indigo-300 transition-all duration-200 ease-in-out ${
              input ? 'text-sm -top-2' : ''
            }`}
          >
            Enter your Ideas
          </label>

          <input
            id="ideaInput"
            type="text"
            className="w-full sm:w-[85%] bg-transparent text-base outline-none text-indigo-200 py-2 px-4 placeholder-transparent focus:ring-2 focus:ring-indigo-400 rounded-l-full transition-all duration-300"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your Ideas"
          />

          <button
            type="submit"
            className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-2 px-4 ml-2 shadow-md transition-all duration-300"
          >
            +
          </button>
        </form>
      </div>
    </>
  );
}

export default AddIdeas;
