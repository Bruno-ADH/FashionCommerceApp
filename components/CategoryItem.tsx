import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '@/constants/colors';
import { router } from 'expo-router';
import Animated, { ZoomIn } from 'react-native-reanimated';

interface Props {
  label: string;
  icon: any;
}

const CategoryItem = ({ label, icon }: Props) => {
  return (
    <Animated.View entering={ZoomIn.duration(500)}>
      <TouchableOpacity style={styles.container} onPress={() => router.push("/external/categorie")}>
        <View style={styles.circle}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>

  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    backgroundColor: colors.categoryItemBackground,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    overflow: "hidden"
  },
  icon: {
    width: 72,
    height: 82,
    resizeMode: 'cover',
    transform: [{ translateY: "15%" }]
  },
  label: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "RobotoR"
  },
});

export default CategoryItem;