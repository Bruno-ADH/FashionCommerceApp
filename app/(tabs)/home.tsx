import { View, Text, FlatList, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useHomeStore } from '@/stores/useHomeStore';
import CategoryItem from '@/components/CategoryItem';
import ProductCard from '@/components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '@/constants/colors';
import banner from '@/assets/images/banner.png';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import { Link } from 'expo-router';

export default function Index() {
  const categories = useHomeStore.use.categories();
  const curatedProducts = useHomeStore.use.curatedProducts();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />
      <Banner />
      <ScrollView style={styles.container}>

        {/*Categories */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Shop By Category</Text>
          <Link href="/external/categorie">
          <Text style={styles.seeAll}>SeeAll</Text>
          </Link>
        </View>
        <FlatList
          data={categories}
          horizontal
          contentContainerStyle={styles.gridGap}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CategoryItem label={item.label} icon={item.icon} />
          )}
        />

        {/* Products*/}
        <View style={[styles.header, {marginTop: 20}]}>
          <Text style={styles.headerTitle}>Curated For You</Text>
          <Link href="/external/categorie">
          <Text style={styles.seeAll}>SeeAll</Text>
          </Link>
        </View>
        <FlatList
          data={curatedProducts}
          horizontal
          contentContainerStyle={styles.gridGap}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              brand={item.brand}
              price={item.price}
              oldPrice={item.oldPrice}
              rating={item.rating}
              image={item.image}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeAreaView: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.white
  },
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 14
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 15,
    fontFamily: 'RobotoM',
  },
  seeAll: {
    fontSize: 14,
    fontFamily: 'RobotoR',
    color: colors.textColor
  },
  gridGap: {
    gap: 17,
    paddingHorizontal: 20,
  }
});
