import React from 'react';
import './style.css';

class SelectLanguage extends React.Component {

  render() {
    return (
      <select className='language__select' onChange={(e) => localStorage.setItem('len', e.target.value)}>
        <option className="text-xl text-gray-500" value="ru">
          Русский
        </option>
        <option className="text-xl text-gray-500" value="en">
          English
        </option>
      </select>
    );
  }
}

export default SelectLanguage;