import toolsData from '../data/sample_tools.json';
import { RatingGroup, Table } from "@chakra-ui/react";

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
      <Table.Root size='lg' variant='outline' showColumnBorder>
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
        
    );
}

export default App