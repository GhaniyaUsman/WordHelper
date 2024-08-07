import React, { useState } from 'react';

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeAlert = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="relative bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
        <strong className="font-bold">Hello! </strong>
        <span className="block sm:inline"> Welcome to WordHelper! </span>
        <button
          type="button"
          className="absolute top-0 bottom-0 right-0 px-4 py-3 text-yellow-700"
          onClick={closeAlert}
          aria-label="Close"
        >
          <svg
            className="fill-current h-6 w-6"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M14.348 5.652a1 1 0 00-1.415 0L10 8.586 7.068 5.652a1 1 0 00-1.415 1.415L8.586 10l-2.933 2.933a1 1 0 001.415 1.415L10 11.414l2.933 2.933a1 1 0 001.415-1.415L11.414 10l2.933-2.933a1 1 0 000-1.415z" />
          </svg>
        </button>
      </div>
    )
  );
};

export default Alert;
