import React from "react";
import {
	Box,
	Flex,
	Button,
	IconButton,
	Heading,
	Image,
	Stack,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	TabIndicator,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import ProductOption from "../../components/Internals/Internals";
import DocumentOption from "../../components/Quiz/Quiz";
import ReviewOption from "../../components/Aat/Aat";
import HodReviewOption from "../../components/Eligibility/Eligibility";
export default function Project() {
	return (
		<Box>
			<Navbar />

			<Flex>
				<Box w="60%" ml="10%">
					<Tabs position="relative" variant="unstyled">
						<TabList borderBottom="2px solid rgba(0, 0, 0, 0.1)">
							<Tab fontSize="xl" mr={7} p={3}>
								Internal
							</Tab>
							<Tab fontSize="xl" mr={7} p={3}>
								Quiz
							</Tab>
							<Tab fontSize="xl" mr={7} p={3}>
								AAT
							</Tab>
							<Tab fontSize="xl" mr={7} p={3}>
								Eligibility
							</Tab>
						</TabList>
						<TabIndicator
							mt="-1.5px"
							height="3px"
							// bg="teal.500"
							bgGradient="linear(to-r, teal.400, blue.400)"
							borderRadius="1px"
						/>
						<TabPanels border="2px solid rgba(0, 0, 0, 0.1)">
							<TabPanel>
								<ProductOption />
							</TabPanel>
							<TabPanel>
								<DocumentOption />
							</TabPanel>
							<TabPanel>
								<ReviewOption />
							</TabPanel>
							<TabPanel>
								<HodReviewOption />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>

				
			</Flex>
		</Box>
	);
}

