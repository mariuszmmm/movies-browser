import { call, delay, put, select } from "redux-saga/effects";
import { getGenres, getPopularMovies, getPopularPeople } from "../../api/fetchApi";
import { setGenres, setPopularMovies } from "./moviesSlice";
import { setPopularPeople } from "../people/peopleSlice";
import { fetchApi, fetchError, resetFetchStatus, selectFirstMoviePage, selectFirstPeoplePage, setImagesToLoad } from "../pageState/pageStateSlice";

export function* initializeSagaHandler() {
  try {
    yield put(fetchApi());
    const firstMoviePage = yield select(selectFirstMoviePage);
    const firstPeoplePage = yield select(selectFirstPeoplePage);
    const movies = yield call(() => getPopularMovies(firstMoviePage));
    const genres = yield call(() => getGenres());
    const people = yield call(() => getPopularPeople(firstPeoplePage));
    yield delay(1000);
    yield put(setPopularMovies(movies.results));
    yield put(setGenres(genres.genres));
    yield put(setPopularPeople(people.results));
    yield put(setImagesToLoad());
    yield put(resetFetchStatus());
  } catch (error) {
    yield put(fetchError());
  }
};

export function* initializeSaga() {
  yield call(initializeSagaHandler);
};