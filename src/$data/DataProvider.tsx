import { Provider } from 'react-redux';
import { createStore } from 'redux';
import requests from './requests';
import Fleo from "redux-fleo"


/**
 * This file only contains setup for the framework, it will never be modified
 */
const store = createStore(
    Fleo.createReducer(requests),
    undefined,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

interface Props {
    children: React.ReactNode
}

const DataProvider = (props: Props) => {
    return <Provider store={store}>{props.children}</Provider>;
};

export default DataProvider;
