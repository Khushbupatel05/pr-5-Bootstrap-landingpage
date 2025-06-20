import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className="allbutton">{props.btnName}</button>
    </div>
  );
};

export default Button;
