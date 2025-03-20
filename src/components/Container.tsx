import { JSX } from "solid-js"
import Navbar from "./Navbar"

interface Props {
    children: JSX.Element
}

export default function Container(props: Props) {
    function updateMousePos(e: MouseEvent) {
        document.documentElement.style.setProperty("--x", e.clientX + "px")
        document.documentElement.style.setProperty("--y", e.clientY + "px")
    }
    
    document.addEventListener("mousemove", (e) => updateMousePos(e))

    return <>
        <div class="w-full h-full grid-pattern -z-1 fixed! top-0 hidden sm:block">
            <h1 class="m-5">hi!!</h1>
        </div>
        <div class="mx-auto w-[640px] max-w-[80%] flex flex-col overflow-y-clip pb-10">
            <Navbar />
            {props.children}
        </div>
    </>
}