import { View, Pressable, StyleSheet} from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

type Props = {
    onPress: () => void;
    mode: StyleSheet;
};

export default function CircleButton ({onPress,mode}: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name='add' size={38} color='white'/></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 42,
    height: 42,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 21,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});