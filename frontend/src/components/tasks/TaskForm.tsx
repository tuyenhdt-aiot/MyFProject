'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

type FormValues = {
    id?:number;
	title: string;
	description: string;
	status: string;
};

interface TaskFormProps {
	initialData?: FormValues | null;
}

export default function TaskForm({initialData}: TaskFormProps) {
	const router = useRouter();

	const form = useForm<FormValues>({
		defaultValues: {
			title: initialData?.title || '',
			description: initialData?.description || '',
			status: initialData?.status || '',
		},
	});

	const isEdit: boolean = !!initialData;
	const [message, setMessage] = useState<string | null>(null);
	const onSubmit = async (data: FormValues) => {
		try {
			if (isEdit && initialData?.id) {
				const res = await axios.put(`http://localhost:3001/tasks/${initialData.id}`, data, {
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				});
				setMessage(res.data.message || 'Update task successfully');
				router.push('/dashboard/tasks');
			} else {
				const res = await axios.post(`http://localhost:3001/tasks`, data, {
					headers: {
						'Content-Type': 'application/json',
					},
					withCredentials: true,
				});
				setMessage(res.data.message || 'Create new task successfully');
				router.push('/dashboard/tasks');
			}
		} catch (error) {
			setMessage(isEdit ? 'Edit task failed' : 'Create new task failed');
			console.error('Error fetching tasks', error);
		}
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Description" {...field}></Input>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Status</FormLabel>
								<FormControl>
									<select {...field} className="border p-2 rounded w-full">
										<option value="">Select status</option>
										<option value="OPEN">OPEN</option>
										<option value="IN_PROGRESS">IN PROGRESS</option>
										<option value="DONE">DONE</option>
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
}
