import React from 'react';
import SelectLanguage from '../select-language';
import Watch from '../watch';
import './style.css';

class Header extends React.Component {
  
  render() {
    return (
      <header className='header'>
        <div className='header__wrapper'>
          <div>Simple SPA</div>
            <div className='header__items'>
              <div className='watch-and-language'>
                <Watch />
                <SelectLanguage />
              </div>
              <img
                src="https://avatars.githubusercontent.com/u/68753041?s=400&u=15b40651dda5853b8d12859960611dfe8c36ba13&v=4"
                alt="photo"
                width="40px"
                height="40px"
                className='header__img'
              >
              </img>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;