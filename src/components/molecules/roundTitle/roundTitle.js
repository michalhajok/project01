import React from 'react'

import Paragraph from '../../atoms/paragraph'
import H2 from "../../atoms/h2";

const RoundTitle = ({ game}) => {
	return (
		<div className="Round">
			<H2>Rock, Paper, Scissors</H2>
			<Paragraph>Round {" " + game.round}, select the symbol</Paragraph>
		</div>
	)
}

export default RoundTitle
