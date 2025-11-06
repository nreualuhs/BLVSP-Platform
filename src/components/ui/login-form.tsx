import { Button, Field, Input } from "@chakra-ui/react";
import { PasswordInput } from "./password-input";

export const LoginForm = () => {
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
			<Button type="submit" mt="8" bg="primary">Login</Button>
		</form>
	)
}
