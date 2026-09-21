import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: '#166a2e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Eners Bunnybutter Coffee' }} />
      <Stack.Screen name="receipt" options={{ title: 'Order Receipt' }} />
    </Stack>
  );
}