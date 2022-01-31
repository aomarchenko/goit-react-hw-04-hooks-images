import React, { Component } from 'react';
import styles from '../Searchbar/Searchbar.module.css';
// import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Searchbar extends Component {
  state = {
    name: '',
  };

  handleInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.name.trim() === '') {
      toast.error('Please, type name of image to search');
      return;
    }

    this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <>
        <header className={styles.Searchbar}>
          <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
            <button className={styles.Button} type="submit"></button>

            <input
              className={styles.Input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </form>
        </header>

        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          ></input>
        </form> */}
      </>
    );
  }
}
export default Searchbar;
