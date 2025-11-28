import { motion } from 'framer-motion'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'
import { cn } from '../lib/utils'

export default function Dashboard({ tasks = [] }) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'DONE').length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const activeTasks = tasks.filter(t => t.status === 'IN_PROGRESS').length;

    const stats = [
        { id: 1, name: 'Total Tasks', stat: totalTasks, icon: CursorArrowRaysIcon, change: '12%', changeType: 'increase' },
        { id: 2, name: 'Completion Rate', stat: `${completionRate}%`, icon: EnvelopeOpenIcon, change: '2.1%', changeType: 'increase' },
        { id: 3, name: 'Active Tasks', stat: activeTasks, icon: UsersIcon, change: '4%', changeType: 'decrease' },
    ]

    return (
        <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">Overview</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {stats.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                        className="relative overflow-hidden rounded-2xl bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6 transition-all duration-300"
                    >
                        <dt>
                            <div className="absolute rounded-md bg-indigo-500 p-3">
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                        </dt>
                        <dd className="ml-16 flex items-baseline pb-1 sm:pb-7">
                            <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                            <p
                                className={cn(
                                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                                    'ml-2 flex items-baseline text-sm font-semibold'
                                )}
                            >
                                {item.changeType === 'increase' ? (
                                    <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                                ) : (
                                    <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                                )}
                                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                {item.change}
                            </p>
                        </dd>
                    </motion.div>
                ))}
            </dl>
        </div>
    )
}
