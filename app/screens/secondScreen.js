import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import FirstForm from "../components/firstForm/firstForm";

const SecondScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    passWord: "",
    weight: "",
    height: "",
  });
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    // Handle button press here
    setStep(step + 1); // Increment the step
  };
  const handlePrevious = () => {
    // Handle button press here
    setStep(step - 1); // Decrement the step
  };

  StatusBar.setBackgroundColor("#fff");
  StatusBar.setBarStyle("dark-content");

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/Logo.png")}
            style={styles.logoTop}
          />
        </View>
        <FirstForm />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    width: windowWidth,
    height: "100%", // Fill the entire height of the screen
    resizeMode: "cover", // Crop the image to fit the container
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoTop: {
    width: 60,
    resizeMode: "contain",
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: "left",
    padding: 16,
  },
});

export default SecondScreen;
