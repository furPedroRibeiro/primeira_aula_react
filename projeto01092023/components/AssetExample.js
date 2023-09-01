import { Text, View, StyleSheet, Image } from 'react-native';

export {AssetExample, AssetExampleB}

function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
                Lero lero lero lero lero lero lero lero lero lero lero
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}
function AssetExampleB() {
  return (
    <View style={styles.containerB}>
      <Text style={styles.paragraphB}>
                Lero lero lero lero lero lero lero lero lero lero lero

      </Text>
      <Image style={styles.logoB} source={require('../assets/realmadrid.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  containerB: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderWidth: '2px',
    borderColor: 'green',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraphB: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'purple',
    borderWidth: '2px',
    borderColor: 'green',
  },
  logo: {
    height: 128,
    width: 128,
  },
  logoB: {
    height: 100,
    width: 80,
    borderWidth: '2px',
    borderColor: 'green',
  }
});
