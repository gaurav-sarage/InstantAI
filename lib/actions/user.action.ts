"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDB } from "../database/db";
import { handleError } from "../utils";


// Create
export async function createUser(user: CreateUserParams) {
    try {
        await connectToDB();

        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        handleError(error);
    }
}


// Read
export async function getUserById(userId: string) {
    try {
        await connectToDB();

        const user = await User.findOne({
            clerkId: userId
        });

        if(!user) throw new Error("User not found");

        return JSON.parse(JSON.stringify(user));
    } catch (error) {
        handleError(error);
    }
}


// Update
export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
        await connectToDB();

        const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
            new: true,
        });

        if(!updatedUser) throw new Error("User update failed");

        return JSON.parse(JSON.stringify(updatedUser));
    } catch (error) {
        handleError(error);
    }
}


// Delete
export async function deleteUser(clerkId: string) {
    try {
        await connectToDB();

        const userToDelete = await User.findOne({
            clerkId
        });

        if(!userToDelete) throw new Error("User not found");

        const deletedUser = await User.findByIdAndDelete(userToDelete._id);
        revalidatePath("/");

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
    } catch (error) {
        handleError(error);
    }
}

// Use Credits

export async function updateCredits(userId: string, creditFee: number) {
    try {
        await connectToDB();

        const updatedUserCredits = await User.findOneAndUpdate(
            { _id: userId },
            { $inc: { creditBalance: creditFee }},
            { new: true }
        )

        if(!updatedUserCredits) throw new Error("User credits update failed");

        return JSON.parse(JSON.stringify(updatedUserCredits));
    } catch (error) {
        handleError(error);
    }
}