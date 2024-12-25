import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {router} from 'expo-router';
import { Pressable } from 'react-native-gesture-handler';

interface Props {
  imgSource: any;
  Author: string;
  Title: string;
  Source: string;
  Time: string;
  id: number;
};

export default function Article({ imgSource, Author, Title, Source, Time, id}: Props) {
  const currTime = new Date();
  const artTime = new Date(Time);
  const  Days = currTime.getDate() - artTime.getDate();
  return (
    <View style={styles.container}>
      <View>
        <Image source={imgSource} style={styles.image} />
        <Text style={styles.sourceText}>
          {Source}
        </Text>
      </View>
      <Text style={{ fontWeight: 'bold', fontSize: 26, textAlign: 'center'}}>
        {Title}
      </Text>
      <Text style={{ textAlign: 'right', marginRight: 30}}>
        {Days} days ago
      </Text>
      <Text style={{ textAlign: 'left', marginLeft: 30 }}>
        Written by:{Author}
      </Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
  },
  sourceText: {
    position: 'absolute',
    top: 10,
    left:0,
    right:0,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
