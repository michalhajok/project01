import React from 'react'

import Link from './../../atoms/link'
import Paragraph from './../../atoms/paragraph'

const Reset = ({ game, setGame }) => {

	const reset = ({ game, setGame }) => {
		setGame({ round: 0, successful: 0, draw: 0, defeat: 0 })
	}


	return (
		<Link className="reset"  url="/">
			<Paragraph function={()=>reset({ game, setGame })}>
				Reset result
			</Paragraph>
		</Link>
	)
}

export default Reset
