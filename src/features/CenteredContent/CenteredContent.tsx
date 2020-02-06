import React from "react"

import styles from "./CenteredContent.module.css"

export const CenteredContent: React.FC = ({ children }) => {
	return (
		<div className={styles.centeredContent}>
			<div>{children}</div>
		</div>
	)
}

export default CenteredContent
