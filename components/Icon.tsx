import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileIcon() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/profile')} style={styles.icon}>
      <Image source={require('@/assets/images/profile-default.svg')} style={styles.iconImage} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginLeft: 'auto',
  },
  iconImage: {
    width: 40,
    height: 40,
  },
});