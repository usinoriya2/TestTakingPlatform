import React from "react";

const Question = (props) => {
  return (
    <div key="props.quesId">
      <div>Question: {props.quesId}</div>
      <br></br>
      Write a question: <input type="text" label="content" />
      <div>
        A. <input type="text" label="optionA" />
      </div>
      <div>
        B. <input type="text" label="optionB" />
      </div>
      <div>
        C. <input type="text" label="optionC" />
      </div>
      <div>
        D. <input type="text" label="optionD" />
      </div>
      <div>
        Correct Answer: <input type="text" label="correctOption" />
      </div>
    </div>
  );
};

export default Question;
