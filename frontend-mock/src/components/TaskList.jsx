import { cn } from '../lib/utils'

const statusStyles = {
    TODO: 'bg-gray-50 text-gray-600 ring-gray-500/10',
    IN_PROGRESS: 'bg-blue-50 text-blue-700 ring-blue-700/10',
    DONE: 'bg-green-50 text-green-700 ring-green-600/20',
}

const statusLabels = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done',
}

export default function TaskList({ tasks, onEdit, onDelete }) {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Assignee</th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Due Date</th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {tasks.map((task) => (
                                    <tr key={task.id} className="hover:bg-gray-50 transition-colors duration-150">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                            {task.title}
                                            <div className="text-gray-500 font-normal text-xs mt-0.5 truncate max-w-xs">{task.description}</div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <span className={cn(statusStyles[task.status], "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset")}>
                                                {statusLabels[task.status]}
                                            </span>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <div className="h-6 w-6 flex-shrink-0">
                                                    <img className="h-6 w-6 rounded-full" src={task.assignee?.avatar} alt="" />
                                                </div>
                                                <div className="ml-2 font-medium text-gray-900">{task.assignee?.name}</div>
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{task.due_date}</td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <button onClick={() => onEdit(task)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                                            <button onClick={() => onDelete(task.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
