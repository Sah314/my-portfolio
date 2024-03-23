import React from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
    const {pending} = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="group flex rounded-full bg-gray-800 text-white h-12 w-32 p-3 justify-center items-center gap-2 text-center hover:bg-gray-950 hover:scale-110 active:scale-105 transition disabled:scale-100 disabled:bg-opacity-65"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}
        </>
      )}
    </button>
  );
}

export default SubmitButton