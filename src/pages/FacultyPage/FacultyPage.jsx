import { Box, Text, Button, Center, HStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const FacultyPage = () => {
  const navigate = useNavigate();
  const handleSemesterClick = (sem) => {
    navigate(`/faculty/semester:${sem}`);
  };

  return (
    <Box>
      <Navbar />
      <Box p={4} textAlign="center">
        <Text fontSize="2xl" mb={4}>Faculty Information</Text>
        <Text fontSize="lg">Name: Rekha GS</Text>
        <Text fontSize="lg">Designation: Assistant Professor</Text>
        <Text fontSize="lg">Department: Computer Science</Text>
        <Center mt={8}>
          <HStack spacing={4}>
            {Array.from({ length: 8 }, (_, i) => (
              <Box
                key={i}
                width="120px"
                height="80px"
                bg="teal"
                display="flex"
                alignItems="center"
                justifyContent="center"
                border="1px solid black"
                borderRadius="15px" // Rounded corners
                cursor="pointer"
                onClick={()=>{handleSemesterClick(i+1)}}
              >
                <Text color="white">Semester {i + 1}</Text>
              </Box>
            ))}
          </HStack>
        </Center>
        <Center mt={8}>
          <Button colorScheme="teal">Enroll Class</Button>
        </Center>
      </Box>
    </Box>
  );
};

export default FacultyPage;
