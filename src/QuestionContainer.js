import React from 'react';

function QuestionContainer(props) {
	return (
		<section className="questioncontainer">
          <p id="questionanswer"><span>Question:</span> {props.question}</p>
          {!props.showAnswer ? (
          	<div>
				<input type="text" placeholder="Answer" />
				 <button id="standardbtn">Standard</button>
         <button id="expertbtn">Expert</button>
				 </div>
		       ):(
				<div id="answerBox">
      <p id="answer"><span>Answer:</span> <i>Game Started</i></p> <button id="nextbtn">Next</button>
      <p class="directions">Give yourself a point if you win. Take a point away if you lose. No Cheating!</p>
    </div>
          	)
      }
          
        </section>
		);
}

export default Questioncontainer;