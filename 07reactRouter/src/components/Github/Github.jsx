import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export async function GithubInfo() {
  const response = await fetch("https://api.github.com/users/Sunnyy09");
  return response.json();
}

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Sunnyy09").then((response) =>
  //     response.json().then((data) => setData(data))
  //   );
  // }, []);

  return (
    <div className="text-center font-semibold m-4 flex place-items-center gap-5 flex-col bg-red-700 rounded text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img
        className="rounded-full"
        src={data.avatar_url}
        alt="Git-Image"
        width={300}
      />
    </div>
  );
}

export default Github;
