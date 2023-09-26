import { React } from 'react'

const Items = (props) => {
  
  return (
    <>
      {props.items
      .filter(item => props.showOnlyStock ? item.stock > 0 : item)
      .filter(item => item.name.toLowerCase()
      .includes(props.query.toLowerCase())).map(item => (
            <tr key={item.id} onClick={()=> alert(`Clicked: ${item.name} - ${item.price}`)}>
                {/* <td>{item.id}</td> */}
                <td >{item.name}</td>
                <td style={{textAlign:'right'}}>${item.price}</td>
                <td style={{textAlign:'center'}}>{item.stock}</td>
            </tr>
      ))}

    </>
  )
}

export default Items
