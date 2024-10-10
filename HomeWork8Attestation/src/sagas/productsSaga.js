import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchProductsFailure, fetchProductsSuccess, fetchProductsRequest } from '../store/productsReducer';
// import products from '../Data/data.json'

async function fetchProductsApi() {
    const response = await fetch("Data/data.json");
    if (!response.ok) {
        throw new Error('Something go wrong')
    }
    return await response.json();
}

function* fetchProducts() {
    try {
        const data = yield call(fetchProductsApi)
        yield put(fetchProductsSuccess(data))
    } catch (error) {
        yield put(fetchProductsFailure(error.message))
    }
}

function* productsSaga() {
    yield takeEvery(fetchProductsRequest.type, fetchProducts);
}

export default productsSaga;