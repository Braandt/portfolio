import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DropdownMenu({ links }) {
    return (
        <Menu as="div" className="relative text-left text-xs">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex rounded-xl bg-black bg-opacity-10 px-4 py-2 items-center shadow-inner gap-x-2
                        hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            Menu
                            <ChevronDownIcon
                                className={`-mr-1 h-4 w-4 transition-all
                                ${open && 'rotate-90'}`}
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-xl shadow-xl border-2 bg-black bg-opacity-10
                        backdrop-blur-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                {links.map(link => (
                                    <Menu.Item key={link.label}>
                                        {({ active }) => (
                                            <Link
                                                href={link.path}
                                                className={classNames(
                                                    active ? 'bg-white text-gray-900' : '',
                                                    'block px-4 py-2 m-1 rounded-lg'
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </Menu.Item>
                                ))}

                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}