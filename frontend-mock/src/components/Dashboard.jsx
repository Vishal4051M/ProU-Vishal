import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ tasks }) {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'DONE').length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    const stats = [
        { name: 'Total Tasks', stat: totalTasks, change: '12%', changeType: 'increase' },
        { name: 'Completion Rate', stat: `${completionRate}%`, change: '2.1%', changeType: 'increase' },
        { name: 'Active Tasks', stat: tasks.filter(t => t.status === 'IN_PROGRESS').length, change: '4%', changeType: 'decrease' },
    ]

    return (
        <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">Last 30 days</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6 hover:shadow-md transition-shadow duration-200">
                        <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}
