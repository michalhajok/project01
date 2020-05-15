import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faHandRock, faHandPaper, faHandScissors } from "@fortawesome/free-solid-svg-icons"

import Div from './../../atoms/div'
import Paragraph from './../../atoms/paragraph'

library.add(faHandRock, faHandPaper, faHandScissors)

const YourChoose = ({plays}) => {
	switch (plays.choosen) {
    case "rock":
      switch (plays.result) {
        case "draw":
          return (
            <Div className='Draw'>
              <FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
              <Paragraph>Rock</Paragraph>
            </Div>
          )
        case "defeat":
          return (
            <Div className='Defeat'>
              <FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
              <Paragraph>Rock</Paragraph>
            </Div>
          )
        case "successful":
          return (
            <Div className='Successful'>
              <FontAwesomeIcon icon={["fas", "hand-rock"]} transform={{ rotate: -90 }} size='6x' />
              <Paragraph>Rock</Paragraph>
            </Div>
          )
        default:
          break
      }
      break
    case "paper":
      switch (plays.result) {
        case "draw":
          return (
            <div className='Draw'>
              <FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
              <p>Paper</p>
            </div>
          )
        case "defeat":
          return (
            <div className='Defeat'>
              <FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
              <p>Paper</p>
            </div>
          )
        case "successful":
          return (
            <div className='Successful'>
              <FontAwesomeIcon icon={["fas", "hand-paper"]} transform={{ rotate: -90 }} size='6x' />
              <p>Paper</p>
            </div>
          )
        default:
          break
      }
      break
    case "scissors":
      switch (plays.result) {
        case "draw":
          return (
            <div className='Draw'>
              <FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
              <p>Scissors</p>
            </div>
          )
        case "defeat":
          return (
            <div className='Defeat'>
              <FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
              <p>Scissors</p>
            </div>
          )
        case "successful":
          return (
            <div className='Successful'>
              <FontAwesomeIcon icon={["fas", "hand-scissors"]} size='6x' />
              <p>Scissors</p>
            </div>
          )
        default:
          break
      }
      break
    default:
      break
  }
}

export default YourChoose
