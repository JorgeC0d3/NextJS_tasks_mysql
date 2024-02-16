"use client"

import { useRouter } from "next/navigation"

function New() {

    const router = useRouter()

    const handleForm = async (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value

        const res = await fetch('/api/tasks/', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        console.log(data)
        router.push('/')
    }

    return (
        <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
            <form className="bg-slate-900 p-10 sm:w-1/2 w-4/5" onSubmit={handleForm}>
                <input type="text" id="title" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Título" />
                <textarea rows="5" id="description" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Descripción"></textarea>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar</button>
            </form>
        </div>
    )
}

export default New