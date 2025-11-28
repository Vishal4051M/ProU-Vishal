import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import TaskList from './components/TaskList'
import TaskModal from './components/TaskModal'
import { fetchTasks, fetchEmployees, createTask, updateTask, deleteTask } from './lib/api'
import { PlusIcon } from '@heroicons/react/20/solid'

function App() {
    const [tasks, setTasks] = useState([])
    const [employees, setEmployees] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentTask, setCurrentTask] = useState(null)
    const [filterStatus, setFilterStatus] = useState('ALL')
    const [loading, setLoading] = useState(true)
    const [currentView, setCurrentView] = useState('DASHBOARD')

    const [error, setError] = useState(null)

    const loadData = async () => {
        try {
            setLoading(true)
            const [tasksData, employeesData] = await Promise.all([
                fetchTasks(filterStatus),
                fetchEmployees()
            ])
            setTasks(tasksData)
            setEmployees(employeesData)
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadData()
    }, [filterStatus])

    const handleSave = async (taskData) => {
        try {
            if (currentTask) {
                await updateTask(currentTask.id, taskData)
            } else {
                await createTask(taskData)
            }
            await loadData() // Refresh list
        } catch (err) {
            alert('Failed to save task: ' + err.message)
        }
    }

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this task?')) {
            try {
                await deleteTask(id)
                setTasks(tasks.filter(t => t.id !== id))
            } catch (err) {
                alert('Failed to delete task: ' + err.message)
            }
        }
    }

    const openCreateModal = () => {
        setCurrentTask(null)
        setIsModalOpen(true)
    }

    const openEditModal = (task) => {
        setCurrentTask(task)
        setIsModalOpen(true)
    }

    if (loading && tasks.length === 0) {
        return <div className="flex items-center justify-center h-screen text-gray-500">Loading...</div>
    }

    if (error) {
        return <div className="flex items-center justify-center h-screen text-red-500">Error: {error}</div>
    }

    return (
        <Layout currentView={currentView} onNavigate={setCurrentView}>
            <div className="space-y-8">
                {currentView === 'DASHBOARD' && (
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Dashboard</h2>
                        <div className="mt-6">
                            <Dashboard tasks={tasks} />
                        </div>
                    </div>
                )}

                {currentView === 'TASKS' && (
                    <div className="border-t border-gray-200 pt-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h2 className="text-xl font-semibold leading-6 text-gray-900">Tasks</h2>
                                <p className="mt-2 text-sm text-gray-700">A list of all tasks including their title, status, and assignee.</p>
                            </div>
                            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none flex gap-4">
                                <select
                                    className="block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    value={filterStatus}
                                    onChange={(e) => setFilterStatus(e.target.value)}
                                >
                                    <option value="ALL">All Status</option>
                                    <option value="TODO">To Do</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="DONE">Done</option>
                                </select>
                                <button
                                    type="button"
                                    onClick={openCreateModal}
                                    className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5 inline-block" aria-hidden="true" />
                                    Add Task
                                </button>
                            </div>
                        </div>

                        <TaskList tasks={tasks} onEdit={openEditModal} onDelete={handleDelete} />
                    </div>
                )}

                {currentView === 'TEAM' && (
                    <div>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Team Members</h2>
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {employees.map((employee) => (
                                <div key={employee.id} className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                            {employee.name[0]}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <a href="#" className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            <p className="text-sm font-medium text-gray-900">{employee.name}</p>
                                            <p className="truncate text-sm text-gray-500">{employee.role}</p>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <TaskModal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                task={currentTask}
                onSave={handleSave}
                employees={employees}
            />
        </Layout>
    )
}

export default App
