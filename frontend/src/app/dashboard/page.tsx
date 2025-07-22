'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
	const router = useRouter();

    const handleGoTasks = ()=>{
        router.push('/dashboard/tasks');
    };

    const handleGoUsers = () => {
        router.push('/users');
    }

	return (
		<main className="flex flex-col justify-center items-center h-screen gap-3.5">
			<h1>Dashboard page</h1>
            <Button onClick={handleGoTasks} className='px-6 py-2'>Tasks</Button>
            <Button onClick={handleGoUsers} className='px-6 py-2'>Users</Button>
		</main>
	);
}
