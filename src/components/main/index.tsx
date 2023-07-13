import React from 'react';
import List from '../list';
import Pagination from '../pagination';
import data from '../../assets/data.json';
import './style.css';

class Main extends React.Component<{}, { page: number, count: number, limit: number }> {
  constructor(props: {}) {
    super(props);
    this.state = { page: 1, count: 34, limit: 10 };

    this.handleChange = this.handleChange.bind(this);
    this.getReview = this.getReview.bind(this);
  }

  handleChange(value: number) {
    this.setState({ page: value});
  }

  getReview() {
    const dataRu: any = data.ru;
    const arr: string[] = Object.keys(dataRu);
    const newArr = [];
    const startIndex = this.state.page * this.state.limit - this.state.limit;
    const endIndex = this.state.page * this.state.limit;
    for (let i = startIndex; i < endIndex; i++){
      if(arr[i]) newArr.push(dataRu[arr[i]]);
    }

    return newArr;
  }

  render() {
    const arr = this.getReview();

    return (
      <main className='main'>
        <div className='main__wrapper'>
          <List arr={arr}/>
          <Pagination
            count={this.state.count}
            page={this.state.page}
            limit={this.state.limit}
            indent={1}
            onChange={this.handleChange}/>
        </div>
      </main>
    );
  }
}

export default Main;