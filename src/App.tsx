import { useState } from 'react'
import { v1 } from 'uuid'
import './App.scss'
import Todolist, { TaskType } from './components/Todolist/Todolist'

export type FilterValueType = 'All' | 'Completed' | 'Active'

interface ITodolist {
	id: string
	title: string
	tasks: TaskType[]
	filter: FilterValueType
}

function App(): JSX.Element {
	const [todolists, setTodolists] = useState<ITodolist[]>([
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
	])

	const createTask = (todoId: string, task: string) => {
		const newTask: TaskType = { id: v1(), title: task, isDone: false }
		setTodolists(
			todolists.map(
				(tl): ITodolist =>
					tl.id === todoId ? { ...tl, tasks: [...tl.tasks, newTask] } : tl
			)
		)

		// todolists.find(tl => tl.id === todoId)?.tasks.push(newTask)
		// setTodolists([...todolists])
	}

	const removeTask = (todoId: string, taskId: string) => {
		setTodolists(
			todolists.map(
				(tl): ITodolist =>
					tl.id === todoId
						? { ...tl, tasks: tl.tasks.filter(task => task.id !== taskId) }
						: tl
			)
		)
	}

	const changeTaskStatus = (
		todoId: string,
		taskId: string,
		isDone: boolean
	) => {
		setTodolists(
			todolists.map(
				(tl): ITodolist =>
					tl.id === todoId
						? {
							...tl,
							tasks: tl.tasks.map(task =>
								task.id === taskId ? { ...task, isDone } : task
							),
						}
						: tl
			)
		)
	}

	const changeFilter = (todoId: string, filterValue: FilterValueType) => {
		setTodolists(
			todolists.map(
				(tl): ITodolist =>
					tl.id === todoId ? { ...tl, filter: filterValue } : tl
			)
		)
	}

	return (
		<div className='App'>
			{todolists.map(tl => {
				return (
					<Todolist
						key={tl.id}
						id={tl.id}
						title={tl.title}
						tasks={tl.tasks}
						filter={tl.filter}
						createTask={createTask}
						removeTask={removeTask}
						changeTaskStatus={changeTaskStatus}
						changeFilter={changeFilter}
					/>
				)
			})}
		</div>
	)
}

export default App
