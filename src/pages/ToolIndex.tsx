// import { useState, useEffect } from 'react'
// import Navbar from './components/Navbar'
// import './App.css'
// import { DataTable } from './components/datatable/data-table'
// import { Payment, columns } from './components/datatable/columns'

import { useState, useEffect } from "react"
import { DataTable } from "@/components/datatable/data-table"
import { Payment, columns } from '../components/datatable/columns'

// Fetch the data as in your DemoPage component
async function getData(): Promise<Payment[]> {
    return [
        {
            id: "123",
            name: "Can You See Me",
            compatibility: "JAWS",
            description: "A simple tool that offers guidence on webcam placement to people with limited amounts of useful vision",
            rating: "4/5"
        },
        {
            id: "456",
            name: "AI Content Describer",
            compatibility: "NVDA",
            description: "Provides descriptions for images and UI controls using multiple AI models like Claude, ChatGPT, and Gemini",
            rating: "4/5"
        },
        {
            id: "789",
            name: "IndentNav",
            compatibility: "VS code",
            description: "Enables code navigation between different indentation levels",
            rating: "3/5"
        },
    ]
}

function ToolIndex() {
    const [data, setData] = useState<Payment[]>([])

    useEffect(() => {
        getData().then((fetchedData) => setData(fetchedData))
    }, [])

    return (
        <>
            <h1 className="Title">Tool Index</h1>
            <div className="container mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </>
    )
}

export default ToolIndex