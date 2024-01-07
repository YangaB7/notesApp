import { StyleSheet, Text, View } from 'react-native';
import DateComponent from './dateComponent';
import DayNight from './dayNight';

const Welcome = () => {
    return (
      <View style={styles.welcomeContainer}>
        <DayNight/>
        <DateComponent/>
      </View>
    );
  }

const styles =StyleSheet.create({
    welcomeContainer: {
        width: '92%',
        height: 200,
        borderRadius: 10,
        backgroundColor: '#306844',
        marginTop:18,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default Welcome;