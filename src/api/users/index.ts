"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function GetUserDetails() {
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