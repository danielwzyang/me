import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
    return <div class="w-full flex items-center my-4 gap-5">
        <a href="/" class="font-medium serif transition-opacity hover:opacity-50">home</a>
        <a href="/projects" class="font-medium serif transition-opacity hover:opacity-50">projects</a>
        <a href="/contact" class="font-medium serif transition-opacity hover:opacity-50">contact</a>
        <ThemeToggle />
    </div>
}