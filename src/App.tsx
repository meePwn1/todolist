import './App.scss'
import { AddItemForm } from './components/AddItemForm/AddItemForm'
import Todolist from './components/Todolist/Todolist'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

const App = () => {
	const todos = useTypedSelector(state => state.todos)
	const { addTodoAction } = useActions()

	return (
		<div className='App'>
			<div className="header">
				<AddItemForm addItem={addTodoAction} />
			</div>
			<div className="wrapper">
				{todos.map(tl => {
					return (
						<Todolist
							key={tl.id}
							todo={tl}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default App
