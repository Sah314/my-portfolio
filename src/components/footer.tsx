import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className=" bg-gray-400 w-full text-center py-3">
      <p>
        Made with <span className=" text-red-500 text-lg">&hearts;</span> by
        Sahil Khadayate{" "}
      </p>
      <small className="my-4">
        &copy; 2024 Sahil Khadayate. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer