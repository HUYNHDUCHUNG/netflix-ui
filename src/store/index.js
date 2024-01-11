import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { TMBD_BASE_URL, API_KEY } from '../utils/constants'

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: []
}

export const fetchGenres = createAsyncThunk('netflix/genres', async () => {
  const { data } = await axios.get(`${TMBD_BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
  console.log(data)
  return data.genres
  // return data
})

// const getRawData = async (api,genres,paging) =>{
//   const moviesArray = []
//   for(let i = 1; i < moviesArray.length < 60 && i < 10 ; i++){
//     const {data : result} = await axios.get(`${api}${paging ? `&page=${i}` : ''}`
//     createArrayFromRawData(result,moviesArray,genres)
//     )
//   }
// }

export const fetchMovies = createAsyncThunk('netflix')

const netflixSlice = createSlice({
  name: 'Netflix',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload
      state.genresLoaded = true
    })
  }
})

export const store = configureStore({
  reducer: {
    netflix: netflixSlice.reducer
  }
})
