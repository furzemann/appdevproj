import { View, StyleSheet, Text, TextInput } from 'react-native';
import { useState } from 'react';
import HomeButton from '@/components/HomeButton';
import ProfileIcon from '@/components/Icon';

export default function Search() {
  const [input, setInput] = useState('');
  const [opacity, setOpacity] = useState(0.4);

  const handleTextChange = (text) => {
    setInput(text);
    setOpacity(text ? 1 : 0.4);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <HomeButton />
        <Text style={styles.title}>Search</Text>
        <ProfileIcon />
      </View>
      <View style={styles.searchBoxContainer}>
        <TextInput
          style={[styles.searchBox, { opacity }]}
          value={input}
          onChangeText={handleTextChange}
          placeholder="Type here..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  searchBoxContainer: {
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  searchBox: {
    marginLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
