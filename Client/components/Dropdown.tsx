import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical,Trash2 } from "lucide-react";
import { DialogBoxContent } from "@/components/DialogBox";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuItem
        // onClick={onView}
        >
          <DialogBoxContent
            title="View Item"
            description="View the details of this item."
          />
        </DropdownMenuItem>
        <DropdownMenuItem
          // onClick={onDelete}
          className="text-red-500 focus:text-red-600"
        >
          <Trash2 className="w-4 h-4 mr-2"/>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
