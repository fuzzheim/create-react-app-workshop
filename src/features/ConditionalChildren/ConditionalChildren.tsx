import React, { useState } from "react"

import styles from "./ConditionalChildren.module.css"

export const ConditionalChildren: React.FC = ({ children }) => {
	const [ showChildren, setShowChildren ] = useState(false)

	const onCheckboxChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setShowChildren(evt.target.checked)
	}

	return (
		<React.Fragment>
			<div className={styles.boxContainer}>
				<input type="checkbox" checked={showChildren} onChange={onCheckboxChange} />
			</div>
			{showChildren && children}
		</React.Fragment>
	)
}

export default ConditionalChildren
