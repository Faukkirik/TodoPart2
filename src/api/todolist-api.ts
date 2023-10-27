import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a22037d2-5c98-4d70-ad45-1b7b1066eaea'
    }
})

export const todolistAPI = {
    getTodolist() {
        return instance.get<TodolistType[]>(`todo-lists`)
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{item: TodolistType}>>(`todo-lists`, {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, newTitle: string) {
        return instance.put<ResponseType>(`todo-lists/${todolistId}`, {title: newTitle})
    }
}
type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type ResponseType<T = {}> = {
    resultCode: number
    messages: string[]
    fieldsErrors: string[]
    data: T
}
