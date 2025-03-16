import { JSX } from "solid-js"
import Navbar from "./Navbar"

interface Props {
    children: JSX.Element
}

export default function Container(props: Props) {
    return <>
        <div class="w-full grid-pattern absolute -z-1 hidden sm:block">
            <h1 class="m-5">hi!!</h1>
        </div>
        <div class="mx-auto w-[700px] max-w-[80%] flex flex-col">
            <Navbar />
            { props.children }
        </div>
    </>
}