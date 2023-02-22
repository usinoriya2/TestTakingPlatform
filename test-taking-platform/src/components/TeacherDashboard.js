import { Header } from "./MainDashboard";
import { useState } from "react";
// import Question from "./Question";
import React from "react";
import Section from "./Section";
// import Section from "./Section";

const TeacherDashboard = () => {
  //teacher dashboard component
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const Body = () => {
  //body component
  const sectionsData = [];
  const [sectionCount, setSectionCount] = useState(0);
  const [currSection, setCurrSection] = useState(1);

  const populateSections = () => {
    // this function contains the section button
    let sectionList = [];

    for (let i = 0; i < sectionCount; i++) {
      const sectionJson = {
        sectionId: i + 1,
        sectionName: "",
        noOfQues: 0,
        Questions: [],
      };
      sectionList.push(
        <button
          key={"section " + i + 1}
          onClick={() => {
            changeCurrentSection(i + 1);
          }}
        >
          Section {i + 1}
        </button>
      );
      sectionsData.push(sectionJson);
    }
    return sectionList;
  };

  const changeCurrentSection = (currentSection) => {
    setCurrSection(currentSection);
  };

  const changeSelectOptionHandler = (event) => {
    // handles the event target for section accord to the selection
    const noOfSections = parseInt(event.target.value);
    setSectionCount(noOfSections);
  };

  const fillSection = () => {
    for (let i = 0; i < sectionsData.length; i++) {
      if (sectionsData[i].sectionId === currSection) {
        return <Section {...sectionsData[i]} />;
      }
    }
  };

  const sectionDropdown = // dropdown to choose number of sections
    (
      <div>
        <label className="section-number">Number of sections: </label>
        <select name="select-section" onChange={changeSelectOptionHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    );

  return (
    <>
      <h2 className="test-name">
        Test name:{" "}
        <input
          type="text"
          className="test-name-input"
          placeholder="write your test name"
        ></input>
      </h2>
      {sectionDropdown}

      <br></br>
      {populateSections()}
      <br></br>
      {fillSection()}
      <br></br>
    </>
  );
};

export default TeacherDashboard;
