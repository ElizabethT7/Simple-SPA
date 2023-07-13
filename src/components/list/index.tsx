import React from 'react';
import Item from '../item';
import { generateCode } from '../../utils';
import { ListProps } from './types';
import './style.css';

class List extends React.Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }

  render() {
    return (
      <div className='list__container'>
        {this.props.arr.map((el) => (
            <Item key={generateCode()} item={el}/>
        ))}
      </div>
    );
  }
}

export default List;