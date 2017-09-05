import React, { Component } from 'react';
import level from './level';
import levelbar from './levelbar';
import PropTypes from 'prop-types';

class Player extends Component {
	render() {
		let score = this.props.stats.score * this.props.units;
		score += 'px';
		return (
		<section className="player player1">
            <h2>{this.props.stats.name}</h2>
            <p className="score">Score: {this.props.stats.score}</p>
            <Scorebar height={score} />
            <level 
            plus={this.props.handlePlusScore} 
            minus={this.props.handleMinusScore}
            />
        </section>

		);
	}
}

// var Button = require('reset-button')
 
// function clicked(event){}
 
// <Button onClick={clicked} >Reset</Button>
 
// <Button activeStyle={{position:'relative', top: 1}}>Save as</Button>



Player.PropTypes = {
	key: PropTypes.number.isRequired,
	stats: PropTypes.shape({
		name: PropTypes.string,
		score: PropTypes.number
	}),
	units: PropTypes.number,
	handlePlusScore: PropTypes.func,
	handleMinusScore: PropTypes.func
};
//Specifies the default values for props:
Player.defaultProps = {
	units: 50
};


export default Player;