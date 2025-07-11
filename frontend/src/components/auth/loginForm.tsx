// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import {
// 	Form,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormControl,
// 	FormMessage,
// 	FormDescription,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// type FormValues = {
// 	username: string;
// };

// const LoginForm = () => {
// 	const form = useForm<FormValues>({
// 		defaultValues: {
// 			username: '',
// 		},
// 	});

// 	return (
// 		<Form {...form}>
// 			<form onSubmit={form.handleSubmit((data) => console.log(data))}>
// 				<FormField
// 					control={form.control}
// 					name="username"
// 					render={({ field }) => (
// 						<FormItem>
// 							<FormLabel>Username</FormLabel>
// 							<FormControl>
// 								<Input placeholder="shadcn" {...field} />
// 							</FormControl>
// 							<FormDescription>This is your public display name.</FormDescription>
// 							<FormMessage />
// 						</FormItem>
// 					)}
// 				/>
// 				<button type="submit">Submit</button>
// 			</form>
// 		</Form>
// 	);
// };

// export default LoginForm;
