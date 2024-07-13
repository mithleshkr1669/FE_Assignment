"use client"
import { useEffect, useState } from "react";
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

function CommandBarComponent() {
    const [showCommandBar, setCommandBar] = useState<boolean>(false);

  
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === 'k') {
        event.preventDefault();
        setCommandBar(true);
       
      }
    }
    function handleCommandBar(event:MouseEvent) {
      const target = event.target as HTMLElement;
      if (event.target instanceof HTMLElement && !event.target.closest('.command-modal')) {
        setCommandBar(false);
      }
    }
    document.addEventListener("mousedown",handleCommandBar)

       document.addEventListener("keydown",handleKeyDown) 
  },[])
  
  return (
    <>
          
              
           {showCommandBar ? <Command className="command-modal flex absolute right-0 top-0 w-[30rem]">
               <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>Task</CommandItem>
                  <CommandItem>Products</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                  <CommandItem>Testimonials</CommandItem>
                  <CommandItem>Settings</CommandItem>
                  <CommandItem>Logout</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command> :"" }      
      
    </>
  )
}

export default CommandBarComponent
