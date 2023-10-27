import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolist()
            .then((res)=>{
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "hello"
        todolistAPI.createTodolist(title)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'a277577f-6045-4f2c-be77-6437d7824bde'
        todolistAPI.deleteTodolist(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '97cc84e2-56ac-44d0-9efe-a93990fca6d2'
        const newTitle = 'NEW'
        todolistAPI.updateTodolist(todolistId, newTitle)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "bb51611e-12f5-447a-9077-250359f7ee29"
        todolistAPI.getTasks(todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "hello"
        const todolistId = "bb51611e-12f5-447a-9077-250359f7ee29"
        todolistAPI.createTasks(title, todolistId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "bb51611e-12f5-447a-9077-250359f7ee29"
        const taskId = "f23aa522-9695-4f3c-a76d-d098e2d91ad4"
        todolistAPI.deleteTasks(todolistId, taskId)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "bb51611e-12f5-447a-9077-250359f7ee29"
        const taskId = "b63d5b06-e5a8-44da-b937-861a57c6e1c9"
        const newTitle = 'NEW'
        todolistAPI.updateTasks(todolistId, taskId, newTitle)
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
