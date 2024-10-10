import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productsSaga from '../sagas/productsSaga';
import productsReduser from './productsReducer';
import basketReducer from './basketReducer';

const sagaMiddleware = createSagaMiddleware()


const store = configureStore({
    reducer: {
        products: productsReduser,
        basketItems: basketReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})


sagaMiddleware.run(productsSaga)


export default store;