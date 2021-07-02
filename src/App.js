import React, {useState} from 'react';
import './App.css';
import { FaPlus, FaRegCalendarAlt, FaRegClock } from 'react-icons/fa';
import TimePicker from './timePicker';
import { BsArrowsExpand } from "react-icons/bs";
import { BiBookContent } from "react-icons/bi";
import Clock from 'react-clock';

const App = () => {

  const [date, setdate] = useState("Select Date");

  const handleSubmit = () => {
    window.alert("Response registered")
  }
  return (
    <div className="container display-center">
      <div className="dialog">
        <div className="header">
          <div className="headerTitle">
            Tasks   0
          </div>
          <div className="randomPlus display-center">
            <FaPlus size={16} />
          </div>
        </div>
        <div className="content">
          <div className="descriptionSection mt-7">
            <span className="textType1">Task Description</span>
            <label className="bg-white p-1 pr-2 w-full h-7 border border-gray-400 rounded-md flex items-center">
              <select className="mt-1" value={null}>
                <option value="0">Select </option>
                <option value="7382">steam </option>
              </select>
              <BiBookContent />
            </label>
          </div>
          <div className="pr-2 mt-3 w-full" >
            <div className="flex flex-row">
              <div className="w-1/2 mr-3 flex flex-col">
                <span className="textType1">Date</span>
                <label className="bg-white p-1 w-full relative h-7 border border-gray-400 rounded-md flex items-center">
                  <FaRegCalendarAlt  />
                  <span className="font-medium absolute right-10" >{date}</span>
                  <input required className=" opacity-0 border-0 w-4/5 ml-1" type="date" value={date} onChange={e => {setdate(e.target.value)}} />
                </label>
              </div>
              <div className="w-1/2 ml-3">
                <span className="textType1">Time</span>
                <label className="bg-white p-1 w-full h-7 border border-gray-400 rounded-md flex items-center">
                  <FaRegClock className="mr-1" />
                  <TimePicker />
                </label>
              </div>
            </div>
          </div>
          <div className="descriptionSection mt-3">
            <span className="textType1">Asign User</span>
            <label className="bg-white p-1 w-full h-7 border border-gray-400 rounded-md flex items-center pr-2">
              <select className="mt-1" value={null}>
                <option value="0">Select </option>
                <option value="7382">steam </option>
              </select>
              <BsArrowsExpand />
            </label>
          </div>
          <div className="w-full mt-5 flex justify-end">
            <div className=" w-24 h-8 rounded-md mr-2 flex justify-center items-center text-black hover:bg-white ">
              <span>Cancel</span>
            </div>
            <div onClick={() => handleSubmit()} className=" w-24 h-8 bg-green-500 rounded-md flex justify-center items-center text-white hover:bg-green-400">
              <span>Save</span>
            </div>
          </div>
          <Clock value={new Date()}  />

        </div>
      </div>
    </div>
  )
}

export default App
