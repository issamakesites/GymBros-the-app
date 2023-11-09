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
import BottomMenu from "../components/bottomMenu/bottomMenu";
import TopMenu from "../components/topMenu/topMenu";
import { ScrollView } from "react-native-gesture-handler";

const UserDashboard = () => {
  const statusBarColor = '#f1f5f5';
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
        <StatusBar backgroundColor={statusBarColor} barStyle="light-content" />
        <View style={styles.logoWrapper}>
                <Image source={require("../assets/LogoFull.png")}
                  style={styles.logo} />
        </View>
          <View style={styles.content}>
            <ScrollView style={styles.scrollContent}>
              <View  style={styles.topMenuContainer}>
                <TopMenu></TopMenu>
              </View>
              <View style={styles.progsView}>
                <ScrollView  style={styles.progsScroll}  horizontal={true}>
                <View style={styles.progImgWrapper}>
                    <Image source={require("../assets/images/prog1.png")}
                    style={styles.progImg} />
                </View>
                <View style={styles.progImgWrapper}>
                    <Image source={require("../assets/images/prog2.png")}
                    style={styles.progImg} />
                </View>
                <View style={styles.progImgWrapper}>
                    <Image source={require("../assets/images/prog3.png")}
                    style={styles.progImg} />
                </View>
                <View style={styles.progImgWrapper}>
                    <Image source={require("../assets/images/prog4.png")}
                    style={styles.progImg} />
                </View>
                <View style={styles.progImgWrapper}>
                    <Image source={require("../assets/images/prog5.png")}
                    style={styles.progImg} />
                </View>
                <View style={styles.progImgWrapper}>
                    <Image source={require("../assets/images/prog6.png")}
                    style={styles.progImg} />
                </View>
                  
                </ScrollView>
              </View>
            </ScrollView>
          </View>
        <View  style={styles.BottomMenu}>
            <BottomMenu></BottomMenu>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progsView:{
    flex:1
  },
  progsScroll:{
    flex:1,
    flexDirection:'row'
  },
  progImg:{
    width:100,
    height:300,
    resizeMode:'contain',
    //flex:1
  },
  progImgWrapper:{
    marginRight:16,
    flex:1
  },
  scrollContent:{
    flex:1,
    marginTop: 10
  },
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:"#f1f5f5"
  },
  BottomMenu:{
    flex:.1,
  },
  content: {
    flex:1,
  },
  topMenuContainer: {
    flex:.1,
  },
  logoWrapper: {
    flex: .07,
  },
  logo: {
    width: '100%',
    height: 20,
    resizeMode: 'contain',
    marginTop:18
  },


});

export default UserDashboard;
