import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_100Thin,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_300Light,
  Montserrat_900Black,
} from "@expo-google-fonts/montserrat";

const HomeScreen = () => {

  const [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_300Light,
    Montserrat_900Black,
  });
  if (!fontsLoaded) {
    return null; // Return a loading indicator or fallback UI until the fonts are loaded.
  }
  return (
    <View style={styles.container}>
      <View style={styles.bgWrapper}>
        <Image
          source={require("../assets/images/BgHoodie.jpg")}
          style={styles.imageContainer}
        ></Image>
      </View>
      <View style={styles.overlay} />
      <View style={styles.headingWrapper}>
        <Text style={styles.subheading}> welcome to </Text>
        <Text style={styles.heading}> GYM BROS </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Handle button press here
        }}
      >
        <Link href="/screens/secondScreen">
          <Image
            style={styles.buttonIcon}
            source={{
              uri: "https://em-content.zobj.net/source/apple/354/flexed-biceps_light-skin-tone_1f4aa-1f3fb_1f3fb.png",
            }}
          ></Image>
          <Text style={styles.buttonText}> Get Started Now </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  bgWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Align the image to the left within the container
  },
  imageContainer: {
    flex: 1,
    resizeMode: "contain", // Ensure the image covers the entire screen
    alignItems: "flex-end",
  },
  headingWrapper: {
    position: "absolute", // Position the text absolutely
    top: "40%", // Adjust top and left to position the text as needed
    left: 0,
    right: 0,
    backgroundColor: "transparent", // Make the background transparent
  },
  subheading: {
    //position: 'absolute', // Position the text absolutely
    bottom: 0, // Adjust top and left to position the text as needed
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 22,
    color: "#fff",
    backgroundColor: "transparent", // Make the background transparent
    fontFamily: "Montserrat_400Regular",
    textShadowColor: "rgba(0, 0, 0, .2)", // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset (x, y)
    textShadowRadius: 5,
  },
  heading: {
    //position: 'absolute', // Position the text absolutely
    bottom: 0, // Adjust top and left to position the text as needed
    left: 0,
    left: 0,
    textAlign: "center",
    fontSize: 60,
    color: "#fff",
    backgroundColor: "transparent", // Make the background transparent
    fontFamily: "Montserrat_600SemiBold",
    textShadowColor: "rgba(0, 0, 0, 0.2)", // Shadow color
    textShadowOffset: { width: 2, height: 2 }, // Shadow offset (x, y)
    textShadowRadius: 5,
  },
  overlay: {
    position: "absolute", // Position the overlay absolutely
    bottom: 0,
    left: 0,
    width: "100%", // Ensure the overlay takes the full width
    height: "100%", // Ensure the overlay takes the full height
    backgroundColor: "transparent", // Overlay background color with opacity
  },
  button: {
    width: "90%", // Make the button span the full width
    backgroundColor: "#fff", // Example background color
    paddingVertical: 16, // Adjust as needed for button height
    borderRadius: 8, // Optional: Apply border radius for rounded corners
    position: "absolute",
    bottom: 20,
    left: "5%",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000", // Text color
    textAlign: "center", // Center the text horizontally within the button
    fontSize: 18, // Adjust as needed for font size
    fontFamily: "Montserrat_600SemiBold",
  },
  buttonIcon: {
    width: 24, // Adjust the width of the icon as needed
    height: 24, // Adjust the height of the icon as needed
    resizeMode: "contain", // Adjust the resizeMode as needed
    marginRight: 8, // Adjust the spacing between icon and text
  },
});

export default HomeScreen;
