import { ChangeEvent, FC, useState } from 'react'
import Input from '../UI/input/Input'
import styles from './EditableSpan.module.scss'

interface EditableSpan {
	title: string
	changeTitle: (title: string) => void
	titleMode?: boolean
}

const EditableSpan: FC<EditableSpan> = ({ title, changeTitle, titleMode = false }) => {
	const [editMode, setEditMode] = useState(false)
	const [inputValue, setInputValue] = useState(title)
	const [error, setError] = useState('')

	const doubleClickHandler = () => {
		setEditMode(true)
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value.trimStart())

		if (!inputValue && e.target.value.trimStart().length > 0) {
			setError('')
		}
	}

	const blurHandler = () => {
		if (inputValue.length) {
			setEditMode(false)
			changeTitle(inputValue)
			setError('')
		} else {
			setError('Title must not be empty')
		}
	}

	return (
		<div className={styles.root}>
			{editMode ? (
				<Input
					value={inputValue}
					onChange={changeHandler}
					onBlur={blurHandler}
					error={!!error}
					autoFocus
				/>
			) : titleMode ? (
				<h3 onDoubleClick={doubleClickHandler}>{title}</h3>
			) : (
				<span onDoubleClick={doubleClickHandler}>{title}</span>
			)}
			{error && <div className={styles.error}>{error}</div>}
		</div>
	)
}

export default EditableSpan