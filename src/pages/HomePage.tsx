import { Box, Grid, Heading, Text } from "@chakra-ui/react";

function App() {

	return (
		<>
			<Heading size="7xl">Access Code Hub</Heading>
			<Text textStyle="xl" mt="12">Welcome to the Access Code Hub! We are a screen reader accessible platform where Blind and Low Vision Software Professionals (BLVSPs) can find software tools for accessibility, network with other BLVSPs and get involved in   community outreach through volunteering. To learn more about us  please see the features below.</Text>
			<Grid templateColumns="repeat(4, minmax(0, 1fr))" mt="12" gap="8" className="directory">
				<Box>
					<Heading rounded="sm" bg="purple.500" px={2} py={4} textAlign="center" color="white" mb={2}>Tool Index</Heading>
					<Text rounded="sm" bg="purple.200" px={2} py={4} textAlign="center" color="black" height="full">Our Tool Index page is a configured list of accessible tools. Please visit here to find the most applicable tools for your use case.</Text>
				</Box>
				<Box>
					<Heading rounded="sm" bg="purple.500" px={2} py={4} textAlign="center" color="white" mb={2}>Submit A Tool</Heading>
					<Text rounded="sm" bg="purple.200" px={2} py={4} textAlign="center" color="black" height="full">To submit a tool to the website please use our Tool Submission Form. This will create a new index in the Tool Index page, so that other developers can take advantage of this utility.</Text>
				</Box>
				<Box>
					<Heading rounded="sm" bg="purple.500" px={2} py={4} textAlign="center" color="white" mb={2}>Connect Now</Heading>
					<Text rounded="sm" bg="purple.200" px={2} py={4} textAlign="center" color="black" height="full">To learn more about the BLVSP community please visit our Community section. Here you can find other software professionals to discuss useful tools.</Text>
				</Box>
				<Box>
					<Heading rounded="sm" bg="purple.500" px={2} py={4} textAlign="center" color="white" mb={2}>Get Involved</Heading>
					<Text rounded="sm" bg="purple.200" px={2} py={4} textAlign="center" color="black" height="full">To get more engaged in the community please consider volunteering. Here you can help improve our Tool Index website through content moderation or community outreach.</Text>
				</Box>
			</Grid>
		</>
	)
}

export default App