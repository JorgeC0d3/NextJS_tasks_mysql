import { NextResponse } from "next/server";
import { prisma } from '@/libs/prisma'

//Obtener una tarea por su id

export async function GET(request, { params }) {
    const task = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}

//Modificar una tarea por su id

export async function PUT(request, { params }) {
    const data = await request.json()
    const task = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(task)
}

//Eliminar una tarea por su id

export async function DELETE(request, { params }) {
    try {
        const task = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })
        return NextResponse.json(task)
    } catch (err) {
        return NextResponse.json(err.message)
    }

}