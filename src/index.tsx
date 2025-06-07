import { render } from "solid-js/web"
import { Router, Route, Navigate } from "@solidjs/router"
import Projects from "./routes/projects"
import Home from "./routes/home"
import MyPulse from "./routes/projects/mypulse"
import StuyCCC from "./routes/projects/stuyccc"
import Minionese from "./routes/projects/minionese"
import "./index.css"
import Goldfinger from "./routes/projects/goldfinger"

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/projects/goldfinger" component={Goldfinger} />
            <Route path="/projects/mypulse" component={MyPulse} />
            <Route path="/projects/stuyccc" component={StuyCCC} />
            <Route path="/projects/minionese" component={Minionese} />
            <Route path="/*" component={() => <Navigate href="/" />} />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
)