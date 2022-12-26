import React from "react";

const Loading = () => {
  return (
    // <div className='text-center h-screen '>
    //     <button className="btn loading">loading</button>
    // </div>
    <div className="loading d-flex justify-content-center mt-3">
      <div class="spinner-border text-secondary text-center" role="status">
        <span class="sr-only"></span>
      </div>
      <h3 className="text-secondary ms-2">Loading...</h3>
    </div>
  );
};

export default Loading;
