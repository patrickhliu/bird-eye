'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// shadcn/ui....

interface Args {
   label: string,
   sendToParent: (x:string) => void,
}

const dropdown:React.FC<Args> = ({ label, sendToParent }) => {
//const dropdown: React.FC<args> = ({ label }) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger className="border-red-500 border-2">{ label }</DropdownMenuTrigger>
        <DropdownMenuContent>
            {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={ () => sendToParent(label) }>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default dropdown;
