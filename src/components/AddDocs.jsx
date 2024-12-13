import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDocs } from '../features/docsSlice';

function AddDocs() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addDocHandler = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch(addDocs(input));
    setInput('');
  };

  return (
    <form
      onSubmit={addDocHandler}
      className="flex flex-col items-center space-y-6 mt-16 p-6 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-900 shadow-xl rounded-xl w-[90%] sm:w-[80%] md:w-[40%] lg:w-[40%]  mx-auto ring-4 ring-indigo-500/50"
    >
      <input
        type="text"
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] bg-gray-800 rounded-full border-2 border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-3 px-5 leading-8 transition-all duration-300 ease-in-out shadow-lg"
        placeholder="Enter your notes"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[75%] text-white bg-indigo-500 py-3 px-6 rounded-full hover:bg-indigo-600 transition-all duration-300 ease-in-out shadow-lg text-lg focus:outline-none focus:ring-4 focus:ring-indigo-900"
      >
        Add Notes
      </button>
    </form>
  );
}

export default AddDocs;
