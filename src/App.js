import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import FactSlide from './components/FactSlide';

function App() {
  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get('/api/v1');
  //     setArray(req.data);
  //     const arr = () => {
  //       array.data.map((item) => (
  //         console.log(item.anime_name)
  //       ))
  //     }
  //     arr();
  //   }
  //   fetchData();
  // }, [])



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
