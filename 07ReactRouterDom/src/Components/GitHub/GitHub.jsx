// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/frontendwaqas")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src={data.avatar_url}
            alt="GitHub Avatar"
          />
          <div className="text-xl font-semibold text-gray-800 mb-2">
            {data.name}
          </div>
          <div className="text-sm text-gray-500 mb-4">{data.bio}</div>
          <div className="text-lg text-gray-600">
            Followers: <span className="font-bold">{data.followers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHub;

export const GitHubInfo = async () => {
  const res = await fetch("https://api.github.com/users/frontendwaqas");
  return res.json();
};
