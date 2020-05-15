import React from 'react'

import Div from './../../atoms/div'
import H2 from './../../atoms/h2'
import Paragraph from './../../atoms/paragraph'

const ResultTitle = ({plays}) => {
	switch (plays.result) {
    case "successful":
      return (
        <Div>
          <H2>You win ;)</H2>
          <Paragraph>Play again!</Paragraph>
        </Div>
      )
    case "draw":
      return (
        <Div>
          <H2>Draw :O</H2>
          <Paragraph>Play again!</Paragraph>
        </Div>
      )
    case "defeat":
      return (
        <Div>
          <H2>You lose :(</H2>
          <Paragraph>Play again!</Paragraph>
        </Div>
      )
    default:
      break
  }
}

export default ResultTitle
