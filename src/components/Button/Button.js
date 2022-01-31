import { Component } from 'react';
import styles from '../Button/Button.module.css';

export default class Button extends Component {
  render() {
    return (
      <>
        <button className={styles.Button} type="button" onClick={this.props.onClick}>
          Load more
        </button>
      </>
    );
  }
}
