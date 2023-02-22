import React from "react";
import Question from "./Question";
import { useState } from "react";
const Section = (props) => {
  //section component
  const [numberOfQues, setNumberOfQues] = useState(0);
  const [currQuestion, setCurrQuestion] = useState(1);
  const askNoOfQues = () => {
    //function gives div to enter number of quest
    const askQuestion = (
      <>
        <label>Section :{props.sectionId}</label>
        <br></br>
        <label>Enter number of Question: </label>
        <input
          type="number"
          name="noOfQues"
          className="no-of-ques"
          onBlur={changeInNoOfQues}
        />
      </>
    );
    return askQuestion;
  };
  const changeInNoOfQues = (event) => {
    // this handles the event target to show question buttons after click
    const noOfQuestions = event.target.value;
    setNumberOfQues(noOfQuestions);
  };

  const fillQuestions = () => {
    for (let i = 0; i < props.Questions.length; i++) {
      if (props.Questions[i].quesId === currQuestion) {
        return <Question {...props.Questions[i]} />;
      }
    }
  };

  const populateQuestions = () => {
    //populate the list of questions
    let questionList = [];
    for (let i = 0; i < numberOfQues; i++) {
      const quesJson = {
        quesId: i + 1,
        quesContent: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        corrOption: "",
      };
      questionList.push(
        <>
          <button
            key={"question " + i + 1}
            onClick={() => {
              changeCurrQues(i + 1);
            }}
          >
            Question {i + 1}
          </button>
        </>
      );
      props.Questions.push(quesJson);
    }
    return questionList;
  };
  const changeCurrQues = (currentQues) => {
    setCurrQuestion(currentQues);
  };

  return (
    <>
      {askNoOfQues()}
      <br></br>
      {populateQuestions()}
      <br></br>
      {fillQuestions()}
    </>
  );
};

export default Section;
