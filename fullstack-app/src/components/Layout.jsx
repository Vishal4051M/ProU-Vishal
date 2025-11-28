import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    HomeIcon,
    UsersIcon,
    XMarkIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/outline'
import { cn } from '../lib/utils'
import { motion } from 'framer-motion'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Tasks', href: '#', icon: ClipboardDocumentListIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
]

export default function Layout({ children, currentView, onNavigate }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navItems = navigation.map(item => ({
        ...item,
        current: item.name.toUpperCase() === currentView
    }))

    return (
        <>
            <div className="min-h-screen bg-gray-50/50">
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4 ring-1 ring-white/10">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">ProU Task</span>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {navItems.map((item) => (
                                                            <li key={item.name}>
                                                                <button
                                                                    onClick={() => {
                                                                        onNavigate(item.name.toUpperCase())
                                                                        setSidebarOpen(false)
                                                                    }}
                                                                    className={cn(
                                                                        item.current
                                                                            ? 'bg-indigo-500/10 text-indigo-400'
                                                                            : 'text-slate-400 hover:text-white hover:bg-slate-800',
                                                                        'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold transition-all duration-200 w-full text-left'
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={cn(
                                                                            item.current ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white',
                                                                            'h-6 w-6 shrink-0 transition-colors duration-200'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-slate-900 px-6 pb-4 border-r border-slate-800">
                        <div className="flex h-16 shrink-0 items-center">
                            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">ProU Task</span>
                        </div>
                        <nav className="flex flex-1 flex-col">
                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-1">
                                        {navItems.map((item) => (
                                            <motion.li
                                                key={item.name}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <button
                                                    onClick={() => onNavigate(item.name.toUpperCase())}
                                                    className={cn(
                                                        item.current
                                                            ? 'bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20'
                                                            : 'text-slate-400 hover:text-white hover:bg-slate-800',
                                                        'group flex gap-x-3 rounded-xl p-3 text-sm leading-6 font-medium transition-all duration-200 w-full text-left'
                                                    )}
                                                >
                                                    <item.icon
                                                        className={cn(
                                                            item.current ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white',
                                                            'h-6 w-6 shrink-0 transition-colors duration-200'
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </button>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <div className="mt-auto pb-4">
                            <div className="rounded-xl bg-slate-800/50 p-4 ring-1 ring-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                                        D
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-white">Demo User</p>
                                        <p className="text-xs text-slate-400">Pro Plan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:pl-72">
                    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200/50 bg-white/80 backdrop-blur-md px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                        <button
                            type="button"
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <div className="flex flex-1" />
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button className="p-2 text-gray-400 hover:text-gray-500 transition-colors">
                                    <span className="sr-only">View notifications</span>
                                    <div className="h-2 w-2 rounded-full bg-red-500 absolute top-4 right-4 ring-2 ring-white"></div>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <main className="py-10">
                        <div className="px-4 sm:px-6 lg:px-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {children}
                            </motion.div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
