import React from 'react'

function TDError(props) {
  return (
    <div className='text-red-500 text-sm duration-75'>
      {props.message}
    </div>
  )
}

export default TDError
