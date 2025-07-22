import RegisterForm from '@/components/auth/registerForm';

const RegisterPage = () => {
	return (
		<>
			<div
				style={{
					display: 'flex',
                    flexDirection:'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
                    gap: '2vh'
				}}
			>
                <b style={{fontSize:'25px'}}>Register</b>
				<RegisterForm />
			</div>
		</>
	);
};

export default RegisterPage;
