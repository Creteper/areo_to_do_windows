import { Button } from "../ui/button";
import { X } from "lucide-react";
export function Titlebar() {
    return (
        <div data-tauri-drag-region className="h-[30px] select-none flex justify-end fixed top-0 left-0 right-0">
            <Button variant={"ghost"} className="h-[30px] rounded-l-none rounded-b-none">
                <X />
            </Button>
        </div>
    )
}
