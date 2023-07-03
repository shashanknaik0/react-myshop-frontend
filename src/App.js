import { CssBaseline } from '@material-ui/core';
import './App.css';
import RootRouter from "./componants/router/RootRouter";


function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <RootRouter/>
    </div>
  );
}

export default App;

