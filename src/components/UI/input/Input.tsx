import { FC, InputHTMLAttributes } from 'react'
import style from './Input.module.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
	error?: boolean
}

const Input: FC<IInput> = ({ error, ...props }) => {
	const inputClasses = [style.input]
	if (error) {
		inputClasses.push(style.input__error)
	}
	return <input {...props} className={inputClasses.join(' ')} />
}

export default Input
