import { useState } from "react";
import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	chakra,
	Box,
	Avatar,
	FormControl,
} from "@chakra-ui/react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const CFaEnvelope = chakra(FaEnvelope);

export default function ForgotPassword() {
	const [email, setEmail] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Handle password reset logic here
	};

	return (
		<Flex
			flexDirection="column"
			width="100wh"
			height="100vh"
			backgroundColor="gray.200"
			justifyContent="center"
			alignItems="center">
			<Stack
				flexDir="column"
				mb="2"
				justifyContent="center"
				alignItems="center">
				<Avatar bg="teal.500" />
				<Heading color="teal.400">Forgot Password</Heading>
				<Box minW={{ base: "90%", md: "468px" }}>
					<form onSubmit={handleSubmit}>
						<Stack
							spacing={4}
							p="1rem"
							backgroundColor="whiteAlpha.900"
							boxShadow="md"
							borderRadius="20px">
							<FormControl>
								<InputGroup>
									<InputLeftElement pointerEvents="none">
										<CFaEnvelope color="gray.300" />
									</InputLeftElement>
									<Input
										type="email"
										placeholder="Email Address"
										borderRadius="md"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</InputGroup>
							</FormControl>
							<Button
								borderRadius="20px"
								type="submit"
								variant="solid"
								colorScheme="teal"
								width="full">
								Reset Password
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				Remembered your password?{" "}
				<Link color="teal.500" to="/login">
					Login
				</Link>
			</Box>
		</Flex>
	);
}
