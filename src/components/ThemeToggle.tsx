import { createSignal } from "solid-js"

export default function ThemeToggle() {
    const [theme, setTheme] = createSignal(localStorage.getItem("theme")!)

    return <button
        onClick={() => {
            const newTheme = theme() === "dark" ? "light" : "dark"
            setTheme(newTheme)
            document.querySelector("html")!.setAttribute("data-theme", newTheme)
            localStorage.setItem("theme", newTheme)
        }}
        class={`ml-auto cursor-pointer p-2 rounded-xl bg-inherit 
        ${theme() === "dark" ? "hover:backdrop-brightness-125" : "hover:backdrop-brightness-95"}`}
    >
        {
            theme() === "dark" ?
                <img src="/icons/sun.svg" alt="sun" /> :
                <img src="/icons/moon.svg" alt="moon" />
        }
    </button>
}