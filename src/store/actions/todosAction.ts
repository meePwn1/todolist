import { AddTaskType, ChangeTaskStatusType, ChangeTaskTitleType, RemoveTaskType } from 'types/ITask'
import {
	AddTodoType,
	ChangeTodoFilterValueType,
	ChangeTodoTitleType,
	FilterValueType,
	RemoveTodoType,
	TodosActionTypes,
} from 'types/ITodo'

export const addTodoAction = (todoTitle: string): AddTodoType => {
	return {
		type: TodosActionTypes.ADD_TODO,
		payload: todoTitle,
	}
}

export const removeTodoAction = (todoID: string): RemoveTodoType => {
	return {
		type: TodosActionTypes.REMOVE_TODO,
		payload: todoID,
	}
}

export const changeTodoTitleAction = (todoID: string, todoTitle: string): ChangeTodoTitleType => {
	return {
		type: TodosActionTypes.CHANGE_TODO_TITLE,
		payload: {
			todoID,
			todoTitle,
		},
	}
}

export const changeFilterValueAction = (todoID: string, fiterValue: FilterValueType): ChangeTodoFilterValueType => {
	return {
		type: TodosActionTypes.CHANGE_FILTER_VALUE,
		payload: {
			todoID,
			fiterValue,
		},
	}
}

export const addTaskAction = (todoID: string, taskTitle: string): AddTaskType => {
	return {
		type: TodosActionTypes.ADD_TASK,
		payload: {
			todoID,
			taskTitle,
		},
	}
}

export const removeTaskAction = (todoID: string, taskID: string): RemoveTaskType => {
	return {
		type: TodosActionTypes.REMOVE_TASK,
		payload: {
			todoID,
			taskID,
		},
	}
}

export const changeTaskTitleAction = (todoID: string, taskID: string, newTitle: string): ChangeTaskTitleType => {
	return {
		type: TodosActionTypes.CHANGE_TASK_TITLE,
		payload: {
			todoID,
			taskID,
			newTitle,
		},
	}
}

export const changeTaskStatusAction = (todoID: string, taskID: string, isDone: boolean): ChangeTaskStatusType => {
	return {
		type: TodosActionTypes.CHANGE_TASK_STATUS,
		payload: {
			todoID,
			taskID,
			isDone,
		},
	}
}
