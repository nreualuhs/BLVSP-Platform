import toolsData from '../data/sample_tools.json';
import { Box, Button, Heading, HStack, RatingGroup, Stack, Table, Text } from "@chakra-ui/react";
import { InfoTip } from '@/components/ui/toggle-tip';

interface Tool {
  id: string;
  name: string;
  compatibility: string;
  description: string;
  rating: number;
};


function App() {
    const tools: Tool[] = toolsData;
    

    return (
      <Stack gap={4}>
        <HStack mb={8}>
          <Heading size="4xl">
            Tool Index
          </Heading>
          <Text fontSize="xs" mt={4}>
            Last Updated: October 26, 2025 03:26am {/* @todo: shouldn't hardcode this */}
          </Text>

        </HStack>

        <HStack gap={-2}>
          <Button rounded="full"> 
            Find a Tool
          </Button>
          <Box mb={4}>
            <InfoTip content="hellooo" /> {/* placeholder */}
          </Box>
          
        </HStack>
        
        <Table.Root size="lg" variant="outline" showColumnBorder>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Compatibility</Table.ColumnHeader>
              <Table.ColumnHeader>Description</Table.ColumnHeader>
              <Table.ColumnHeader>Overall Ratings</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tools.map((tool) => (
              <Table.Row key={tool.id}>
                <Table.Cell>{tool.name}</Table.Cell>
                <Table.Cell>{tool.compatibility}</Table.Cell>
                <Table.Cell>{tool.description}</Table.Cell>
                <Table.Cell>
                  <RatingGroup.Root readOnly count={5} value={tool.rating} size="sm">
                    <RatingGroup.HiddenInput />
                    <RatingGroup.Control />
                  </RatingGroup.Root>

                </Table.Cell>

              </Table.Row>
            ))}
          </Table.Body>

        </Table.Root>
      </Stack>
    );
}

export default App