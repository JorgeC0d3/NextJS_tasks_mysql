"use client"

import Task from '@/components/Task'
import { useEffect, useState } from "react"

function Home() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('/api/tasks/')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTasks(data)
      })

  }, [tasks.length])


  //console.log(tasks)
  return (
    <main className='container mx-auto'>
      <h1 className='text-center mb-5 mt-5 text-3xl'>Tareas</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-3'>
        {
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                task={task}
              />
            )
          })
        }
      </div>
    </main>
  )
}

export default Home
