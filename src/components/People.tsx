"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

import CommandBarComponent from "./CommandBarComponent";
import { useState } from "react";
import ComboboxDemo from '@/components/Filter'


  


type Person = {
    name: string;
    email: string;
    company: string;
    phone: string;
    creationDate: string;
    city: string;
    jobTitle: string;
  };
  
  const people: Person[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Tech Solutions",
      phone: "555-1234",
      creationDate: "2023-01-15",
      city: "New York",
      jobTitle: "Software Engineer",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      company: "Innovatech",
      phone: "555-5678",
      creationDate: "2023-02-20",
      city: "San Francisco",
      jobTitle: "Product Manager",
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      company: "Web Creators",
      phone: "555-8765",
      creationDate: "2023-03-12",
      city: "Los Angeles",
      jobTitle: "UX Designer",
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      company: "Marketing Masters",
      phone: "555-4321",
      creationDate: "2023-04-25",
      city: "Chicago",
      jobTitle: "Marketing Specialist",
    },
    {
      name: "Charlie Green",
      email: "charlie.green@example.com",
      company: "Finance Gurus",
      phone: "555-3456",
      creationDate: "2023-05-30",
      city: "Houston",
      jobTitle: "Financial Analyst",
    },
    {
      name: "Daisy White",
      email: "daisy.white@example.com",
      company: "HealthCorp",
      phone: "555-6543",
      creationDate: "2023-06-18",
      city: "Miami",
      jobTitle: "Healthcare Consultant",
    },
    {
      name: "Ethan Black",
      email: "ethan.black@example.com",
      company: "EduWorld",
      phone: "555-7890",
      creationDate: "2023-07-22",
      city: "Seattle",
      jobTitle: "Educational Specialist",
    },
    {
      name: "Fiona Blue",
      email: "fiona.blue@example.com",
      company: "Creative Studios",
      phone: "555-0987",
      creationDate: "2023-08-11",
      city: "Austin",
      jobTitle: "Graphic Designer",
    },
    {
      name: "George Yellow",
      email: "george.yellow@example.com",
      company: "BuildIt",
      phone: "555-5432",
      creationDate: "2023-09-05",
      city: "Denver",
      jobTitle: "Project Manager",
    },
    {
      name: "Hannah Red",
      email: "hannah.red@example.com",
      company: "Logistics Hub",
      phone: "555-2109",
      creationDate: "2023-10-14",
      city: "Boston",
      jobTitle: "Logistics Coordinator",
    },
    {
      name: "Ian Purple",
      email: "ian.purple@example.com",
      company: "Sales Pros",
      phone: "555-6789",
      creationDate: "2023-11-03",
      city: "Philadelphia",
      jobTitle: "Sales Executive",
    },
    {
      name: "Jasmine Gold",
      email: "jasmine.gold@example.com",
      company: "Retail World",
      phone: "555-4567",
      creationDate: "2023-12-25",
      city: "Las Vegas",
      jobTitle: "Store Manager",
    },
    {
      name: "Kyle Silver",
      email: "kyle.silver@example.com",
      company: "Green Energy",
      phone: "555-7654",
      creationDate: "2023-01-04",
      city: "Phoenix",
      jobTitle: "Environmental Engineer",
    },
    {
      name: "Lily Pink",
      email: "lily.pink@example.com",
      company: "Tech Innovators",
      phone: "555-3457",
      creationDate: "2023-02-17",
      city: "Portland",
      jobTitle: "Data Scientist",
    },
    {
      name: "Mason Brown",
      email: "mason.brown@example.com",
      company: "Foodies",
      phone: "555-8762",
      creationDate: "2023-03-23",
      city: "San Diego",
      jobTitle: "Chef",
    },
    {
      name: "Nina White",
      email: "nina.white@example.com",
      company: "Wellness Center",
      phone: "555-4328",
      creationDate: "2023-04-18",
      city: "Atlanta",
      jobTitle: "Wellness Coach",
    },
    {
      name: "Oscar Green",
      email: "oscar.green@example.com",
      company: "Architects",
      phone: "555-3490",
      creationDate: "2023-05-24",
      city: "Orlando",
      jobTitle: "Architect",
    },
    {
      name: "Penny Blue",
      email: "penny.blue@example.com",
      company: "Law Partners",
      phone: "555-6781",
      creationDate: "2023-06-30",
      city: "Washington D.C.",
      jobTitle: "Attorney",
    },
    {
      name: "Quinn Yellow",
      email: "quinn.yellow@example.com",
      company: "Media House",
      phone: "555-9023",
      creationDate: "2023-07-15",
      city: "Nashville",
      jobTitle: "Journalist",
    },
    {
      name: "Ruby Red",
      email: "ruby.red@example.com",
      company: "Designs Unlimited",
      phone: "555-1239",
      creationDate: "2023-08-28",
      city: "Dallas",
      jobTitle: "Interior Designer",
    }
  ];
  
//   console.log(people);
  

function People() {
  return (
    <div className="w-full">

      <Card className=" w-full">
        <CardHeader className="flex justify-end flex-row">
          <CardTitle className="ml-2 self-end filter hover:text-gray-600 cursor-pointer">Filter</CardTitle>
          <CardTitle className="ml-5 sort">Sort</CardTitle>
          <CardTitle className="ml-5 options">Options</CardTitle>

    </CardHeader>
        <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="mr-5">Name</TableHead>
              <TableHead className="ml-5">Email</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Creation Date</TableHead>
              <TableHead>City</TableHead>
              <TableHead >Job Title</TableHead>
                        
                        
                        
            </TableRow>
          </TableHeader>
            
    
          
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
              <TableBody>
                  {people.map((people, id) => {
                      return (
                        <TableRow key={id}>
                          <TableCell >{people.name }</TableCell>
                          <TableCell className="text-left">{people.email }</TableCell>
                          <TableCell className="text-left">{people.company }</TableCell>
                          <TableCell className="text-left">{people.phone}</TableCell>
                          <TableCell className="text-left">{people.creationDate }</TableCell>
                          <TableCell className="text-left">{people.city }</TableCell>
                          <TableCell className="text-left">{people.jobTitle }</TableCell>
                        
                   </TableRow> 
                      )
                  })}
            
          </TableBody>
      </Table>   
  </CardContent>
  
</Card>

      

    
        
</div>
  )
}

export default People
