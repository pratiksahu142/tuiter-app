import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import {Provider} from "react-redux";
import {configureStore} from '@reduxjs/toolkit';
import Todos from "./todos-component";

const store = configureStore({reducer: {hello, todos}});

// instead of createStore,
// import the configureStore function // import new component to render todos
// combine all reducers into a single store // each available through these namespaces
// render todos component (see below)

const ReduxExamples = () => {
  return (
      <Provider store={store}>
        <div>
          <h2>Redux Examples</h2>
          <Todos/>
          <HelloReduxExampleComponent/>
        </div>
      </Provider>
  );
};
export default ReduxExamples;