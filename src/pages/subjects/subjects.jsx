import { Box, SimpleGrid, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";

const Subjects = () => {
  return (
    <Box border="1px solid" borderColor="gray.300" p={4} borderRadius="md" w="full" maxW="600px" mx="auto">
      <SimpleGrid columns={2} spacing={4}>
        <Box border="1px solid" borderColor="gray.300" p={4} borderRadius="md" textAlign="center">
          <Link as={RouterLink} to="/faculty/semester:6/blockchain">
            Blockchain
          </Link>
        </Box>
        <Box border="1px solid" borderColor="gray.300" p={4} borderRadius="md" textAlign="center">
          <Link as={RouterLink} to="/faculty/semester:6/blockchain">
            Machine Learning
          </Link>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default function Project() {
  return (
    <Box>
      <Navbar />
      <Subjects />
    </Box>
  );
}
