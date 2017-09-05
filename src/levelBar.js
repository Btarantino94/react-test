import React from 'react';

function levelBar(props) {
	return (
		<div className="levelBarContainer">
              <div className="levelBar" style={{"height": props.height}}></div>
            </div>
            );
}
export default levelBar;