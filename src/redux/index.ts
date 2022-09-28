import reducer from './reducers';
export * as actionCreators from './actions';
// import {generateRandomSortingArray} from './actions';
// const actionCreators = {
//   generateRandomSortingArray,
// };
// export {actionCreators};
export type AppState = ReturnType<typeof reducer>;
export * from './store';
