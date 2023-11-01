import { Routes, Route } from "react-router-dom";

// import global style
import GlobalStyle from "./components/GlobalStylesComponent";

// import component
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// import pages
import WorkPagesIndex from "./pages/WorkPages/WorkPagesIndex";
import AboutPagesIndex from "./pages/AboutPages/AboutPagesIndex";
import LandingPagesIndex from "./pages/LandingPages/LandingPagesIndex";
import WorkDetailPages from "./pages/WorkDetailPages/WorkDetailPages";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <HeaderComponent />
      <Routes>
        <Route exact path='/' element={<LandingPagesIndex />} />
        <Route exact path='/works' element={<WorkPagesIndex />} />
        <Route exact path='/about' element={<AboutPagesIndex />} />
        <Route exact path='/home' element={<LandingPagesIndex />} />
        <Route exact path='/works/:id' element={<WorkDetailPages />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
