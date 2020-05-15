import React from 'react'

import BotChoose from './../../molecules/botChoose'
import YourChoose from './../../molecules/yourChoose'
import Div from './../../atoms/div'
import Paragraph from './../../atoms/paragraph'
import Link from './../../atoms/link'

import './result.css'

const Result = ({plays}) => {
	return (
		<Div className="result">
			<Div>
				<YourChoose plays={plays} />
				<BotChoose plays={plays} />
			</Div>
			<Link url="/">
				<Paragraph>
					Play again
				</Paragraph>
			</Link>
		</Div>
	)
}

export default Result
