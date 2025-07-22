'use client';
import TaskList from '@/components/tasks/TaskList';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
export default function UserPage() {
	const router = useRouter();
	const goToCreateTaskPage = () => {
		router.push('/dashboard/tasks/new');
	};
	return (
		<main className="flex flex-col justify-center items-center mt-5">
			<Button onClick={goToCreateTaskPage}>Tạo task mới </Button>
			<TaskList />
		</main>
	);
}
