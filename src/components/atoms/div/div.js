import React from 'react'

const Div = (props) => {
	return (
		<div className={props.className} onClick={props.function}>
			{props.children}
		</div>
	)
}

export default Div