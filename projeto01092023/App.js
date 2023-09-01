import { Text, SafeAreaView, StyleSheet, TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import {AssetExample,AssetExampleB} from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        ARS LIBRI
      </Text>
      <TextInput style={styles.input}></TextInput>
      <Card>
        <AssetExample />
        <AssetExampleB />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151515',
  },
  paragraph: {
    margin: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#DBC96C',
  },
  input:{
    height: 40,
    width: '60%',
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: 'white',
    cursor: 'pointer',
    outline: 'none',
    paddingHorizontal: 12,
  }
});
