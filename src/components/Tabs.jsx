import React, { useState } from "react";
import tab1 from "/src/images/tab1.png";
import tab2 from "/src/images/tab2.png";
function Tabs() {
  const [tabContent, setTabContent] = useState(0);
  let content =
    tabContent === 0 ? (
      <div className="tabContainer relative w-full h-[60vh] overflow-hidden">
        <img
          src={tab1}
          alt="tab"
          className="w-full h-full object-cover object-center"
        />
        <div className="scheduleBox absolute bg-white bg-opacity-85 h-[300px] w-[400px] top-20 left-[30%] z-20 ">
          <h3 className="absolute left-[15%] top-6 font-black text-2xl text-[#39496e]">
            SCHEDULE
          </h3>
          <div className="">
            <div className="flex gap-10 justify-center text-justify mb-1 mt-20">
              <h4>25 Nov 2016</h4>
              <h4>Vestibulam viverra</h4>
            </div>
            <div className="flex gap-10 justify-center mb-4 text-justify ">
              <h4>28 Nov 2016</h4>
              <h4>Vestibulam viverra</h4>
            </div>
            <div className="flex gap-10 justify-center mb-4 text-justify">
              <h4>18 Dec 2016</h4>
              <h4>Vestibulam viverra</h4>
            </div>
            <div className="flex gap-10 justify-center mb-4 text-justify">
              <h4>07 Jan 2017</h4>
              <h4>Vestibulam viverra</h4>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="tabContainer relative w-full h-[60vh] overflow-hidden">
        <img
          src={tab2}
          alt="tab"
          className="w-full h-full object-cover object-center"
        />
        <div className="scheduleBox absolute bg-white bg-opacity-85 h-[300px] w-[400px] top-20 left-[30%] z-20 ">
          <h3 className="absolute left-[15%] top-6 font-black text-2xl text-[#39496e]">
            SCHEDULE
          </h3>
          <div className="">
            <div className="flex gap-10 justify-center text-justify mb-1 mt-20">
              <h4>17 Nov 2016</h4>
              <h4>Vestibulam viverra</h4>
            </div>
            <div className="flex gap-10 justify-center mb-4 text-justify ">
              <h4>19 Dec 2016</h4>
              <h4>Vestibulam viverra</h4>
            </div>
            <div className="flex gap-10 justify-center mb-4 text-justify">
              <h4>28 Dec 2016</h4>
              <h4>Vestibulam viverra</h4>
            </div>
            <div className="flex gap-10 justify-center mb-4 text-justify">
              <h4>09 Feb 2017</h4>
              <h4>Vestibulam viverra</h4>
            </div>
          </div>
        </div>
      </div>
    );
  function handleTabClick(value) {
    setTabContent(value);
  }

  return (
    <>
      <div className="backdrop flex justify-start">
        <div className="flex ml-[25%] cursor-pointer ">
          <div
            className="tab w-[150px] h-[100%] flex flex-col justify-center items-center font-black "
            style={{
              backgroundColor: tabContent === 0 ? "#cbd5e1" : "",
              color: tabContent === 0 ? "#172554" : "#cbd5e1",
            }}
            onClick={() => handleTabClick(0)}
          >
            <h2>MOUNTAIN 1</h2>
            {tabContent === 0 ? (
              <div className="line bg-blue-950 w-[81%]"></div>
            ) : null}
          </div>
          <div
            className="tab w-[150px] h-[100%] flex flex-col justify-center items-center font-black "
            style={{
              backgroundColor: tabContent === 1 ? "#cbd5e1" : "",
              color: tabContent === 1 ? "#172554" : "#cbd5e1",
            }}
            onClick={() => handleTabClick(1)}
          >
            <h2>MOUNTAIN 2</h2>
            {tabContent === 1 ? (
              <div className="line bg-blue-950 w-[81%]"></div>
            ) : null}
          </div>
        </div>
      </div>
      {content}
    </>
  );
}

export default Tabs;
