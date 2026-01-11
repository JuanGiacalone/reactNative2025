import LittleLemonHeader from "../components/little-lemon-header";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonFooter from "../components/little-lemon-footer";
import WelcomeScreen from "../components/welcome-screen";
import MenuItems from "../components/menu-items";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        <WelcomeScreen />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footerContainer: {
    backgroundColor: '#495E57',
  },
});