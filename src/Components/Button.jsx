import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={`button-primary`}>{props.btnName}</button>
    </div>
  )
}

export default Button
