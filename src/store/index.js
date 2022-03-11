import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { 
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    auth: authReducer
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
export default store;