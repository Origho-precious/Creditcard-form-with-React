import React, { Component } from 'react';
import Form from '../components/Form/Form';
import styles from './App.module.css';

class App extends Component{

    render(){
        return(
            <div className={styles.App}>
                <Form/>
            </div>
        )
    }
}

export default App;