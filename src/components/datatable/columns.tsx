"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  name: string
  compatibility: "NVDA" | "JAWS" | "VS code"
  description: string
  rating: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const item = row.original
      return (
        <Link to={`/tool/${item.id}`}
        state={{ name: item.name }}
        className="hover:underline">
          {item.name}
        </Link>
        )
      },
    },
  {
    accessorKey: "compatibility",
    header: "Compatibility",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
]