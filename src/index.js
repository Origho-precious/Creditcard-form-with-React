import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import styles from './index.module.css';

ReactDOM.render(
  <React.StrictMode>
    <div className={styles.Index}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

