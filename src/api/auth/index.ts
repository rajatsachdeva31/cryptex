"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function GetUserById() {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    return await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    })
}

export async function CreateUser(id: string, name: string, email: string, avatar: string) {
    const user = await currentUser();

    if (!user) {
        return null;
    }

    return await prisma.user.create({
        data: {
            id: id,
            name: name,
            email: email,
            avatar: avatar,
        }
    })
}