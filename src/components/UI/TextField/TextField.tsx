import { FC, InputHTMLAttributes } from 'react'
import Input from '../input/Input'
import styles from './TextField.module.scss'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {

}
const TextField: FC<TextFieldProps> = ({ ...rest }) => {
	return (
		<div className={styles.root}>
			<Input {...rest} />
			<div className={styles.label}>label</div>

		</div>
	)
}

export default TextField