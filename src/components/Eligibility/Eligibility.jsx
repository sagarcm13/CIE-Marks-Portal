import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function HodReviewOption() {
  const data = [
    { slNum: 1, subjectName: "Mathematics", attendance: "Present", eligibility: "Eligible" },
    { slNum: 2, subjectName: "Physics", attendance: "Absent", eligibility: "Not Eligible" },
    { slNum: 3, subjectName: "Chemistry", attendance: "Present", eligibility: "Eligible" },
    // Add more rows as needed
  ];

  return (
    <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Sl No</Th>
            <Th>Subject Name</Th>
            <Th>Attendance</Th>
            <Th>Eligibility</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.slNum}>
              <Td>{row.slNum}</Td>
              <Td>{row.subjectName}</Td>
              <Td>{row.attendance}</Td>
              <Td fontWeight="bold">{row.eligibility}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
