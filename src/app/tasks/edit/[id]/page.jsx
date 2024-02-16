"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

function Edit({ params }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const router = useRouter()

    useEffect(() => {
        fetch(`/api/tasks/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTitle(data.title)
                setDescription(data.description)
            })

    }, [])

    const handleForm = async (e) => {
        e.preventDefault()

        const res = await fetch(`/api/tasks/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        //console.log(data)

        //Refrescamos con router para ver los cambios actualizados
        router.refresh()
        router.push('/')
    }

    return (
        <div className="h-[calc(100vh-4rem)] flex justify-center items-center">
            <form className="bg-slate-900 p-10 sm:w-1/2 w-4/5" onSubmit={handleForm}>
                <input type="text" id="title" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Título"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <textarea rows="5" id="description" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Descripción"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                ></textarea>
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Guardar cambios</button>
                    <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={async () =>{
                        await fetch(`/api/tasks/${params.id}`, {
                            method: 'DELETE'
                        })
                        router.refresh()
                        router.push('/')
                    }}
                    >Eliminar</button>
                </div>

            </form>
        </div>
    )
}

export default Edit