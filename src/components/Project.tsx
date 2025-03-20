import { For, Show } from "solid-js"

interface Props {
    name: string
    blurb: string
    image: string
    tech: string[]
    github?: string
    link?: string
}

export default function Project(props: Props) {
    return <div class="w-full border border-(--lines) bg-(--bg) rounded-lg px-6 py-5">
        <h1 class="text-xl font-medium">{props.name}</h1>
        <img src={props.image} alt={props.name} class="rounded-sm my-3 border border-(--lines)" />
        <p class="text-sm text-pretty mt-1 mb-3 font-light">{props.blurb}</p>
        <div class="flex flex-wrap gap-2">
            <For each={props.tech}>
                {
                    (tag) => (
                        <div class="bg-(--secondary) text-(--bg) text-xs py-[2px] px-2 rounded-md">{tag}</div>
                    )
                }
            </For>
        </div>
        <div class="flex mt-4 items-center">
            <a
                href={`/projects/${props.name.toLowerCase()}`}
                class="group flex gap-1 items-center text-sm"
            >
                learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </a>

            <div class="ml-auto flex gap-2">
                <Show when={props.link}>
                    <a href={props.link} class="hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-(--primary)"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                    </a>
                </Show>

                <Show when={props.github}>
                    <a href={props.github} class="hover:scale-110 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 16 16" class="fill-(--primary)">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </a>
                </Show>
            </div>
        </div>
    </div>
}