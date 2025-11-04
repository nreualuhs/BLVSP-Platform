import { Field, Input } from "@chakra-ui/react";
import { PasswordInput } from "./password-input";

export const LoginForm = () => {
	return (
		<form className="flex flex-col">
			<Field.Root>
				<Field.Label>Email</Field.Label>
				<Input />
			</Field.Root>
			<Field.Root>
				<Field.Label>Password</Field.Label>
				<PasswordInput />
			</Field.Root>
			<button type="submit">Submit</button>
		</form>
	)
}
