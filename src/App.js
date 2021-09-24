import { Routes } from './routes';
import GlobalStyle from './styles/global'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <GlobalStyle/>
      <Routes toast={toast}></Routes>
    </div>
  );
}

export default App;
