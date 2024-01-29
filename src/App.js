import CardInfo from './Components/CardInfo';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
		<div className="App">
		  <BrowserRouter>
			  <Routes>
				  <Route path="/" element={<Home />} />
				  <Route path="/details/:name" element={<CardInfo/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
