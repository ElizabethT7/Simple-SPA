import React from 'react';
import { getName } from '../../utils';
import {ItemProps}  from './types';
import './style.css';


class Item extends React.Component<ItemProps> {
  constructor(props: ItemProps) {
    super(props);
  }

  render() {
    return (
      <div className='item__container'>
        <h3>{getName(this.props.item.name)}</h3>
        <p>{this.props.item.review}</p>
        <p>{this.props.item.date}</p>
      </div>
    );
  }
}

export default Item;