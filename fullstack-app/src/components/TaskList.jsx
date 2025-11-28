import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../lib/utils'

const statuses = {
    TODO: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    IN_PROGRESS: 'text-yellow-600 bg-yellow-50 ring-yellow-500/10',
    DONE: 'text-green-700 bg-green-50 ring-green-600/20',
}

export default function TaskList({ tasks, onEdit, onDelete }) {
    return (
        <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg bg-white">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Status
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Assignee
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                <AnimatePresence>
                                    {tasks.map((task) => (
                                        <motion.tr
                                            key={task.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.8)" }}
                                            className="transition-colors"
                                        >
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                {task.title}
                                                <div className="text-gray-500 font-normal text-xs mt-1">{task.description}</div>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <span
                                                    className={cn(
                                                        statuses[task.status],
                                                        'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset transition-all duration-300 hover:scale-105'
                                                    )}
                                                >
                                                    {task.status.replace('_', ' ')}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                <div className="flex items-center">
                                                    <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold mr-2 ring-2 ring-white shadow-sm">
                                                        {task.assignee_name ? task.assignee_name[0] : '?'}
                                                    </div>
                                                    <div className="font-medium text-gray-900">{task.assignee_name || 'Unassigned'}</div>
                                                </div>
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <button
                                                    onClick={() => onEdit(task)}
                                                    className="text-indigo-600 hover:text-indigo-900 mr-4 transition-colors"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => onDelete(task.id)}
                                                    className="text-red-600 hover:text-red-900 transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
