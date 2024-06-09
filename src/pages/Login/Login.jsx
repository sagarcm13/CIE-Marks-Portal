import { useState } from "react";
import {
	Flex,
	Heading,
	Input,
	Button,
	InputGroup,
	Stack,
	InputLeftElement,
	Avatar,
	FormControl,
	InputRightElement,
	Radio,
	RadioGroup,
	HStack,
	chakra,
	Box,
	FormHelperText,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate,Link } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export default function Login() {
	const [showPassword, setShowPassword] = useState(false);
	const [role, setRole] = useState('student');

	const navigate = useNavigate();

	const handleShowClick = () => setShowPassword(!showPassword);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(role);
		navigate(`/${role}`);
	}

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
				<Heading color="teal.400">Welcome</Heading>
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
										<CFaUserAlt color="gray.300" />
									</InputLeftElement>
									<Input type="email" placeholder="email address" />
								</InputGroup>
							</FormControl>
							<FormControl>
								<InputGroup>
									<InputLeftElement pointerEvents="none" color="gray.300">
										<CFaLock color="gray.300" />
									</InputLeftElement>
									<Input
										type={showPassword ? "text" : "password"}
										placeholder="Password"
									/>
									<InputRightElement width="4.5rem">
										<Button h="1.75rem" size="sm" onClick={handleShowClick}>
											{showPassword ? "Hide" : "Show"}
										</Button>
									</InputRightElement>
								</InputGroup>
								<FormHelperText textAlign="right">
									<Link to="/login/password-reset">forgot password?</Link>
								</FormHelperText>
							</FormControl>
							<FormControl as="fieldset">
								<RadioGroup onChange={setRole} value={role}>
									<HStack spacing="24px">
										<Radio value="student">Student</Radio>
										<Radio value="faculty">Teacher</Radio>
										<Radio value="HOD">HOD</Radio>
									</HStack>
								</RadioGroup>
							</FormControl>
							<Button
								borderRadius="20px"
								type="submit"
								variant="solid"
								colorScheme="teal"
								width="full">
								Login
							</Button>
						</Stack>
					</form>
				</Box>
			</Stack>
			<Box>
				New to us?{" "}
				<Link color="teal.500" to="/signup">
					Sign Up
				</Link>
			</Box>
		</Flex>
	);
}
