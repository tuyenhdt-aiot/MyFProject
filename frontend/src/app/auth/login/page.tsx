import LoginForm from '@/components/auth/loginForm';

const LoginPage = () => {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
					gap: '2vh',
				}}
			>
				<b style={{ fontSize: '25px' }}>Login</b>
				<LoginForm />
			</div>
		</>
	);
};

export default LoginPage;