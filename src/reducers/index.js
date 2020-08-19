import { combineReducers } from "redux";
import Group from './groupreducer';
import Video from './videoreducer';
import Util from './utilreducer';
import SignUp from './signupreducer'

const allReducers = combineReducers({
    Group : Group,
    Video : Video,
    Util:Util,
    SignUp: SignUp
});

export default allReducers;
