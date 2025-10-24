import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todolist'
import { saveToLocalStorage } from './helpers/storage'

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
//   preloadedState: loadFromLocalStorage
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch