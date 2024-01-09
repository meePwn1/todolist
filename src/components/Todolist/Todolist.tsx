import { useActions } from '@/hooks/useActions'
import { useTasks } from '@/hooks/useTasks'
import { ITodo } from '@/types/ITodo'
import { FC, memo, useCallback } from 'react'
import { AddItemForm } from '../AddItemForm/AddItemForm'
import EditableSpan from '../EditableSpan/EditableSpan'
import Button from '../UI/button/Button'
import TodoItem from './TodoItem/TodoItem'
import styles from './Todolist.module.scss'

interface TodolistPropsType {
	todo: ITodo
}

const Todolist: FC<TodolistPropsType> = memo(({ todo }) => {
	const { addTaskAction, removeTodoAction, removeTaskAction, changeTodoTitleAction, changeTaskTitleAction, changeFilterValueAction, changeTaskStatusAction } = useActions()

	const { filter, id: todoID, tasks, title } = todo

	const filteredTasks = useTasks(tasks, filter)

	const addTask = (title: string) => {
		addTaskAction(todoID, title)
	}
	const changeTodoTitle = (title: string) => {
		changeTodoTitleAction(todoID, title)
	}

	const removeTask = useCallback((taskID: string) => {
		removeTaskAction(todoID, taskID)
	}, [])

	const changeTaskTitle = useCallback((taskID: string, title: string) => {
		changeTaskTitleAction(todoID, taskID, title)
	}, [])

	const changeTaskStatus = useCallback((taskID: string, isDone: boolean) => {
		changeTaskStatusAction(todoID, taskID, isDone)
	}, [])

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
