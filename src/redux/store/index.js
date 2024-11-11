// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
// import adviceDataSlice from '../adviceDataSlice';
// import storage from 'redux-persist/lib/storage';
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
// } from 'redux-persist';


// const persistConfig = {
// 	key: 'root',
// 	storage,
// };

// const rootReducer = combineReducers({
// 	adviceData: adviceDataSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export default () => {
// 	let store = configureStore({
// 		reducer: persistedReducer,
// 		middleware: getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// 	});

// 	let persistor = persistStore(store);
// 	return { store, persistor };
// };
