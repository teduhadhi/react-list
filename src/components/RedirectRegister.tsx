import { useNavigate } from "react-router-dom";

function RedirectRegister() {
	const navigate = useNavigate();
	const handleRedirectRegister = () => {
		navigate("/register");
	};

	return (
		<p className="flex justify-center text-sm gap-1">
			Don't have an account?
			<span className=" cursor-pointer text-slate-500 font-medium hover:text-slate-400 transition" onClick={handleRedirectRegister}>
				Register here
			</span>
		</p>
	);
}

export default RedirectRegister;
