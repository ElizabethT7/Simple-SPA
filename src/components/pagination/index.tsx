import React from 'react';
import './style.css';
import { generateCode } from '../../utils';

interface PaginationProps {
  page: number;
  limit: number;
  count: number;
  indent: number;
  onChange: (number: number) => void;
}


class Pagination extends React.Component<PaginationProps> {
  constructor(props: PaginationProps) {
    super(props);
    this.getPageCount = this.getPageCount.bind(this);
  }

  getPageCount() {
    const length = Math.ceil(this.props.count / Math.max(this.props.limit, 1));

    let left = Math.max(this.props.page - this.props.indent, 1);
    let right = Math.min(left + this.props.indent * 2, length);

    left = Math.max(right - this.props.indent * 2, 1);

    let items: any[] = [];

    if (left > 1) items.push(1);
    if (left > 2) items.push(null);
    for (let page = left; page <= right; page++) items.push(page);
    if (right < length - 1) items.push(null);
    if (right < length) items.push(length);

    return items;
  }

  render() {
    const items = this.getPageCount();

    return (
      <ul className='pagination__container'>
        {items.map((number) => (
          <li 
            key={generateCode()}
            onClick={() => this.props.onChange(number)}
            className={number === this.props.page ? 'pagination__item_active' : 'pagination__item'}>
            {number || "..."}
          </li>
        ))}
      </ul>
    )
  }
}

export default Pagination;