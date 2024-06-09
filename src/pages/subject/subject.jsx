import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, Button, HStack, Input, useToast } from '@chakra-ui/react';
import Navbar from '../../components/Navbar/Navbar';

const students = [
  { sn: 1, usn: '1BM18CS001', name: 'John Doe' },
  { sn: 2, usn: '1BM18CS002', name: 'Jane Doe' },
  { sn: 3, usn: '1BM18CS003', name: 'Alice' },
  { sn: 4, usn: '1BM18CS004', name: 'Bob' },
  { sn: 5, usn: '1BM18CS005', name: 'Charlie' },
  { sn: 6, usn: '1BM18CS006', name: 'David' },
  { sn: 7, usn: '1BM18CS007', name: 'Eve' },
  { sn: 8, usn: '1BM18CS008', name: 'Frank' },
];

const BlockchainPage = () => {
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      toast({
        title: "File Uploaded",
        description: `${file.name} was uploaded successfully.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Navbar />
      <Box p={4}>
        <Text fontSize="xl" textAlign="center">Semester 3 (Section A)</Text>
        <Text fontSize="xl" textAlign="center">Subject: Blockchain(23CS6PCBLBC)</Text>
        <Box overflowX="auto" my={4}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>S.N</Th>
                <Th>USN</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {students.map((student) => (
                <Tr key={student.usn}>
                  <Td>{student.sn}</Td>
                  <Td>{student.usn}</Td>
                  <Td>{student.name}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <HStack spacing={4} justify="center" my={4}>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload CIE1 Marks</Button>
          </label>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload CIE2 Marks</Button>
          </label>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload CIE3 Marks</Button>
          </label>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload Quiz Marks</Button>
          </label>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload AAT Marks</Button>
          </label>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload Lab Marks</Button>
          </label>
          <label>
            <Input type="file" display="none" onChange={handleFileUpload} />
            <Button as="span" colorScheme="blue">Upload Attendance</Button>
          </label>
        </HStack>
      </Box>
    </Box>
  );
};

export default BlockchainPage;
