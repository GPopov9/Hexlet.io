import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
export default class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  handleChangeInput = async ({ target }) => {
    const term = target.value;

    if (term.length === 0) {
      this.setState({ list: [] })
    } else {
      const res = await axios.get('/countries', { params: { term: term } });
      this.setState({ list: res.data });
    }
  }

  renderList = () => {
    const { list } = this.state;
    if (list.length === 0) {
      return null;
    }
    return (
      <ul>
        {list.map(item => <li key={item}>{item}</li>)}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Country" onChange={this.handleChangeInput} />
          </div>
        </form>
        {this.renderList()}
      </div>
    );
  }
}
// END