import Container from "../components/Container"

export default function Home() {
    return <Container title="Daniel Yang">
        <div class="flex gap-10">
            <div class="w-full">
                <div class="flex gap-3 mb-2">
                    <img src="/icons/wave.gif" alt="wave" height={25} width={25} class="mb-auto" />
                    <h1 class="text-2xl serif">hello, i'm daniel!</h1>
                </div>

                <img src="/me.png" alt="me" class="rounded-xl block sm:hidden mt-3 mb-5 w-full" />

                <p class="text-pretty">
                    I'm a junior at Stuyvesant High School who likes web development and compiler design.
                    I'm hoping to double major in computer science and math!
                </p>

                <div class="mt-2 mb-4 flex gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="16">
                        <path fill="var(--tertiary)" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    <p class="text-(--tertiary)!">New York City</p>
                </div>

                <div class="flex gap-2 items-center">
                    <div class="relative h-8 w-fit overflow-hidden rounded-lg p-[2.5px] group">
                        <span class="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#4e40a8_0%,#927cbf_50%,#4e40a8_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                        <a href="/resume.pdf" target="_blank" class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-(--secondary) px-3 py-1 text-(--bg) backdrop-blur-sm font-extrabold border border-(--bg)">Resume</a>
                    </div>

                    <a href="https://www.linkedin.com/in/danielwzyang/" class="ml-auto hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" class="fill-(--secondary)">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                    </a>

                    <a href="https://github.com/danielwzyang/" class="hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" class="fill-(--secondary)">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>

                    <a href="mailto:danielwzyang@gmail.com" class="hover:scale-110 transition right">
                        <svg width="25" height="25" viewBox="2 4 20 16" xmlns="http://www.w3.org/2000/svg" class="fill-(--secondary)">
                            <path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z" />
                        </svg>
                    </a>
                </div>
            </div>
            <img src="/me.png" alt="me" height={200} width={200} class="mb-auto rounded-xl hidden sm:block" />
        </div>

        <h1 class="mt-12 text-2xl serif w-fit">
            education
        </h1>
        <div class="mt-3 flex flex-col gap-6">
            <div class="flex items-center gap-4">
                <img src="/icons/stuy.jpg" alt="stuy" width={50} class="rounded-4xl mt-2 mb-auto" />
                <div>
                    <h1>Stuyvesant High School</h1>
                    <p class="text-sm text-(--tertiary)!">Sep 2022 - Jun 2026</p>
                    <p class="mt-1 text-sm font-light">
                        Unweighted GPA: 96.88 <br />
                        Advanced Coursework:
                        AP Biology, AP European History, AP Computer Science A, AP Precalculus, AP Macroeconomics
                    </p>
                </div>
            </div>
        </div>

        <h1 class="mt-12 text-2xl serif w-fit">
            experience
        </h1>
        <div class="mt-3 flex flex-col gap-6">
            <div class="flex items-center gap-4">
                <img src="/icons/stuypulse.png" alt="stuypulse" width={50} class="rounded-4xl mt-2  mb-auto" />
                <div>
                    <h1>StuyPulse</h1>
                    <p class="text-sm">IT Director</p>
                    <p class="text-sm text-(--tertiary)!">Nov 2024 - Present</p>
                    <p class="mt-1 text-sm font-light">
                        Created MyPulse, an attendance tracking website used by over 165 members of the team. Exported attendance data for leadership to use.
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-4" style={{ "animation-delay": "2s" }}>
                <img src="/icons/spectator.jpg" alt="spectator" width={50} class="rounded-4xl mt-2  mb-auto" />
                <div>
                    <h1>The Stuyvesant Spectator</h1>
                    <p class="text-sm">Web Developer + Design Lead</p>
                    <p class="text-sm text-(--tertiary)!">Nov 2024 - Present</p>
                    <p class="mt-1 text-sm font-light">
                        Led the design and creation of Gamma, a hub for Spectator's Web Department members. Contributed to the main website with design documentation, bug fixes, and stylistic updates.
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-4" style={{ "animation-delay": "2.2s" }}>
                <img src="/icons/su.png" alt="su" width={50} class="rounded-4xl mt-2  mb-auto" />
                <div>
                    <h1>Stuyvesant Student Union</h1>
                    <p class="text-sm">Web Developer</p>
                    <p class="text-sm text-(--tertiary)!">Oct 2024 - Present</p>
                    <p class="mt-1 text-sm font-light">
                        Collaborated to revamp the appearance of Epsilon, Stuyvesant's student hub. Created lessons for inexperienced members on HTML, CSS, JS, and React.
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-4" style={{ "animation-delay": "2.4s" }}>
                <img src="/icons/stuyccc.png" alt="stuyccc" width={50} class="rounded-4xl mt-2  mb-auto" />
                <div>
                    <h1>Stuyvesant Competitive Coding Club</h1>
                    <p class="text-sm">Website Manager</p>
                    <p class="text-sm text-(--tertiary)!">Oct 2024 - Present</p>
                    <p class="mt-1 text-sm font-light">
                        Redesigned, created, and managed a club website for the competitive coding club to host announcements, lessons, and resources.
                    </p>
                </div>
            </div>
            <div class="flex items-center gap-4" style={{ "animation-delay": "2.6s" }}>
                <img src="/icons/sda.png" alt="sda" width={50} class="rounded-4xl mt-2  mb-auto" />
                <div>
                    <h1>Stuyvesant Donated Apparel</h1>
                    <p class="text-sm">President</p>
                    <p class="text-sm text-(--tertiary)!">March 2024 - Present</p>
                    <p class="mt-1 text-sm font-light">
                        Founded the club and coordinated designing, printing, and selling of clothes. Directed all of the modeling shoots and created the club website.
                    </p>
                </div>
            </div>
        </div>
    </Container>
}