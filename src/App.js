import './App.css';
import image from './picOne.png';
import imageTwo from './picTwo.png';
import { ToDoList } from './ToDoList';



function App() {
  return (
    <div className='app'>
      <div className="picOne container">
      <img src={ image } width="370px" alt="pic"/>
      </div>
      <div className="container">
      <h1>Список дел на сегодня</h1>
      </div>
      <ToDoList/>
      <div className="picTwo container">
      <img src={ imageTwo } width="370px" alt="picTwo"/>
      </div>
    </div>
  )
}

export default App;
