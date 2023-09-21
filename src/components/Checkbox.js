import React from 'react'

const Checkbox = ({checked, onChange}) => {
  return (
    <div>
        <label>
            <input type='checkbox' checked={checked} onChange={onChange}/>
            Only Show Product in Stock
        </label>
    </div>
  )
}

export default Checkbox
