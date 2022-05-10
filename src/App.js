import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import Header from "./components/Header";
import Home from "./components/Home";
import Details1 from "./components/Details1"; import Details2 from "./components/Details2"; import Details3 from "./components/Details3"; import Details4 from "./components/Details4"; import Details5 from "./components/Details5"; import Details6 from "./components/Details6"; import Details7 from "./components/Details7"; import Details8 from "./components/Details8"; import Details9 from "./components/Details9"; import Details10 from "./components/Details10"; import Details11 from "./components/Details11"; import Details12 from "./components/Details12"; import Details13 from "./components/Details13"; import Details14 from "./components/Details14"; import Details15 from "./components/Details15"; import Details16 from "./components/Details16";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/inside-out" element={<Details1 />} />
          <Route path="/details/bao" element={<Details2 />} />
          <Route path="/details/incredibles-2" element={<Details3 />} />
          <Route path="/details/auntie-edna" element={<Details4 />} />
          <Route path="/details/garfield" element={<Details5 />} />
          <Route path="/details/raya" element={<Details6 />} />
          <Route path="/details/the-falcon" element={<Details7 />} />
          <Route path="/details/my-music-story" element={<Details8 />} />
          <Route path="/details/legends" element={<Details9 />} />
          <Route path="/details/burrow" element={<Details10 />} />
          <Route path="/details/soul" element={<Details11 />} />
          <Route path="/details/assembled" element={<Details12 />} />
          <Route path="/details/tangled" element={<Details13 />} />
          <Route path="/details/moana" element={<Details14/>} />
          <Route path="/details/the-simpsons" element={<Details15/>} />
          <Route path="/details/mickey-mouse" element={<Details16/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
