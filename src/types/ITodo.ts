import {
	AddTaskType,
	ChangeTaskStatusType,
	ChangeTaskTitleType,
	ITask,
	RemoveTaskType,
} from './ITask'

export enum TodosActionTypes {
	ADD_TODO = 'ADD_TODO',
	REMOVE_TODO = 'REMOVE_TODO',
	CHANGE_TODO_TITLE = 'CHANGE_TODO_TITLE',
	CHANGE_FILTER_VALUE = 'CHANGE_FILTER_VALUE',
	ADD_TASK = 'ADD_TASK',
	REMOVE_TASK = 'REMOVE_TASK',
	CHANGE_TASK_TITLE = 'CHANGE_TASK_TITLE',
	CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS',
}

export interface AddTodoType {
	type: TodosActionTypes.ADD_TODO
	payload: string
}

export interface RemoveTodoType {
	type: TodosActionTypes.REMOVE_TODO
	payload: string
}

export interface ChangeTodoTitleType {
	type: TodosActionTypes.CHANGE_TODO_TITLE
	payload: {
		todoID: string
		todoTitle: string
	}
}

export interface ChangeTodoFilterValueType {
	type: TodosActionTypes.CHANGE_FILTER_VALUE
	payload: {
		todoID: string
		fiterValue: FilterValueType
	}
}

export type FilterValueType = 'All' | 'Completed' | 'Active'

export interface ITodo {
	id: string
	title: string
	tasks: ITask[]
	filter: FilterValueType
}

export type TodosAction =
	| AddTodoType
	| RemoveTodoType
	| ChangeTodoTitleType
	| ChangeTodoFilterValueType
	| AddTaskType
	| RemoveTaskType
	| ChangeTaskTitleType
	| ChangeTaskStatusType
