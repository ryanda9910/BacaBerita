import React, { Component } from 'react';

//Imported Libraries
import { Text } from 'native-base';
import moment from 'moment';


class Time extends Component {

    constructor(props) {
        super(props);
        this.date = props.time;
    }

    render() {
        const time = moment( this.date || moment.now() ).fromNow();
        return (
            <Text note style={{marginHorizontal:20}}>{time}</Text>
        );
    }
}


export default Time;
