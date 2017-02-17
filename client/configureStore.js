import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import remoteActionMiddleware from './remote_action_middleware';

export default function configureStore(socket) {
	const createStoreWithMiddleware = applyMiddleware(
	  remoteActionMiddleware(socket)
	)(createStore);

	return createStoreWithMiddleware(reducer);
}