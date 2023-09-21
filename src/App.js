import './App.css';
import Category from './components/Category';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Items from './components/Items';
import TextInput from './components/TextInput';
import {useState } from 'react'


const sportingGoods = [
  {id: 1, name: 'Football', price: 49.99, stock: 0},
  {id: 2, name: 'Baseball', price: 9.99, stock: 1},
  {id: 3, name: 'Baskeball', price: 29.99, stock: 2},
]

function App() {

  const [txtValue, setTxtValue] = useState("");
  const [showOnlyStack, setOnlyStack] = useState(false);

  // console.log(showOnlyStack)

  const handleClick = () =>{
    alert('Clicked')
}
  
  return (
    <div className="App">
      <div className='container'>
        {txtValue}
      <TextInput value={txtValue} onChange={(e)=> setTxtValue(e.target.value)}/>
        <Checkbox checked={showOnlyStack} onChange={(e) => setOnlyStack(e.target.checked)} />
        <button onClick={handleClick}>Submit</button>
        <table>
          <tbody>
            <Header />
            <Category />
            <Items items={sportingGoods} query={txtValue} showOnlyStock={showOnlyStack}/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
