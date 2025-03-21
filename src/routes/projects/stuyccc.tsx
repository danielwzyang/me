import Container from "../../components/Container"

export default function StuyCCC() {
    return <Container title="StuyCCC">
        <h1 class="text-3xl serif mb-3">StuyCCC</h1>
        <img src="/projects/stuyccc/cover.png" alt="stuyccc" class="mb-5 rounded-lg" />
        <div class="flex flex-col gap-3">
            <p>
                Stuyvesant has some incredibly talented competitive programmers, all of them gathered in the club StuyCCC. I've never
                really done much in their club besides attending competitions, but I browsed their
                <a href="https://old.stuyccc.com"> old website </a>
                a few times for links to lessons and practice problems. Although practical, their website was never very stunning,
                and I wanted to revamp it.
            </p>

            <img src="/projects/stuyccc/old.png" alt="old website" class="mb-5 rounded-lg" />

            <h1 class="text-2xl serif">Designing</h1>

            <p>
                After having a conversation with the current president, I started working on Figma. This was my first practical
                experience with Figma, and it was a really fun experience. One of the things I hated the most about making websites
                was designing because I just went with the flow. Things would seem out of place and my color palette was reduced to
                black and white most of the time. After this project, I can't stop using Figma because it helps create a polished and
                consistent design, letting me explore layouts, colors, and shapes. You can see my figma
                <a href="https://www.figma.com/design/XI9E0DYikoSXPPyCuqcjOq/ccc?node-id=0-1&t=gPLMsVPWichG68w4-1"> here</a>.
            </p>

            <img src="/projects/stuyccc/figma.png" alt="figma preview" class="mb-5 rounded-lg" />

            <h1 class="text-2xl serif">Markdown and JSON Parsing</h1>

            <p>
                To make the experience easier for the leaders of the club to update the website with lessons, I wanted them to edit markdown files or JSON files. Initially, I wanted to use Astro for this because of their amazing content collections, but I ultimately chose SolidJS to try it out. Similar to Astro, I created a folder called content, which had three folders. The lessons folder stores markdown files for lesson pages on the website. The lessons.json file in the root folder is a JSON storing every lesson with its key information, e.g. date, link, and title. Most of the lessons are linked to slideshows, but some of them are written out on the website. The posts folder stores markdown files for the posts on the home page. The writeups folder stores markdown files for the writeups for competitions.
            </p>

            <p>
                Behind the scenes, I used
                <a href="https://www.npmjs.com/package/marked"> marked</a>,
                <a href="https://www.npmjs.com/package/front-matter"> front-matter</a>, and
                <a href="https://www.npmjs.com/package/katex"> katex</a>.
                These helped me parse the markdown files, and I also had some custom tags for code blocks like &lt;java&gt;, &lt;cpp&gt;, and &lt;py&gt;. Marked parses the markdown body into HTML and katex stylizes the complex math equations in solution explanations. Front-matter parses the extra data at the head of the file, like name and date. These three packages combined help me to turn easily editable content into a page or component on the website.
            </p>
        </div>
    </Container>
}