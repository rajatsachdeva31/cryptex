export interface User {
    id: string;
    clerkId: string;
    email: string;
    name: string | null;
    avatar: string | null;
    type: UserType;
    balance: number | null;
    createdAt: Date;
}

export type UserType = "FREE" | "PRO";