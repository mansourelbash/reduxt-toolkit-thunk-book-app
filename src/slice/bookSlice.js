import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk("book/getBooks", async(_, thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
    const res = await fetch('http://localhost:9000/books')
    const data = await res.json();
    return data;
  }catch(err){
    rejectWithValue(err)
  }
})

export const insertBooks = createAsyncThunk("book/insertBooks", async (bookData, thunkAPI)=>{
  const {rejectWithValue} = thunkAPI
  try{
    const res = await fetch('http://localhost:9000/books',{
      method: 'POST',
      body: JSON.stringify(bookData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json();
    return data;
  }catch(err){
    rejectWithValue(err.message)
  }
})


export const deleteBooks = createAsyncThunk("book/deleteBooks", async(bookData, thunkAPI)=>{

  const {rejectWithValue} = thunkAPI
  try{
    await fetch(`http://localhost:9000/books/${bookData.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return bookData;
  }catch(err){
    rejectWithValue(err.message)
  }
})

export const selectedBook = createAsyncThunk("book/selectedBook", async(bookData, thunkAPI)=>{

  const {rejectWithValue} = thunkAPI
  try{
    const res = await fetch(`http://localhost:9000/books/${bookData.id}`)
    const data = await res.json();
    return data;
  }catch(err){
    rejectWithValue(err.message)
  }
})

const initialState = {
  books: [],
  loading: false,
  error: null,
  selectedBooks: {}
}
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers:{},
  extraReducers:{
    [getBooks.pending]: (state) =>{
      state.loading = true;
      state.error = null
    },
    [getBooks.fulfilled]: (state, action) =>{
      state.loading = false;
      state.books = action.payload
    },
    [getBooks.rejected]: (state, action) =>{
      state.loading = false;
      state.error = action.payload
    },
    //insert posts
    [insertBooks.pending]: (state) =>{
      state.loading = true;
      state.error = null
    },
    [insertBooks.fulfilled]: (state, action) =>{
      state.loading = false;
      state.books.push(action.payload)
    },
    [insertBooks.rejected]: (state, action) =>{
      state.loading = false;
      state.error = action.payload
    },


    [deleteBooks.pending]: (state) =>{
      state.loading = true;
      state.error = null
    },
    [deleteBooks.fulfilled]: (state, action) =>{
      state.loading = false;
      state.books = state.books.filter((item)=> item.id !== action.payload.id)
    },
    [deleteBooks.rejected]: (state, action) =>{
      state.loading = false;
      state.error = action.payload
    },

    [selectedBook.fulfilled]: (state, action) =>{
      state.loading = false;
      state.selectedBooks = state.books.filter((item)=> item.id === action.payload.id)
    }


    
  }
})

export default bookSlice.reducer;