import React from 'react';

function level(props){
	return(
		<div className="level">
	        <button className="scorebtn plus" onClick={props.plus}>+</button>
	        <button className="scorebtn minus" onClick={props.minus}>–</button>
		</div>
	);
}
export default level;
