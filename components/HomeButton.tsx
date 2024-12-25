import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeButton() {
  return (
    <Link href="/(tabs)" style={styles.linkButton}>
      Return to Home
    </Link>
  );
}

const styles = StyleSheet.create({
  linkButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffd33d',
    borderRadius: 5,
    textAlign: 'center',
  },
});
