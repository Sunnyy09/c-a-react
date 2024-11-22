import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="text-center bg-gray-600 text-white  p-4">
      <h1 className="text-3xl font-semibold">
        User: <span className="text-orange-600 animate-pulse"> {id}</span>
      </h1>
    </div>
  );
}

export default User;
