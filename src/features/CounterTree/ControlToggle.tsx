import React from "react"

interface IControlToggleProps {
	onToggle: () => void
}

export const ControlToggle: React.FC<IControlToggleProps> = ({ onToggle }) => {
	return (
		<button className="btn btn-secondary" type="button" onClick={onToggle}>
			Toggle controls
		</button>
	)
}

export default ControlToggle
