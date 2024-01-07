import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DateComponent = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentDate(new Date());
        }, 60000);   

        return () => clearInterval(intervalId);
    }, []);

    const months = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec"
      };

    const formattedDay = currentDate.getDay() < 10 ? `0${currentDate.getDay()}` : currentDate.getDay();

    return(
        <View style={styles.dateContainer}>
            <Text style={styles.text}>Today is: {months[currentDate.getMonth()]}</Text>
            <Text style={styles.dateText}>{formattedDay}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dateContainer:{
        width: '44%',
        height: 'auto',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: { 
        fontSize: 20,
        alignSelf: 'flex-start'
    },
    dateText: {
        fontSize: 96
    }
})

export default DateComponent;