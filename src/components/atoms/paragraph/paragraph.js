import React from 'react'

const Paragraph = (props) => {
	return (
		<p onClick={props.function}>
			{props.children}
		</p>
	)
}

export default Paragraph
