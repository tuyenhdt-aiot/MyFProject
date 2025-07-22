'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import axios from 'axios';

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const form = useForm<FormValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const router = useRouter();
	const [message, setMessage] = useState<string | null>(null);
	const onSubmit = async (data: FormValues) => {
		try {
			const res = await axios.post('http://localhost:3001/auth/login', data, {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			const result = await res.data;
			router.push('/dashboard');
			setMessage(result.message || 'Login successfully');
		} catch (error) {
			setMessage('Login failed !');
			console.error('Login failed', error);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Username</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								{/* <FormDescription>This is your public display name.</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input type="password" placeholder="Password" {...field}></Input>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="flex justify-center">
						<Button type="submit">Submit</Button>
					</div>
					{message && <p className="text-center text-sm text-red-500">{message}</p>}
				</div>
			</form>
		</Form>
	);
};

export default LoginForm;
