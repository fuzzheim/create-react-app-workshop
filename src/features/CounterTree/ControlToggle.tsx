import React from "react"

interface IControlToggleProps {
	onClick: () => any
}

export const ControlToggle: React.FC<IControlToggleProps> = ({ onClick }) => {
	return <button onClick={onClick}>Toggle controls</button>
}

export default ControlToggle
