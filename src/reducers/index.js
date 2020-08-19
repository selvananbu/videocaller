import { combineReducers } from "redux";
import Group from './groupreducer';
import Video from './videoreducer';
import Util from './utilreducer';

const allReducers = combineReducers({
    Group : Group,
    Video : Video,
    Util:Util
});

export default allReducers;
