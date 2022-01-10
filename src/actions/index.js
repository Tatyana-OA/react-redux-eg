export const increment = (nr) => {
	// adding payload
	return {
		type: 'INCREMENT',
		payload: nr || 1
	}
}

export const decrement = () => {
	return {
		type: 'DECREMENT',
	}
}