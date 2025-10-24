import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todolist'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

const preloadedState = loadFromLocalStorage()

export const store = configureStore({
  reducer: {
    todoList: todoReducer
  },
    preloadedState: preloadedState ? { todoList: preloadedState.todoList } : undefined
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch