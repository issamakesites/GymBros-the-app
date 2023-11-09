import React, { useState } from "react";
import { Link } from "expo-router";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    ImageBackground,
} from "react-native";
import { styles } from './style';
const BottomMenu = () => {
    return (
        <View style={styles.menu}>
            <View style={styles.menuItem}>
                <Link style={styles.menuLinkActive} href="/screens/secondScreen">
                  <Image source={require("../../assets/icons/home.png")}
                  style={styles.menuIcon} />
                </Link>
            </View>
            <View style={styles.menuItem}>
                <Link style={styles.menuLink} href="/screens/secondScreen">
                  <Image source={require("../../assets/icons/search.png")}
                  style={styles.menuIcon} />
                </Link>
            </View>
            <View style={styles.menuItem}>
                <Link style={styles.menuLink} href="/screens/secondScreen">
                  <Image source={require("../../assets/icons/calendar.png")}
                  style={styles.menuIcon} />
                </Link>
            </View>
            <View style={styles.menuItem}>
                <Link style={styles.menuLink} href="/screens/secondScreen">
                  <Image source={require("../../assets/icons/progress.png")}
                  style={styles.menuIcon} />
                </Link>
            </View>
        </View>
      );
}

export default BottomMenu;