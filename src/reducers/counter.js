const counterReducer = (state = 0, action) => {
	// Using payload will mean that the action will affect in this particular specific way. See action "increment" to check out.
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
}

export default counterReducer;