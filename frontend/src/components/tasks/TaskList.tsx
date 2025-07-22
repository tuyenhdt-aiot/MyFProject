import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Task {
	id: number;
	title: string;
	description: string;
	status: string;
	file: string;
}
const TaskList = () => {
	const [tasks, setTasks] = useState<Task[]>([]);

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const res = await fetch('http://localhost:3001/tasks', {
					method: 'GET',
					credentials: 'include',
					cache: 'no-store',
				});
				if (!res.ok) throw new Error('Lỗi khi gọi API');
				const data = await res.json();
				// console.log(data);
				setTasks(data.data.res);
			} catch (error) {
				console.error('Error fetching tasks', error);
			}
		};
		fetchTasks();
	}, []);

	return (
		<div className="space-y-4 m-5">
			{tasks.map((task) => (
				<div
					key={task.id}
					className="border pl-60 pr-60 pb-10 pt-10 rounded shadow flex flex-col items-center"
				>
					<h3 className="text-lg font-semibold">{task.title} </h3>
					<Link href={`/dashboard/tasks/${task.id}`}>Xem chi tiết</Link>
				</div>
			))}
		</div>
	);
};

export default TaskList;
