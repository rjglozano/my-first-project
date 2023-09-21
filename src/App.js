import './App.css';
import Category from './components/Category';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Items from './components/Items';
import TextInput from './components/TextInput';

const sportingGoods = [
  {id: 1, name: 'Football', price: 49.99},
  {id: 2, name: 'Baseball', price: 9.99},
  {id: 3, name: 'Baskeball', price: 29.99},
]

function App() {
  return (
    <div className="App">
      <div className='container'>
      <TextInput />
        <Checkbox />
        <table>
          <tbody>
            <Header />
            <Category />
            <Items items={sportingGoods} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
