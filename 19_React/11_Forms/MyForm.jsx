/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

import React from 'react';

// BEGIN (write your solution here)
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        city: '',
        country: '',
        address: '',
        acceptRules: false,
      },
      status: 'filling',
    };
  }

  handleBack = () => {
    this.setState({ status: 'filling' });
  }

  handleSubmit = () => {
    this.setState({ status: 'submitted' });
  }

  handleChangeField = ({ target }) => {
    const { form } = this.state;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ form: { ...form, [target.name]: value } });
  }


  renderRow = (key) => {
    const { form } = this.state;
    return (
      <tr key={key}>
        <td>{key}</td>
        <td>{form[key].toString()}</td>
      </tr>
    );
  };

  renderResult() {
    const { form } = this.state;
    const keys = Object.keys(form).sort();
    return (
      <div>
        <button type="button" onClick={this.handleBack}>Back</button>
        <table key="fieldsValues" className="table">
          <tbody>
            {keys.map(this.renderRow)}
          </tbody>
        </table>
      </div>
    );
  }

  renderForm() {
    const { form } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" className="col-form-label">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChangeField}
              value={form.email}
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" className="col-form-label">Password</label>
            <input
              type="password"
              onChange={this.handleChangeField}
              value={form.password}
              name="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" className="col-form-label">Address</label>
          <textarea type="text" name="address" value={form.address} onChange={this.handleChangeField} className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" className="col-form-label">City</label>
            <input type="text" name="city" onChange={this.handleChangeField} value={form.city} className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputCountry" className="col-form-label">Country</label>
            <select id="inputCountry" name="country" onChange={this.handleChangeField} className="form-control" value={form.country}>
              <option>Choose</option>
              <option value="argentina">Argentina</option>
              <option value="russia">Russia</option>
              <option value="china">China</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input id="rules" name="acceptRules" className="form-check-input" onChange={this.handleChangeField} type="checkbox" checked={form.acceptRules} />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  render() {
    const { status } = this.state;
    const mapping = {
      'filling': this.renderForm(),
      'submitted': this.renderResult(),
    }
    return mapping[status];
  }
}
// END