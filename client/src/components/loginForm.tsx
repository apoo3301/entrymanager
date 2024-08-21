/**
 * @fileoverview Login Form Component
 * @module components/LoginForm
 * 
*/

"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { type SigninInput, SigninSchema } from "@/validators/signin-validator";
import { signinUserAction } from "@/actions/signin-user-action";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { value } from "valibot";
import Link from "next/link";

export const LoginForm = () => {
    const form = useForm<SigninInput>({
        resolver: valibotResolver(SigninSchema),
        defaultValues: { email: "", password: "" },
    });

    const { handleSubmit, control, formState, setError } = form;
    const submit = async (values: SigninInput) => {
        const res = await signinUserAction(values);

        if (res.success) {
            window.location.href = "/agency/profile";
        } else {
            switch (res.statusCode) {
                case 401:
                    setError("password", { message: res.error });
                    break;
                case 500:
                default:
                    const error = res.error || "Internal Server Error";
                    setError("password", { message: error });
            }
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(submit)} className="max-w-[400px] space-y-8" autoComplete="false">
                <Card className="w-full max-w-md">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl">Sign in to your account</CardTitle>
                        <CardDescription>Enter your email and password to access your account.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                        <FormField
                            control={control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                    type="email"
                                    placeholder="e.g. xyz@igymarinas.com"
                                    {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                        <div className="space-y-2">
                        <FormField
                            control={control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="e.g. ********" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
                                    Forgot Password?
                                </Link>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px] w-full sm:mx-auto p-6 sm:px-4">
                                <DialogTitle className="sr-only">Password Reset</DialogTitle>
                                <div className="space-y-4">
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-2xl font-bold">Password Reset</h2>
                                        <p className="text-muted-foreground">If you need to reset your password, please contact an admin.</p>
                                    </div>
                                </div>
                                <DialogFooter className="flex justify-center">
                                    <DialogClose asChild>
                                        <Button type="button">Close</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                        <Button type="submit" disabled={formState.isSubmitting} className="w-full" >Sign in</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
