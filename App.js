/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let Dimensions = require('Dimensions');
let {width} = Dimensions.get('window');
let BadgeData = require('./BadgeData.json');
let cols = 3;
let boxW = 100;
let vMargin = (width - cols * boxW) / (cols + 1);
var hMargin = 25;

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./img/icon.png')} style={styles.iconStyle}/>
        <TextInput placeholder={"请输入用户名"} style={styles.textInputStyle}/>
        <TextInput placeholder={"请输入密码"} password={true} style={styles.textInputStyle}/>
        <View style={styles.loginButtonStyle}>
          <Text style={{textAlign: 'center', color: 'white'}}>登录</Text>
        </View>
        <View style={styles.settingStyle}>
          <Text>无法登录</Text>
          <Text>新用户</Text>
        </View>
        <View style={styles.otherLoginStyle}>
          <Text>其他登录方式</Text>
          <Image source={require('./img/icon3.png')} style={styles.otherImageStyle}/>
          <Image source={require('./img/icon7.png')} style={styles.otherImageStyle}/>
          <Image source={require('./img/icon8.png')} style={styles.otherImageStyle}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#dddddd',
    alignItems: 'center',
  },
  iconStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: 'red',
    marginTop: 50,
    marginBottom: 30,
  },
  textInputStyle: {
    height: 44,
    width: width,
    backgroundColor: 'white',
    marginBottom: 1,
    textAlign: 'center'
  },
  loginButtonStyle: {
    height: 44,
    backgroundColor: 'blue',
    width: width - 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderRadius: 5,
  },
  settingStyle: {
    flexDirection: 'row',
    width: width - 80,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  otherLoginStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  otherImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  }
});
