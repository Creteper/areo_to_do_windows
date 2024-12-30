import { Button } from "../ui/button";
import { X, Maximize, Minus } from "lucide-react";
import { getCurrentWindow } from "@tauri-apps/api/window";
export function Titlebar() {
    const window = getCurrentWindow()
    function minimize() {
        window.minimize()
    }
    function maximize() {
        window.toggleMaximize()
    }
    function close() {
        window.close()
    }
    return (
        <div data-tauri-drag-region className="h-[30px] items-center select-none flex justify-end fixed top-0 left-0 right-0">
            <p className="text-sm mr-auto ml-4">Areo To Do</p>
            <Button onClick={minimize} variant={"ghost"} className="h-[30px] rounded-none rounded-b-none">
                <Minus />
            </Button>
            <Button onClick={maximize} variant={"ghost"} className="h-[30px] rounded-none rounded-b-none">
                <Maximize />
            </Button>
            <Button onClick={close} variant={"ghost"} className="h-[30px] rounded-l-none rounded-b-none">
                <X />
            </Button>

        </div>
    )
}
