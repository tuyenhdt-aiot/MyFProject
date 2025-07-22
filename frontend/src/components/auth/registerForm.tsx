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
import axios from 'axios';
import { useRouter } from 'next/navigation';

type FormValues = {
	email: string;
	password: string;
	name: string;
	role: string;
};

const RegisterForm = () => {
	const form = useForm<FormValues>({
		defaultValues: {
			email: '',
			password: '',
			name: '',
			role: '',
		},
	});

	const [message, setMessage] = useState<string | null>(null);
	const router = useRouter();
	const onSubmit = async (data: FormValues) => {
		try {
			const res = await axios.post('http://localhost:3001/auth/register', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await res.data;
			setMessage(result.message || 'Register successfully');
			router.push('/auth/login');

		} catch (error) {
			setMessage('Register failed');
			console.error('Regitser failed', error);
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
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Name" {...field}></Input>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="role"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Role</FormLabel>
								<FormControl>
									<select {...field} className="border p-2 rounded w-full">
										<option value="">Select role</option>
										<option value="ADMIN">ADMIN</option>
										<option value="USER">USER</option>
									</select>
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

export default RegisterForm;
