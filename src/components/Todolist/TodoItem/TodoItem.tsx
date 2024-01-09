import EditableSpan from '@/components/EditableSpan/EditableSpan'
import Button from '@/components/UI/button/Button'
import Input from '@/components/UI/input/Input'
import { ITask } from '@/types/ITask'
import { ChangeEvent, FC, memo } from 'react'

interface TodoItemType {
	taskData: ITask
	removeTask: (taskID: string) => void
	changeTitle: (title: string) => void
	changeStatus: (isDone: boolean) => void
}

const TodoItem: FC<TodoItemType> = memo(({ taskData, removeTask, changeTitle, changeStatus }) => {
	const { id, isDone, title } = taskData

	const removeTaskHandler = () => {
		removeTask(id)
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeStatus(e.target.checked)
	}

	return (
		<li>
			<label >
				<Input type='checkbox' checked={isDone} onChange={changeHandler} />
				<EditableSpan title={title} changeTitle={changeTitle} />
			</label>
			<Button onClick={removeTaskHandler}>✖️</Button>
		</li>
	)
})

export default TodoItem
