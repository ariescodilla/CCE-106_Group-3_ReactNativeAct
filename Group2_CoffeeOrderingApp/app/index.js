import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

export default function OrderScreen() {
  const [coffeeCount, setCoffeeCount] = useState(1);

  const handleAdd = () => {
    setCoffeeCount((prev) => prev + 1);
  };

  const handleRemove = () => {
    if (coffeeCount > 1) {
      setCoffeeCount((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cups of Coffee: {coffeeCount}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>+ Add Cup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleRemove}>
          <Text style={styles.buttonText}>- Remove Cup</Text>
        </TouchableOpacity>
      </View>

      <Link 
        href={{
          pathname: '/receipt',
          params: { coffeeCount },
        }} 
        asChild
      >
        <TouchableOpacity style={styles.receiptButton}>
          <Text style={styles.buttonText}>View Receipt</Text>
        </TouchableOpacity>
      </Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#166a2e',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  receiptButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});