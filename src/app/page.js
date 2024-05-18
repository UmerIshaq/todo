"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [disc, setdisc] = useState("");
  const [MainTask, setMainTask] = useState([]);
  const SubmitHandler = (e) => {
    e.preventDefault();
    setMainTask([...MainTask, { title, disc }]);
    setdisc("");
    settitle("");
  };
  let renderTask = <h2 className="text-3xl font-semibold text-center">No Task Available</h2>
  if (MainTask.length > 0) {
    renderTask = MainTask.map((t, i) => {
      return (
        <li>
          <div className="flex justify-between mb-5">
            <h3 className="text-2xl font-semibold">{t.title}</h3>
            <h5 className="text-xl font-semibold">{t.disc}</h5>
            <button 
            onClick={()=>{
              deleteHandler(i)
            }}
            className="bg-red-400 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </li>
      );
    });
  }
  const deleteHandler=(i)=>{
    let CopyTask=[...MainTask]
    CopyTask.splice(i,1)
    console.log(CopyTask)
    setMainTask(CopyTask)

  }
  return (
    <div>
      <h1 className="bg-black text-white p-2 font-bold text-center text-3xl">
        Umer's Todo List
      </h1>
      <form onSubmit={SubmitHandler} className="text-center">
        <input
          type="text"
          placeholder="Enter Task Title"
          className="border-zinc-800 border-4 m-5 py-2 px-3 text-2xl"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Task Description"
          className="border-zinc-800 border-4 m-5 py-2 px-3 text-2xl"
          value={disc}
          onChange={(e) => setdisc(e.target.value)}
        />
        <button className="bg-black text-white px-4 text-2xl py-3 font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="bg-slate-200 p-8">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}
