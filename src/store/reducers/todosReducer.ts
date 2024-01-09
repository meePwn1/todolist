import { ITodo, TodosAction, TodosActionTypes } from '@/types/ITodo'
import { v1 } from 'uuid'

const initialState: ITodo[] = [
	{
		id: v1(),
		title: 'What to Learn',
		tasks: [
			{ id: v1(), title: 'HTML&CSS', isDone: true },
			{ id: v1(), title: 'JS', isDone: true },
			{ id: v1(), title: 'ReactJS', isDone: false },
			{ id: v1(), title: 'GraphQl', isDone: false },
			{ id: v1(), title: 'Rest API', isDone: false },
		],
		filter: 'All',
	},
	{
		id: v1(),
		title: 'What to buy',
		tasks: [
			{ id: v1(), title: 'book', isDone: false },
			{ id: v1(), title: 'milk', isDone: true },
		],
		filter: 'Active',
	},
]

export const todosReducer = (
	state = initialState,
	{ type, payload }: TodosAction
): ITodo[] => {
	switch (type) {
		case TodosActionTypes.ADD_TODO:
			return [{ id: v1(), title: payload, tasks: [], filter: 'All' }, ...state]
		case TodosActionTypes.REMOVE_TODO:
			return state.filter(el => el.id !== payload)
		case TodosActionTypes.CHANGE_TODO_TITLE:
			return state.map(el =>
				el.id === payload.todoID ? { ...el, title: payload.todoTitle } : el
			)
		case TodosActionTypes.CHANGE_FILTER_VALUE:
			return state.map(el =>
				el.id === payload.todoID ? { ...el, filter: payload.fiterValue } : el
			)
		case TodosActionTypes.ADD_TASK:
			return state.map(el =>
				el.id === payload.todoID ?
					{
						...el,
						tasks: [
							{ id: v1(), title: payload.taskTitle, isDone: false },
							...el.tasks,
						],
					} : el)
		case TodosActionTypes.REMOVE_TASK:
			return state.map(el => el.id === payload.todoID ?
				{
					...el,
					tasks: el.tasks.filter(el => el.id !== payload.taskID)
				} : el)
		case TodosActionTypes.CHANGE_TASK_TITLE:
			return state.map(todo => todo.id === payload.todoID ?
				{
					...todo,
					tasks: todo.tasks.map(task => task.id === payload.taskID ?
						{
							...task,
							title: payload.newTitle
						} : task)
				} : todo)
		case TodosActionTypes.CHANGE_TASK_STATUS:
			return state.map(todo => todo.id === payload.todoID ?
				{
					...todo,
					tasks: todo.tasks.map(task => task.id === payload.taskID ?
						{
							...task, isDone: payload.isDone
						}
						: task)
				} : todo)
		default:
			return state
	}
}
