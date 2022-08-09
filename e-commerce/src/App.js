import './App.css';
import AutoSlide from './components/AutoSlide/AutoSlide';
import Categories from './components/Categories/Categories';
import PopularStalls from './components/PopularStalls/PopularStalls';
import StartShopping from './components/StartShopping';

function App() {
  return (
    <div className="App">
      <Categories />
     <PopularStalls />
     <StartShopping />
     <div className="d-flex">
        <AutoSlide />
        <AutoSlide />
      </div> 
    </div>
  );
}

export default App;
