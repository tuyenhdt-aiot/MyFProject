import { cookies } from "next/headers";
import { notFound } from "next/navigation";
interface Task {
	id: number;
	title: string;
	description: string;
	status: string;
	file: string;
}
export default async function TaskDetailPage ({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const cookieStore = await cookies();
	const accessToken = cookieStore.get('access_token')?.value;

	if (!accessToken) {
		console.warn('Missing access token');
		notFound();
	}

	const res = await fetch(`http://localhost:3001/tasks/${id}`, {
		headers: {
			Cookie: `access_token=${accessToken}`,
		},
		cache: 'no-store',
		credentials: 'include',
	});

	if (!res.ok) {
		console.error('Không lấy được task');
		notFound();
	}

	const text = await res.text();
	let task: Task;
	try {
		task = JSON.parse(text).data;
	} catch (err) {
		console.error('Lỗi JSON:', err);
		notFound();
	}

	return (
		<div className="m-5 space-y-2">
			<h1 className="text-2xl font-bold">{task.title}</h1>
			<p>{task.description}</p>
			<p className="italic">Trạng thái: {task.status}</p>
		</div>
	);
};