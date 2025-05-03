import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {pages} from "./js/pages/pages";
import {Suspense} from "react";

export function App(){
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router>
                <Routes>
                    { pages.map(({path, component}) => (
                        <Route key={path} path={path} element={component} />
                    ))}
                </Routes>
            </Router>
        </Suspense>
    );
}
