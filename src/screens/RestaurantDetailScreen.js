import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  return result == null ? (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        keyExtractor={(p) => p}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  ) : (
    <Text>No data. </Text>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});
export default RestaurantDetailScreen;
