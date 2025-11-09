import { Button, Field, Input } from "@chakra-ui/react";
import { PasswordInput } from "./password-input";
import { signIn, signUp } from "@/lib/auth";
import { MouseEventHandler } from "react";

export const LoginForm = () => {
	const login: MouseEventHandler = (e) => {
		e.preventDefault();
		signIn.email({
			email: "",
			password: "",
			callbackURL: "/"
		});
	}

	const register: MouseEventHandler = (e) => {
		e.preventDefault();
		signUp.email({
			name: "",
			email: "",
			password: "",
			callbackURL: "/"
		});
	}

	return (
		<form className="flex flex-col">
			<Field.Root>
				<Field.Label>Email</Field.Label>
				<Input />
			</Field.Root>
			<Field.Root mt="4">
				<Field.Label>Password</Field.Label>
				<PasswordInput />
			</Field.Root>
			<Button type="submit" mt="8" bg="primary" onClick={login}>Login</Button>
			<Button type="submit" mt="8" bg="primary" onClick={register}>Register</Button>
		</form>
	)
}
