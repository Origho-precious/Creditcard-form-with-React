import React, { Component } from 'react';
import styles from './Form.module.css';
import CreditCard from '../CreditCard/CreditCard';

class Form extends Component{
    state = {
        cardNumber: '',
        cardName: '',
        expiryMonth: '',
        expiryYear: '',
        status: '',
        textColor: ''
    }

    cardNumberHandler = event => {
        this.setState({cardNumber: event.target.value});
    }

    cardNameHandler = event => {
        this.setState({cardName: event.target.value});
    }

    expiryMonthHandler = event => {
        this.setState({ expiryMonth: event.target.value});
    }

    expiryYearHandler = event => {
        this.setState({ expiryYear: event.target.value});
    }

    validateCard = num => {
        const luhnCheck = num => {
            let arr = (num + '')
              .split('')
              .reverse()
              .map(x => parseInt(x));
            let lastDigit = arr.splice(0, 1)[0];
            let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
            sum += lastDigit;
            return sum % 10 === 0;
          };

        if(luhnCheck(num) && 
            this.state.cardName !== '' &&
            this.state.cardNumber !== '' &&
            this.state.expiryMonth !== '' &&
            this.state.expiryYear !== ''){
                this.setState({ status: 'Valid Card Details', textColor: 'green'})
        }else{
            this.setState({ status: 'Invalid Card Number', textColor: 'red'});
        }
    }

    onSubmithandler = event => {
        event.preventDefault();
        if(this.state.cardNumber !== ''){
            this.validateCard(this.state.cardNumber);
        }
    }

    render(){

        return(
            <div>
                <CreditCard
                    number={this.state.cardNumber}
                    name={this.state.cardName}
                    month={this.state.expiryMonth}
                    year={this.state.expiryYear}/>
                <div className={styles.CardDetails}>
                    <form onSubmit={this.onSubmithandler}>
                        <p className={styles.Status} style={{color: this.state.textColor}}>
                            {this.state.status}
                        </p>
                        <div className={styles.CardInput}>
                            <label htmlFor="card-number">Card Number</label>
                            <input onChange={this.cardNumberHandler} value={this.state.cardNumber} type="number" id="card-number"/>
                        </div>
                        <div className={styles.CardInput}>
                            <label htmlFor="card-name">Card Name</label>
                            <input onChange={this.cardNameHandler} value={this.state.cardName} type="text" id="card-name"/>
                        </div>
                        <div className={styles.CardSelect}>
                            <label>Expiration date</label>
                            <div>
                                <select onChange={this.expiryMonthHandler} value={this.state.expiryMonth}>
                                    <option value="0">Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select onChange={this.expiryYearHandler} value={this.state.expiryYear}>
                                    <option value="0">Year</option>
                                    <option value="20">2020</option>
                                    <option value="21">2021</option>
                                    <option value="22">2022</option>
                                    <option value="23">2023</option>
                                    <option value="24">2024</option>
                                </select>
                            </div>
                            <input type="submit" className={styles.Btn}/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;