import React, { useState } from "react"

import styles from "./ConditionalChildren.module.css"

export const ConditionalChildren: React.FC = ({ children }) => {
	const [ showChildren, setShowChildren ] = useState(false)

	const onCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setShowChildren(event.target.checked)
	}

	return (
		<React.Fragment>
			<div className={styles.childController}>
				<input type="checkbox" checked={showChildren} onChange={onCheckboxChange} />
			</div>
			{showChildren && children}
		</React.Fragment>
	)
}

export default ConditionalChildren
