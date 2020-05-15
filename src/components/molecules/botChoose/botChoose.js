import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons"

import Div from './../../atoms/div'
import Paragraph from './../../atoms/paragraph'

library.add(faHandRock, faHandPaper, faHandScissors)

const BotChoose = ({plays}) => {
	switch (plays.bot) {
    case "rock":
      return (
        <Div>
          <FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
          <Paragraph>Rock</Paragraph>
        </Div>
      )

    case "paper":
      return (
        <Div>
          <FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
          <Paragraph>Paper</Paragraph>
        </Div>
      )

    case "scissors":
      return (
        <Div>
          <FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
          <Paragraph>Scissors</Paragraph>
        </Div>
      )

    default:
      break
  }
}

export default BotChoose