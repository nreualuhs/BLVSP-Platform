import { Button, Field, Heading, Input, Link, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Form } from "react-router-dom";

function ToolSubmissionPage() {
  const FormInput = ({ label, required = true }: { label: ReactNode, required?: boolean }) => (
    <Field.Root required={required}>
      <Field.Label>
        {label} <Field.RequiredIndicator />
      </Field.Label>
      <Input />
    </Field.Root>
  );

  return (
    <Stack gap={4}>
      <Heading size="4xl">
        Tool Submission Form
      </Heading>
      <Form>
        <FormInput label="Email" />
        <FormInput label="Link to Tool" />
        <FormInput label="Description" />
        <FormInput label="Compatability Information" required={false} />
        <FormInput label="Tutorial Video(s)" required={false} />
        <FormInput label="Creator's Guidelines/Cautions for the Tool" required={false} />
        <FormInput label="Limitations" required={false} />
        <FormInput label="Extra Comments" required={false} />
        <RadioGroup.Root>
          <VStack align="start">
            <RadioGroup.Item value="Yes">
              <RadioGroup.ItemHiddenInput></RadioGroup.ItemHiddenInput>
              <RadioGroup.ItemIndicator></RadioGroup.ItemIndicator>
              <RadioGroup.ItemText>Yes</RadioGroup.ItemText>
            </RadioGroup.Item>
            <RadioGroup.Item value="No">
              <RadioGroup.ItemHiddenInput></RadioGroup.ItemHiddenInput>
              <RadioGroup.ItemIndicator></RadioGroup.ItemIndicator>
              <RadioGroup.ItemText>No</RadioGroup.ItemText>
            </RadioGroup.Item>
          </VStack>
        </RadioGroup.Root>
        <Button variant="outline">Submit</Button>
      </Form>
    </Stack>
  );
}

export default ToolSubmissionPage;