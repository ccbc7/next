"use client";

import axios from "axios";

export default function Sample() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="App">
        <h3>こんばんは</h3>
        <button onClick={onClickFetchData}>データ取得</button>
      </div>
    </>
  );
}
