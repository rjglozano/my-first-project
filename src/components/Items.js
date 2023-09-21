import { React } from 'react'

const Items = (props) => {
  
  return (
    <>
      {props.items
      .filter(item => props.showOnlyStock ? item.stock > 0 : item)
      .filter(item => item.name.toLowerCase()
      .includes(props.query.toLowerCase())).map(item => (
            <tr key={item.id} onClick={()=> alert(`Clicked: ${item.name} - ${item.price}`)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{props.includePrice && item.price}</td>
            </tr>
      ))}
    </>
  )
}

export default Items
