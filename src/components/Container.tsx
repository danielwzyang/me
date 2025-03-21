import { JSX } from "solid-js"
import Navbar from "./Navbar"
import { MetaProvider, Title } from "@solidjs/meta"

interface Props {
    children: JSX.Element
    title: string
}

export default function Container(props: Props) {
    function updateMousePos(e: MouseEvent) {
        document.documentElement.style.setProperty("--x", e.clientX + "px")
        document.documentElement.style.setProperty("--y", e.clientY + "px")
    }
    
    document.addEventListener("mousemove", (e) => updateMousePos(e))

    return <MetaProvider>
        <Title>{props.title}</Title>
        <div class="w-full h-full grid-pattern -z-1 fixed! top-0 hidden sm:block">
            <h1 class="m-5">hi!!</h1>
        </div>
        <div class="mx-auto w-[640px] max-w-[80%] flex flex-col overflow-y-clip pb-10">
            <Navbar />
            {props.children}
        </div>
    </MetaProvider>
}