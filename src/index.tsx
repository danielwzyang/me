import { render } from "solid-js/web"
import { Router, Route } from "@solidjs/router"
import Projects from "./routes/projects"
import Redirect from "./Redirect"
import Home from "./routes/home"
import Resume from "./routes/resume"
import MyPulse from "./routes/projects/mypulse"
import StuyCCC from "./routes/projects/stuyccc"
import "./index.css"

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/mypulse" component={MyPulse} />
            <Route path="/projects/stuyccc" component={StuyCCC} />
            <Route path="/resume" component={Resume} />
            <Route path="/*" component={Redirect} />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
)