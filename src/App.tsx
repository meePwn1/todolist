import { useMemo } from 'react'
import './App.scss'
import { AddItemForm } from './components/AddItemForm/AddItemForm'
import Todolist from './components/Todolist/Todolist'
import { useActions } from './hooks/useActions'
import { useTypedSelector } from './hooks/useTypedSelector'

const App = () => {
	const todos = useTypedSelector(state => state.todos)
	const { addTodoAction } = useActions()

	const memoizedTodos = useMemo(() => todos, [todos])

	return (
		<div className='App'>
			<div className="header">
				<AddItemForm addItem={addTodoAction} />
			</div>
			<div className="wrapper">
				{memoizedTodos.map(tl => {
					return (
						<Todolist
							key={tl.id}
							todoID={tl.id}
							title={tl.title}
							tasks={tl.tasks}
							filter={tl.filter}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default App
