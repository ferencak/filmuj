import {atom} from 'recoil'

import type {Movie} from '@interfaces/movie'

export const moviesState = atom({
  key: 'movies',
  default: [] as Movie[],
})
