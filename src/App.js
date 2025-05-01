import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import {pages} from "./js/pages/pages";

export function App(){
    return (
        <Router>
            <Routes>
                { pages.map(({path, component}) => (
                    <Route key={path} path={path} element={component} />
                ))}
            </Routes>
        </Router>
    );
}
