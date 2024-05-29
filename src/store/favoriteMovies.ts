import {type AtomEffect, atom} from 'recoil'

import type {Movie} from '@interfaces/movie'

const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue))
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue))
    })
  }

export const favoriteMoviesState = atom<Movie[]>({
  key: 'favoriteMovies',
  default: [],
  effects: [localStorageEffect<Movie[]>('favoriteMovies')],
})
