import React from 'react'

const TextInput = ({value, onChange}  ) => {
  return (
    <div>
      <input style={{width: "100%"}} value={value} type='text' onChange={onChange} />
    </div>
  )
}

export default TextInput
