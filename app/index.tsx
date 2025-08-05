import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Quote from "./quote";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.subCont}>
        <Text style={styles.header}>Want to Generate Quote?</Text>
        <Text style={styles.subHeader}>Just press below</Text>
        <Ionicons name="arrow-down-circle" size={32} color={styles.iconColor.color} />
        <TouchableOpacity
          accessibilityLabel="button to Quote gen"
          onPress={() => router.push('/quote')}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Generate Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  subCont: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d0cfcfd1',
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    gap: 10,
    // Add shadow for depth
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8, // Android shadow
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 18,
    color: '#687273',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 1,
  },
  iconColor: {
    color: '#6312ef', 
  },
  button: {
    backgroundColor: '#e74c3c',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 10,
    // Add shadow to button
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});
