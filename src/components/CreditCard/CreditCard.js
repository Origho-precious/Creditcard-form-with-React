import React from 'react';
import styles from './CreditCard.module.css';

const CreditCard = (props) => {
    return(
        <div className={styles.Card}>
            <div className={styles.CardNumber}>
                {props.number ? props.number : "#### #### #### ####"}
            </div>
            <div className={styles.CardDetails}>
                <div>
                    <h5>Card Holder</h5>
                    <p>{props.name ? props.name : "CARD NAME"}</p>
                </div>
                <div>
                    <h5>Expires</h5>
                    <p>{props.month ? props.month : "MM"}/{props.year ? props.year : "YY"}</p>
                </div>
            </div>
        </div>
    )
};

export default CreditCard;