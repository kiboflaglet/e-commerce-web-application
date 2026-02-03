import z from "zod";

const UserSchema = z.object({
    id: z.uuid(),
    name: z.string().min(1).max(100),
    password: z.string().min(6).max(100),
    email: z.email(),
    createdAt: z.date(),
})

export const LoginUserSchema = UserSchema.pick({ email: true, password: true });
export const RegisterUserSchema = UserSchema.pick({ name: true, email: true, password: true });

export type User = z.infer<typeof UserSchema>;