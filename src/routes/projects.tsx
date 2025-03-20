import Container from "../components/Container"
import Project from "../components/Project"

export default function Projects() {
    return <Container>
        <h1 class="text-2xl serif mb-4">my projects</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-move-up">
            <Project
                name="MyPulse"
                blurb="An attendance tracking website made for the Stuyvesant FIRST Robotics team."
                image="/projects/mypulse/cover.png"
                tech={["Typescript", "Astro", "TailwindCSS", "Supabase", "Custom API", "Data Analysis"]}
                github="https://github.com/danielwzyang/my.stuypulse.com"
                link="https://my.stuypulse.com/"
            />

            <Project
                name="StuyCCC"
                blurb="A club website displaying announcements, leadership, lessons, and resources."
                image="/projects/stuyccc/cover.png"
                tech={["Typescript", "Figma", "SolidJS", "TailwindCSS", "highlight.js", "Markdown Parsing"]}
                github="https://github.com/danielwzyang/stuyccc.com"
                link="https://www.stuyccc.com/"
            />
        </div>
    </Container>
}