import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


export const RoundButton = ({
  style = {},
  textStyle = {},
  size = 100,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles().text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size,
      width: size,
      height: size,
      alignItems: 'center',
      borderColor:'white',
      borderWidth:2,
      justifyContent:'center'
    },
    text: {
      color: '#fff',
      fontSize: 20 ,
    },
  });
