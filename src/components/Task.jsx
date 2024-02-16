"use client"

import { useRouter } from "next/navigation"

function Task({ task }) {
    const router = useRouter()
    return (
        <div
            className='bg-slate-900 p-5 mb-5 mx-3 hover:bg-slate-800 hover:cursor-pointer'
            onClick={() => router.push(`/tasks/edit/${task.id}`)}
        >
            <h3 className='font-bold text-xl text-indigo-500 mb-3'>{task.title}</h3>
            <p>{task.description}</p>
            <p className='mt-3 text-xs text-gray-600'>{new Date(task.created_at).toLocaleDateString()}</p>
        </div>
    )
}

export default Task