import { useEffect } from "react";
import { Button, Dimensions, GestureResponderEvent, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const {width: WIDTH, height: HEIGHT} = Dimensions.get("window")

export default function Explore() {
  const translate = useSharedValue(0)

 const handlePress = ()=>{
    translate.value += 5
  }

  useEffect(()=>{
    console.log('translate.value :>> ', translate.value);
  },[])

  const animatedStyles = useAnimatedStyle(()=>{
    console.log('translate.value :>> ', translate.value);
    return({
      top: withSpring(`${translate.value}%`),
      left: withSpring(`${translate.value}%`)
    })
  })

  function handleReload(event: GestureResponderEvent): void {
    translate.value = 0
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        gap: 10
      }}
    >
      <Animated.View
      style={[{
        height: 100, 
        backgroundColor: 'gold',
        borderRadius: 20,
        aspectRatio: 1/1,
        position: "absolute",
        top: 0,
        left: 0
      },animatedStyles]}
    />
    <Button title="Cliquez" onPress={handlePress}/>
    <Button title="Reload" onPress={handleReload}/>
      <Text>Explore</Text>
    </View>
  );
}