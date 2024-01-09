import { TodosActionTypes } from './ITodo'

export interface AddTaskType {
	type: TodosActionTypes.ADD_TASK
	payload: {
		todoID: string
		taskTitle: string
	}
}

export interface RemoveTaskType {
	type: TodosActionTypes.REMOVE_TASK
	payload: {
		todoID: string
		taskID: string
	}
}

export interface ChangeTaskTitleType {
	type: TodosActionTypes.CHANGE_TASK_TITLE
	payload: {
		todoID: string
		taskID: string
		newTitle: string
	}
}

export interface ChangeTaskStatusType {
	type: TodosActionTypes.CHANGE_TASK_STATUS
	payload: {
		todoID: string
		taskID: string
		isDone: boolean
	}
}

export interface ITask {
	id: string
	title: string
	isDone: boolean
}
