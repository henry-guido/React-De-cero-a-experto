import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'
// import HookApp from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'

import './index.css';
import { Padre } from './07-tarea-memo/Padre';
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import {Layout} from './05-useLayoutEffect/Layout'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   {/* <React.StrictMode> */}
  <MainApp />
  {/* </React.StrictMode>, */}
  </BrowserRouter>
);
