import './App.css';
import AutoSlide from './components/AutoSlide/AutoSlide';
import Categories from './components/Categories/Categories';
import PopularStalls from './components/PopularStalls/PopularStalls';

function App() {
  return (
    <div className="App">
      <Categories />
     <PopularStalls />
     <div className="d-flex">
        <AutoSlide />
        <AutoSlide />
      </div> 
    </div>
  );
}

export default App;
