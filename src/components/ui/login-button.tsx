import { CloseButton, Dialog, Field, IconButton, Input, Portal } from "@chakra-ui/react";
import { LuCircleUserRound } from "react-icons/lu";
import { PasswordInput } from "./password-input";

export const LoginButton = () => {

	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<IconButton bg="primary" _dark={{bg: "primary", color: "white"}}>
					<LuCircleUserRound></LuCircleUserRound>
				</IconButton>
			</Dialog.Trigger>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>Login</Dialog.Title>
						</Dialog.Header>
						<Dialog.Body>
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
							</Dialog.Body>
							<Dialog.Footer>
								<Dialog.CloseTrigger asChild>
									<CloseButton></CloseButton>
								</Dialog.CloseTrigger>
							</Dialog.Footer>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	)
}