"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export async function GetUserDetails() {
    const user = await currentUser()

    if (!user || !user.emailAddresses?.length) {
        return null;
    }

    return await prisma.user.findUnique({
        where: {
            clerkId: user.id,
        },
        include: {
            Portfolio: true,
        }
    })
}

export async function UpdateBalance(amount: number) {
    const user = await currentUser()

    if (!user || !user.emailAddresses?.length) {
        return null;
    }

    return await prisma.user.update({
        where: {
            clerkId: user.id,
        },
        data: {
            balance: {
                decrement: amount,
            }
        }
    })
}

export async function GetAllUsers() {
    const user = await currentUser()

    if (!user || !user.emailAddresses?.length) {
        return null;
    }

    return await prisma.user.findMany({
        include: {
            Portfolio: true,
        }
    })
}