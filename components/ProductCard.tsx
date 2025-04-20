import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';


interface Props {
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: any;
}

const ProductCard = ({ name, brand, price, oldPrice, rating, image }: Props) => {
  const [isFavoris, setIsFavoris] = useState<boolean>(false)

  return (
    <Animated.View entering={FadeInDown.delay(200).duration(600)} style={styles.card}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
          resizeMode='contain'
        />

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              setIsFavoris((value) => !value)
            }}
            style={styles.favoriteIcon}>
            <Ionicons name={isFavoris ? "heart" : "heart-outline"} size={18} color={colors.white} />
          </TouchableOpacity>
      </View>


      <TouchableOpacity activeOpacity={1} onPress={() => router.push("/external/detailProduct")} style={styles.productInfo}>
        <View style={styles.rating}>
          <Text style={styles.brand}>{brand}</Text>
          <Ionicons name="star" size={14} color={colors.goldStar} />
          <Text style={styles.ratingText}>{rating}</Text>
          <Text style={styles.text}>(139)</Text>
        </View>
        <Text style={styles.description}>{name}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>${price}</Text>
          {oldPrice && <Text style={styles.originalPrice}>${oldPrice}</Text>}
        </View>
      </TouchableOpacity>

    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 190,
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },

  productInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },

  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: colors.productItemBackground,
    overflow: "hidden"
  },
  favoriteIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: colors.favorisBackground,
    borderRadius: 16,
    height: 32,
    width: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  brand: {
    fontSize: 14,
    fontFamily: "RobotoM",
    color: colors.textColor,
    marginRight: 6
  },
  description: {
    fontSize: 16,
    color: colors.primary,
    fontFamily: "RobotoM",
    letterSpacing: .2
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 1
  },
  text: {
    fontSize: 14,
    color: colors.textColor,
    fontFamily: "RobotoM"
  },
  ratingText: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "RobotoM"
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  discountedPrice: {
    fontSize: 16,
    color: colors.notification,
    fontFamily: "RobotoM"
  },
  originalPrice: {
    fontSize: 14,
    color: colors.textColor,
    fontFamily: "RobotoR",
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductCard;
