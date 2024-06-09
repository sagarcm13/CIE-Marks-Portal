// import React from "react";
// import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

// export default function ProductOption() {
//   const data = [
//     { slNum: 1, subjectName: "Mathematics", cie1: 85, cie2: 88, cie3: 90 },
//     { slNum: 2, subjectName: "Physics", cie1: 78, cie2: 82, cie3: 80 },
//     { slNum: 3, subjectName: "Chemistry", cie1: 92, cie2: 91, cie3: 94 },
//     // Add more rows as needed
//   ];

//   return (
//     <Box p={4}>
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Sl No</Th>
//             <Th>Subject Name</Th>
//             <Th>CIE 1</Th>
//             <Th>CIE 2</Th>
//             <Th>CIE 3</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {data.map((row) => (
//             <Tr key={row.slNum}>
//               <Td>{row.slNum}</Td>
//               <Td>{row.subjectName}</Td>
//               <Td>{row.cie1}</Td>
//               <Td>{row.cie2}</Td>
//               <Td>{row.cie3}</Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// }

import { useState, useEffect } from "react";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export default function ProductOption() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Sl No</Th>
            <Th>Subject Name</Th>
            <Th>CIE 1</Th>
            <Th>CIE 2</Th>
            <Th>CIE 3</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => (
            <Tr key={row.slNum}>
              <Td>{row.slNum}</Td>
              <Td>{row.subjectName}</Td>
              <Td>{row.cie1}</Td>
              <Td>{row.cie2}</Td>
              <Td>{row.cie3}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
