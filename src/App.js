import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Boards from "./Components/Boards";
import Posts from "./Components/Posts";
import CreateNewBoard from "./Components/CreateNewBoard"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { YourPost } from './Components/YourPost';
function App() {
  return (
    <>
    <Router>
    <Header/>
     <Footer/>
     <Routes>
        <Route  exact path="/" element={<Boards/>} />
        <Route exact path="/posts" element={<YourPost/>} />
     </Routes>
    </Router>
     <CreateNewBoard/>
    </>
  );
}
export default App;
