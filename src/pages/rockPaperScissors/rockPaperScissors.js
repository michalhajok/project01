import React from 'react'
import { useState } from "react"
import { Router } from "@reach/router"

import RoundTitle from "../../components/molecules/roundTitle";
import Main from './../../components/organisms/main'
import Aside from './../../components/organisms/aside'
import Result from './../../components/organisms/result'
import ResultTitle from './../../components/molecules/resultTitle'
import Div from './../../components/atoms/div'
import Reset from './../../components/molecules/reset'

import './home.css'

const RockPaperScissors = () => {
	const [plays, setPlays] = useState({
    choosen: "",
    bot: "",
    result: "",
  })
  const [game, setGame] = useState({
    round: 0,
    successful: 0,
    draw: 0,
    defeat: 0,
  })

	return (
		<Div className="container">
      <Router className="title">
        <RoundTitle path="/" game={game} />
        <ResultTitle path="/result" plays={plays} />
      </Router>
      <Router className="game">
        <Main path="/" game={game} setGame={setGame} setPlays={setPlays} />
        <Result path="/result" plays={plays} />
      </Router>
			<Aside game={game} />
      <Reset game={game} setGame={setGame} />
		</Div>
	)
}

export default RockPaperScissors
