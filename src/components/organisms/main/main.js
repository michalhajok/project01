import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"

import Div from './../../atoms/div'
import Paragraph from './../../atoms/paragraph'
import NavLink from './../../atoms/link'
import { Switch } from './switch'

import './main.css'

library.add(faHandRock, faHandPaper, faHandScissors)

const Main = ({game, setGame, setPlays }) => {
	return (
		<Div >
			<Div className="main">
				<NavLink url="/result">
					<Div
						function = {() => Switch({ game, setGame, setPlays }, "rock")}
					>
						<FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
						<Paragraph>Rock</Paragraph>
					</Div>
				</NavLink>
				<NavLink url="/result">
					<Div
						function = {() => Switch({ game, setGame, setPlays }, "paper")}
					>
						<FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
						<Paragraph>Paper</Paragraph>
					</Div>
				</NavLink>
				<NavLink url="/result">
					<Div
					function={() => Switch({ game, setGame, setPlays }, "scissors")}
					>
						<FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
						<Paragraph>Scissors</Paragraph>
					</Div>
				</NavLink>
			</Div>
		</Div>
	)
}

export default Main
