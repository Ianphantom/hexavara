import { Routes, Route } from "react-router-dom";

// import global style
import GlobalStyle from "./components/GlobalStylesComponent";

// import component
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";

// import pages
import WorkPagesIndex from "./pages/WorkPages/WorkPagesIndex";
import AboutPagesIndex from "./pages/AboutPages/AboutPagesIndex";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <HeaderComponent />
      <Routes>
        <Route exact path='/' element='Home' />
        <Route exact path='/works' element={<WorkPagesIndex />} />
        <Route exact path='/about' element={<AboutPagesIndex />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
