import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import TextRating from "./ui/rating";
import { Link } from "lucide-react";

//name, compability, description, overall rating 

function TableGroup() {
    return (
        <>
<Table>
  <TableCaption>Table of all avaliable tools</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead>Compatibility</TableHead>
      <TableHead>Description</TableHead>
      <TableHead className="text-right">Overall Rating</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">Can You See Me</TableCell>
      <TableCell>NVDA, Dolphin Screen Reader, JAWS</TableCell>
      <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
      <TableCell className="text-right"><TextRating></TextRating></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">AI Content Describer</TableCell>
      <TableCell>NVDA add-on</TableCell>
      <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
      <TableCell className="text-right"><TextRating></TextRating></TableCell>
    </TableRow>
    <TableRow>
      <TableCell className="font-medium">IndentNav</TableCell>
      <TableCell>NVDA add-on, Visual Studio Code</TableCell>
      <TableCell>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableCell>
      <TableCell className="text-right"><TextRating></TextRating></TableCell>
    </TableRow>
  </TableBody>
</Table>
</>
    );
}

export default TableGroup;