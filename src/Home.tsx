import Container from "./components/Container"

export default function Home() {

    document.addEventListener("mousemove", (e) => {
        document.documentElement.style.setProperty("--x", e.clientX + "px")
        document.documentElement.style.setProperty("--y", e.clientY + "px")
    })

    return <Container>
        <div class="flex gap-10">
            <div class="w-full">
                <div class="flex gap-3 mb-2">
                    <img src="/wave.gif" alt="wave" height={25} width={25} class="mb-auto" />
                    <h1 class="text-2xl serif">hi, i'm daniel!</h1>
                </div>

                <img src="/me.png" alt="me" height={175} width={175} class="rounded-xl block sm:hidden mt-3 mb-5" />

                <p class="font-light text-pretty">
                    I'm a junior at Stuyvesant High School who likes web development and compiler design.
                    I'm hoping to double major in computer science and math!
                </p>

                <div class="mt-2 mb-4 flex gap-2 items-center opacity-60">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16">
                        <path fill="var(--secondary)" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <p>New York City</p>
                </div>
            </div>
            <img src="/me.png" alt="me" height={175} width={175} class="rounded-xl hidden sm:block" />
        </div>
    </Container>
}