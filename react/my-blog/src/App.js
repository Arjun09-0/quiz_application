import Navbar from './navbar.js';
import Home from './home.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        Welcome to My Blog! Here you can read posts, create new blogs, and explore interesting content.
      </div>
      <Home />
    </div>
  );
}
export default App;