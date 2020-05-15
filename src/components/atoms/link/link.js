import React from 'react'
import { Link } from '@reach/router'

const NavLink = (props) => {
	return (
		<Link className={props.className}  to={props.url}>
			{props.children}
		</Link>
	)
}

export default NavLink
