import { Image, TextInput, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <Image
          source={require('./assets/University_of_Mindanao_Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>UM Login Page</Text>
      </View>

      <View style={styles.formArea}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#383838"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#383838"
          secureTextEntry
        />

        <TouchableOpacity 
          style={styles.loginButton}
          activeOpacity={0.7}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <Text style={styles.registerText}>
            Don't have an account yet? Click here.
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8484',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },

  logo: {
    width: 150,
    height: 150,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    color: '#333',
  },

  formArea: {
    flex: 2,
    width: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },

  input: {
    width: '100%',
    borderWidth: 2,
    color: '#000',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },

  loginButton: {
    width: '100%',
    backgroundColor: '#520606',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 5,
  },

  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  registerText: {
    marginTop: 30,
    color: '#520606',
    fontWeight: '600',
    textAlign: 'center',
  },
});