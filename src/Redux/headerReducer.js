import { HANDLER_INPUT } from "./typeAction";

let initialState = {
    searchTest: "",
};

export const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLER_INPUT:
            return {
                ...state,
                searchTest: action.text,
            };
        default:
            return state;
    }
};
