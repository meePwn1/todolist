import EditableSpan from 'components/EditableSpan/EditableSpan'
import Button from 'components/UI/button/Button'
import Input from 'components/UI/input/Input'
import { ChangeEvent, FC, memo } from 'react'
import { ITask } from 'types/ITask'

interface TodoItemType {
	taskData: ITask
	removeTask: (taskID: string) => void
	changeTitle: (taskID: string, title: string) => void
	changeStatus: (taskID: string, isDone: boolean) => void
}

const TodoItem: FC<TodoItemType> = memo(({ taskData, removeTask, changeTitle, changeStatus }) => {
	const { id, isDone, title } = taskData

	const removeTaskHandler = () => {
		removeTask(id)
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeStatus(id, e.target.checked)
	}
	const changeTaskTitle = (title: string) => {
		changeTitle(id, title)
	}

	return (
		<li>
			<label>
				<Input type='checkbox' checked={isDone} onChange={changeHandler} />
				<EditableSpan title={title} changeTitle={changeTaskTitle} />
			</label>
			<Button onClick={removeTaskHandler}>✖️</Button>
		</li>
	)
})

export default TodoItem
