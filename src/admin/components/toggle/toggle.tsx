import React from 'react';
import './style.css';
interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
}

const Toggle: React.FC<ToggleProps> = ({ label, id, ...rest }) => {
  return (
    <div className='container'>
      <label className='switch' htmlFor={`checkbox${id}`}>
        <input type='checkbox' {...rest} id={`checkbox${id}`} />
        <div className='slider round'></div>
      </label>
    </div>
  );
};

export default Toggle;
