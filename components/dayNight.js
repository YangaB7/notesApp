import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DayNight = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [greeting, setGreeting] = useState('');
    const [timeOfDayImage, setTimeOfDayImage] = useState('');
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentDate(new Date());
        }, 3600000); // Update every 3600 seconds (1 hour)

        updateGreeting();
        updateTimeOfDayComponent();
    
        return () => clearInterval(intervalId);
    }, []);

    const updateGreeting = () => {
        const currentHour = currentDate.getHours();
        let newGreeting = '';
    
        if (currentHour >= 5 && currentHour < 12) {
          newGreeting = 'Good Morning!';
        } else if (currentHour >= 12 && currentHour < 17) {
          newGreeting = 'Good Afternoon!';
        } else {
          newGreeting = 'Good Night!';
        }
    
        setGreeting(newGreeting);
    };
    
    
  const updateTimeOfDayComponent = () => {
    const currentHour = currentDate.getHours();
    let newTimeOfDayComponent = null;

    if (currentHour >= 5 && currentHour < 7) {
      newTimeOfDayComponent = <Image source={require('../media/newMoon.png')} style={styles.image}/>;
    } else if (currentHour >= 7 && currentHour < 17) {
      newTimeOfDayComponent = <Image source={require('../media/newMoon.png')} style={styles.image}/>;
    } else if (currentHour >= 17 && currentHour < 19) {
      newTimeOfDayComponent = <Image source={require('../media/newMoon.png')} style={styles.image}/>;
    } else {
      newTimeOfDayComponent = <Image source={require('../media/newMoon.png')} style={styles.image}/>;
    }

    setTimeOfDayImage(newTimeOfDayComponent);
  };
  
    return (
      <View style={styles.goodContainer}> 
        <Text style={styles.greeting}>{greeting}</Text>
        {timeOfDayImage}
      </View>
    );
  }

const styles = StyleSheet.create({
    goodContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '44%',
        height: 160,
        alignItems: 'center'
    },
    image: {
        width: 90,
        height: 90,
    },
    greeting: {
      fontSize: 24
    }
})
export default DayNight;