import './App.css';
import Fronts from './component/Fronts';
import New from './component/New';
import Shop from './component/Shop';
import 'bootstrap/dist/css/bootstrap.min.css';
import Support from './component/Support'
import Connect from './component/Connect';


function App() {
  return (
    <div className="App">
      <Fronts/>
      <New/>
      <Shop/>
      <Support/>
      <Connect/>
    </div>
  );
}

export default App;
