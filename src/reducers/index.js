import { combineReducers } from "redux";
import Group from './groupreducer';

const allReducers = combineReducers({
    Group : Group,
});

export default allReducers;
