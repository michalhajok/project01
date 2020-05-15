import React from 'react'

import Paragraph from './../../atoms/paragraph'
import Div from './../../atoms/div'
import './aside.css'

const Aside = ({game}) => {
	return (
		<Div className="aside">
			<Paragraph>
				Success:
				<br/>
				{game.successful}
			</Paragraph>
			<Paragraph>
				Draw:
				<br/>
				{game.draw}
			</Paragraph>
			<Paragraph>
				Defeat:
				<br/>
				{game.defeat}
			</Paragraph>
		</Div>
	)
}
export default Aside
