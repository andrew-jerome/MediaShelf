import { StyleSheet, Text, View } from 'react-native';

export default function AddMedia() {
  return (
    <View style={styles.container}>
      <Text>Add Media Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});