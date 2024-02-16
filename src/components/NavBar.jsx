import Link from 'next/link'

function NavBar() {
    return (
        <nav className="bg-slate-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                        <ul className="flex justify-between gap-x-3">
                            <li>
                                <Link href='/' className='hover:text-indigo-500'>
                                    Tareas
                                </Link>
                            </li>
                            <li>
                                <Link href='/new' className='hover:text-indigo-500'>
                                    Nueva tarea
                                </Link>
                            </li>
                            <li>
                                <Link href='/about' className='hover:text-indigo-500'>
                                    Sobre la app
                                </Link>
                            </li>
                        </ul>


                </div>
            </div>
        </nav>

    )
}

export default NavBar