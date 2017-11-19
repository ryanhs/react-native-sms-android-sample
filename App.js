import React from 'react';
import { StyleSheet, Text, View, Button, ToastAndroid } from 'react-native';
import SmsAndroid from 'react-native-sms-android';

export default class App extends React.Component {

  sendSMS() {
    var msg = "USAGE";
    var number = '363';

    SmsAndroid.sms(
        number,
        msg,
        'sendDirect', // sendDirect or sendIndirect
        (err, message) => {
            if (err) {
                ToastAndroid.show('error!', ToastAndroid.SHORT);
            } else {
                if (message == 'success') {
                    ToastAndroid.show('sent to: ' + number, ToastAndroid.SHORT);
                } else {
                    ToastAndroid.show(message, ToastAndroid.SHORT);
                }
            }
        }
    );
  }

  render() {
    return (
        <View style={styles.container}>
            <Text>Last Reload:</Text>
            <Text>{String(new Date())}</Text>

            <View style={styles.buttonWrapper}>
                <Button
                    style={styles.button}
                    onPress={this.sendSMS}
                    title="send SMS"
                    />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
      marginTop: 25,
  },
  button: {
      padding: 21,
  }
});
