import { combineReducers } from "redux";
import Group from './groupreducer';
import Video from './videoreducer';
import SignUp from './signupreducer'

const allReducers = combineReducers({
    Group : Group,
    Video : Video,
    SignUp: SignUp
});

export default allReducers;
