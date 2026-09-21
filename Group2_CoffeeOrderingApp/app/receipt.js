import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function ReceiptScreen() {
  const { coffeeCount } = useLocalSearchParams();
  
  const count = parseInt(coffeeCount, 10) || 1;
  const totalBill = count * 150;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Order Summary</Text>
      <Text style={styles.text}>Cups Ordered: {count}</Text>
      <Text style={styles.totalText}>Total Bill: P{totalBill}</Text>

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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#166a2e',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});