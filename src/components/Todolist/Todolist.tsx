import { useActions } from '@/hooks/useActions'
import { ITask } from '@/types/ITask'
import { FilterValueType } from '@/types/ITodo'
import { FC, memo, useMemo } from 'react'
import { AddItemForm } from '../AddItemForm/AddItemForm'
import EditableSpan from '../EditableSpan/EditableSpan'
import Button from '../UI/button/Button'
import TodoItem from './TodoItem/TodoItem'
import styles from './Todolist.module.scss'



interface TodolistPropsType {
	todoID: string,
	title: string
	tasks: ITask[]
	filter: FilterValueType
}

const Todolist: FC<TodolistPropsType> = memo(({ todoID, title, tasks, filter }) => {
	const { addTaskAction, removeTodoAction, removeTaskAction, changeTodoTitleAction, changeTaskTitleAction, changeFilterValueAction, changeTaskStatusAction } = useActions()

	const filteredTasks = useMemo(() => {
		switch (filter) {
			case 'Active':
				return tasks.filter(el => !el.isDone)
			case 'Completed':
				return tasks.filter(el => el.isDone)
			default:
				return tasks
		}
	}, [tasks, filter])

	const addTask = (title: string) => {
		addTaskAction(todoID, title)
	}
	const changeTodoTitle = (title: string) => {
		changeTodoTitleAction(todoID, title)
	}

	return (
		<div className={styles.todolist}>
			<div className={styles.header}>
				<div className={styles.title}>
					<EditableSpan title={title} changeTitle={changeTodoTitle} titleMode={true} />
					<Button onClick={() => { removeTodoAction(todoID) }}>✖️</Button>
				</div>
				<AddItemForm addItem={addTask} />
			</div>
			<div className={styles.body}>
				<ul className={styles.list}>
					{filteredTasks.map(task => {
						const removeTask = (taskID: string) => {
							removeTaskAction(todoID, taskID)
						}
						const changeTaskTitle = (title: string) => {
							changeTaskTitleAction(todoID, task.id, title)
						}
						const changeTaskStatus = (isDone: boolean) => {
							changeTaskStatusAction(todoID, task.id, isDone)
						}
						return (
							< TodoItem
								key={task.id}
								taskData={task}
								removeTask={removeTask}
								changeTitle={changeTaskTitle}
								changeStatus={changeTaskStatus}
							/>
						)
					})}
				</ul>
				<div className={styles.btns}>
					<Button
						active={filter === 'All'}
						onClick={() => changeFilterValueAction(todoID, 'All')}
					>
						All
					</Button>
					<Button
						active={filter === 'Active'}
						onClick={() => changeFilterValueAction(todoID, 'Active')}
					>
						Active
					</Button>
					<Button
						active={filter === 'Completed'}
						onClick={() => changeFilterValueAction(todoID, 'Completed')}
					>
						Completed
					</Button>
				</div>
			</div>
		</div>
	)
})

export default Todolist
