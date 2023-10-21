import CounterPage from "./CounterPage";
import Hero from "./Hero";
import PageError from "./PageError";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="my-title">BBWande Counter App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/counter">BBWande Counter App</Link>
            </li>
            <li>
              <Link to="/error">Error Boundary</Link>
            </li>
            <li>
              <Link to="*">Page 404</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route
            path="/error"
            element={
              <ErrorBoundary>
                <Hero heroName={"Joker"} />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<PageError />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
