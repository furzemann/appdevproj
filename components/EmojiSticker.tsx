import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { type ImageSource } from "expo-image";

type Props = {
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX =  useSharedValue(0);
  const translateY =  useSharedValue(0);
  const drag = Gesture.Pan().onChange(event=> {
    translateY.value+=event.changeY
    translateX.value+=event.changeX;
  })
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });
  const transformStyle = useAnimatedStyle(()=>{
    return {transform: [
       {translateY:translateY.value,},{translateX:translateX.value,}
    ]      
  }})
  return (
    <GestureDetector gesture = {drag}>
    <Animated.View style={[transformStyle,{ top: -350 }]}>
       <GestureDetector gesture={doubleTap}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </GestureDetector>
    </Animated.View></GestureDetector>
  );
}

