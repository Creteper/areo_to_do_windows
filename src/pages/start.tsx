import { Button } from "@/components/ui/button"
import { Titlebar } from "@/components/local/titlebar"
export default function Start() {
    return (
        <div className="w-full h-full">
            <Titlebar />
            <div className="flex flex-col items-center justify-center h-[calc(100vh-30px)]">
                <h1 className="text-2xl font-bold">Areo To Do</h1>
                <Button>Start</Button>
            </div>
        </div>
    )
}