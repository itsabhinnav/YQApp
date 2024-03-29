import React from 'react';
import { View, Text} from 'react-native';

import { LoginGoogle } from '.';

const RegisterCard = ({sampleText, bottomText, marginSample, googleText }) => {

  const { containerStyle, headText } = styles;

  return (

    <View style = {[containerStyle, {marginTop: marginSample}]}>
      <Text style = {headText}> {sampleText} </Text>
      <LoginGoogle buttonText = {googleText} backgroundStyle = '#FFFFFF'
        iconName="google" iconColor="#000" textColor="#000000" iconSize = {18}/>
      <LoginGoogle
        buttonText = {googleText}
        textColor='#FFFFFF'
        backgroundStyle = '#475993' iconName="facebook-square" iconColor="#FFF" iconSize = {19}/>
        <Text style = {[headText, {margin: 20}]}> {bottomText} </Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headText: {
    fontFamily: 'SF Pro Display Regular',
    fontSize: 13,
    color: '#8B959A',
  }
}

export {RegisterCard};
