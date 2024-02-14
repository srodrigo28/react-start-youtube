import "./App.css"

import { Menu } from "./components/Menu"
import { Content } from "./components/Content"
import { BrowserRouter as Router } from "react-router-dom"

export function App(){
    return(
        <Router>
            <div className="app-main">
                <Menu />
                <Content />
            </div>
        </Router>
    )
}