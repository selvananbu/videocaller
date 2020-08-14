import { combineReducers } from "redux";
import Group from './groupreducer';
import Video from './videoreducer';

const allReducers = combineReducers({
    Group : Group,
    Video : Video
});

export default allReducers;
