import React, { useRef } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeDoc } from "../features/docsSlice";
import { motion } from "framer-motion";

function DocsList() {
  const docs = useSelector((state) => state.docReducer.docs);
  const dispatch = useDispatch();
  const ref = useRef(null);

  return (
    <>
      <div ref={ref} className="w-full flex flex-wrap gap-6 items-start justify-center mt-8 px-4 sm:px-8">
        {docs.map((each) => (
          <motion.div
            drag
            dragConstraints={ref}
            key={each.id}
            className="relative bg-gradient-to-b from-slate-700/80 to-gray-800/90 shadow-lg shadow-indigo-500/40 w-full sm:w-80 h-72 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden"
          >
            <FaRegFileAlt size={30} className="text-indigo-400" />
            <p className="text-md mt-5 leading-tight text-white font-gobold">
              {each.details}
            </p>
            <button onClick={() => dispatch(removeDoc(each.id))}>
              <div className="footer absolute bottom-0 bg-red-700 w-full h-16 py-3 left-0 text-center">
                DELETE
              </div>
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default DocsList;
