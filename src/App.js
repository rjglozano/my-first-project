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
  const [data, setData] = useState(sportingGoods);

  const [form, setForm] = useState({
    nameItem: "",
    priceItem: 0,
    stockItem: 0,
  });

  // console.log(showOnlyStack)

  const handleClick = () =>{
    alert('Clicked')
}

  const handleForm =(e) => setForm({...form, [e.target.id]: e.target.value})

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(form)
      setData([...data, {id: data.length + 1, name: form.nameItem, price: form.priceItem, stock: form.stockItem}])
      
  };
  
  return (
    <div className="App">

      <form style={{display: 'flex', flexDirection: "column", gap: 10, marginBottom: 20, alignItems: "center"}}>

        <div>
          <label htmlFor="nameItem">Name: </label>
          <input type="text" id='nameItem' value={form.nameItem} onChange={handleForm} className=""></input>

        </div>

        <div>
            <label htmlFor="priceItem">Price: </label>
            <input type="number" id='priceItem' value={form.priceItem} onChange={handleForm} className=""></input>

        </div>
        
        <div>
          <label htmlFor="stockItem">Stock: </label>
          <input type="number" id='stockItem' value={form.stockItem} onChange={handleForm} className=""></input>
        </div>

        <button type='Submit' onClick={handleSubmit}>Submit</button>
      </form>
      <div className='container'>
        {txtValue}
      <TextInput value={txtValue} onChange={(e)=> setTxtValue(e.target.value)}/>
        <Checkbox checked={showOnlyStack} onChange={(e) => setOnlyStack(e.target.checked)} />
        <button onClick={handleClick}>Submit</button>
        <table>
          <tbody>
            <Header />
            <Category />
            <Items items={data} query={txtValue} showOnlyStock={showOnlyStack}/>
            {/* <hr colSpan={12} style={{width:"100%"}}/> */}
          <tr>
           
            <td style={{fontWeight: "bold", textAlign: "right"}} colSpan={2}>Total</td>
            <td style={{textAlign: "center", fontWeight: "bold"}}>{data.reduce((total, data) => total + Number(data.stock), 0)}</td>
          </tr>
          </tbody>
        </table>
       
      </div>
      </div>

  );
}

export default App;
