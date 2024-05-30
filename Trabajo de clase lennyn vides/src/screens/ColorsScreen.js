import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';  
import ColorCard from './ColorCard';

const colorsData = [
  {
    title: 'Colores Aqueous',
    data: [
      { name: 'Aqua Blue', hex: '#00FFFF', image: require('../img/aqua_blue.png') },
      { name: 'Sea Green', hex: '#2E8B57', image: require('../img/sea_green.png') },
      // ... other colors
    ],
  },
  {
    title: 'Natural Colors',
    data: [
      { name: 'Forest Green', hex: '#228B22', image: require('../img/forest_green.png') },
      { name: 'Ocean Blue', hex: '#1E90FF', image: require('../img/ocean_blue.jpg') },
      // ... other colors
    ],
  },
  {
    title: 'Other Colors',
    data: [
      { name: 'Crimson Red', hex: '#DC143C', image: require('../img/crimson_red.png') },
      { name: 'Snow White', hex: '#FFFAFA', image: require('../img/snow_white.png') },
      // ... other colors
    ],
  },
];

export default function ColorsScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedColors = selectedCategory
    ? colorsData.find(category => category.title === selectedCategory)?.data || []
    : [];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una categoría" value={null} />
        {colorsData.map((category) => (
          <Picker.Item key={category.title} label={category.title} value={category.title} />
        ))}
      </Picker>
      <View style={styles.content}>
        <FlatList
          data={selectedColors}
          keyExtractor={(color, index) => color.name + index}
          renderItem={({ item: color }) => <ColorCard {...color} />}
          numColumns={3}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    marginTop: 150,
  },
  list: {
    paddingBottom: 20,
  },
});
