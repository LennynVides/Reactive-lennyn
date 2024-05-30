// components/ColorCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ColorCard({ name, hex, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.hex}>{hex}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
    height: 150,
  },
  image: {
    width: '100%',
    height: 80,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  hex: {
    fontSize: 14,
    color: '#666',
  },
});
