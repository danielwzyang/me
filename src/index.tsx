import { render } from "solid-js/web"
import Home from "./Home"
import { Router, Route } from "@solidjs/router"
import Redirect from "./Redirect"
import Projects from "./Projects"
import Contact from "./Contact"
import Resume from "./Resume"
import "./index.css"

render(
    () => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
            <Route path="/*" component={Redirect} />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
)