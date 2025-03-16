import { onMount } from "solid-js"

export default function Redirect() {
    onMount(() => {
        document.location.pathname = ""
    })
    
    return <></>
}