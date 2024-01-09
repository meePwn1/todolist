import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'
import styles from './AddItemForm.module.scss'

interface AddItemFormProps {
	todoID?: string
	addItem: (title: string) => void

}

export const AddItemForm: FC<AddItemFormProps> = ({ addItem }) => {
	const [error, setError] = useState('')
	const [title, setTitle] = useState('')


	const addItemHandler = () => {
		if (!title || title.length > 15) {
			setError('Please enter a title')
		} else {
			addItem(title)
			setTitle('')
			setError('')
		}
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value
		if (!title && inputValue === ' ') {
			setError('Please enter a title')
		} else if (inputValue.length > 15) {
			setError('Title is longer than 15')
		} else {
			setTitle(inputValue.trimStart())
			setError('')
		}
	}

	const keydownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			addItemHandler()
		}
	}

	return (
		<div className={styles.root}>
			<div className={styles.actions}>
				<Input
					value={title}
					onChange={changeHandler}
					onKeyDown={keydownHandler}
					placeholder='New task'
					error={!!error}
				/>
				<Button onClick={addItemHandler}>
					Add New
				</Button>
			</div>
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}
