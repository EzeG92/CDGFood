import { Hamb } from '../../data/hamb'
import { Selected_Hamb, Filtered_Hamb } from '../actions/hamb.action';


const initialState = {
    hamb: Hamb,
    filteredHamb: [],
    selected: null,
};

const HambReducer = (state = initialState, action) => {
    switch (action.type) {
        case Selected_Hamb:
            return {
                ...state,
                selected: state.hamb.find((hamb) => hamb.id === action.hambID)
            }
        case Filtered_Hamb:
            return {
                ...state,
                filteredHamb: state.hamb.filter((hamb) => hamb.category === action.categoryID)
            }
        default:
            return state;
    };
}

export default HambReducer