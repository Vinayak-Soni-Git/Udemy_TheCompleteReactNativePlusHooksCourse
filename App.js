import { StyleSheet, View } from 'react-native';
import RootNavigator from "./src/navigators/RootNavigator";

export default function App() {
  return (
    <View style={styles.container}>
     <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
