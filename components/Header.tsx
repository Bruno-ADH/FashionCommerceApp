import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import Logo from '@/assets/icons/logo.svg';
import Cart from '@/assets/icons/cart.svg';
import colors from '@/constants/colors';

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo />

      <TouchableOpacity style={styles.cartContainer}>
        <Cart/>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  cartContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -8,
    backgroundColor: colors.notification,
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontFamily: "RobotoB"
  },
});
