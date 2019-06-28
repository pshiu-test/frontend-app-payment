import { all, call, put, takeEvery } from 'redux-saga/effects';

// Actions
import {
  FETCH_BASKET,
  SDN_CHECK,
  fetchBasketBegin,
  fetchBasketSuccess,
  fetchBasketFailure,
} from './actions';

// Services
import * as PaymentApiService from './service';

import { saga as couponSaga, addCouponSuccess, addCouponBegin } from '../coupon';
import { handleErrors } from '../../feedback';
import { configuration } from '../../environment';

export function* handleFetchBasket() {
  yield put(fetchBasketBegin());
  yield put(addCouponBegin());
  try {
    const result = yield call(PaymentApiService.getBasket);
    yield put(fetchBasketSuccess(result));
    if (result.voucher === undefined) {
      yield put(addCouponSuccess(null, null, null));
    } else {
      yield put(addCouponSuccess(result.voucher.id, result.voucher.code, result.voucher.benefit));
    }
  } catch (e) {
    yield put(fetchBasketFailure());
    yield call(handleErrors, e);
  }
}

export function* handleSdnCheck(action) {
  try {
    const result = yield call(
      PaymentApiService.sdnCheck,
      ...action.payload,
    );

    if (result.hits > 0) {
      window.location.href = `${configuration.ECOMMERCE_BASE_URL}/payment/sdn/failure/`;
    }
  } catch (e) {
    yield call(handleErrors, e);
  }
}

export default function* saga() {
  yield takeEvery(FETCH_BASKET.BASE, handleFetchBasket);
  yield takeEvery(SDN_CHECK.BASE, handleSdnCheck);
  yield all([
    couponSaga(),
  ]);
}