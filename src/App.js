import logo from './logo.svg';
import './App.css';
import Message from './Message/Message';
import './styles/style.scss'

function App() {
  return (
    <div className="app">
      
     <Message name="Евгений" group='345' message='"Желаем Всем успеха"'/>
     <Message name="Ростислав" group='654' message='"Вперед Омский ботинок!"'/>
     <Message name="Кристина" group='21' message='"Мир спасет красота"'/>
    </div>
  );
}

export default App;
