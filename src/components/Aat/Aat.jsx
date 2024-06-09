import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function ReviewOption() {
  const data = [
    { slNum: 1, subjectName: "Mathematics", quiz: 85 },
    { slNum: 2, subjectName: "Physics", quiz: 78 },
    { slNum: 3, subjectName: "Chemistry", quiz: 92 },
    // Add more rows as needed
  ];

  return (
    <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Sl No</Th>
            <Th>Subject Name</Th>
            <Th>AAT</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.slNum}>
              <Td>{row.slNum}</Td>
              <Td>{row.subjectName}</Td>
              <Td>{row.quiz}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

