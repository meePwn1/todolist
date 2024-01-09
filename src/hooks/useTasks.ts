import { ITask } from '@/types/ITask'
import { FilterValueType } from '@/types/ITodo'
import { useMemo } from 'react'

export const useTasks = (tasks: ITask[], filter: FilterValueType): ITask[] => {
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

	return filteredTasks
}