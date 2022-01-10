const loggedReducer = (state = false, action) => {
	switch(state.action) {
		case "SiGN_IN":
			return !state;

	}

}

export default loggedReducer;