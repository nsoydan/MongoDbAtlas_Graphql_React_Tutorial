import React from "react";

function Spinner() {
  return (
    <div class="flex justify-center items-center m-40 space-x-2 ">
      <div
        class="spinner-border animate-spin inline-block w-16 h-16 border-4 rounded-full text-blue-600"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
