import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '@/constants/colors';
import Animated, { FadeInUp } from 'react-native-reanimated';

export default function Banner() {
  return (
    <Animated.View entering={FadeInUp.duration(700)} style={styles.container}>
      <View style={styles.textSection}>
        <Text style={styles.subtitle}>NEW COLLECTIONS</Text>
        <View style={styles.discount}>
          <Text style={styles.percent}>20</Text>
          <View style={styles.unity}>
            <Text style={styles.unityText1}>%</Text>
            <Text style={styles.unityText2}>OFF</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('@/assets/images/banner.png')} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bannerBackground,
    paddingVertical: 18,
    paddingLeft: 33,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
    position: "relative",
    overflow: "hidden",
    height: 164
  },
  textSection: {
    flex: 1,
    zIndex: 5
  },
  subtitle: {
    color: colors.primary,
    fontSize: 19,
    fontFamily: "RobotoCS",
    letterSpacing: -1
  },
  discount: {
    fontFamily: "RobotoR",
    color: colors.primary,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginTop: 6
  },
  percent: {
    fontSize: 52,
    fontFamily: "RobotoCS",
    letterSpacing: -3,
    lineHeight: 52
  },
  unity: {
    display: "flex",
    flexDirection: "column"
  },
  unityText1: {
    fontFamily: "RobotoCS",
    fontSize: 29,
    lineHeight: 29
  },
  unityText2: {
    fontFamily: "RobotoCS",
    fontSize: 14,
    lineHeight: 14
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.white,
    fontFamily: "RobotoR",
    fontSize: 12
  },
  image: {
    width: "80%",
    height: 150,
    resizeMode: 'cover',
    position: "absolute",
    bottom: 0,
    right: "-10%",
    textAlign: "center",
    zIndex: 0
  },
});
