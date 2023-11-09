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
import { styles } from './styles';
const TopMenu = () => {
    return (
          <>
            <View style={styles.topMenuRow}>
                <View style={styles.pdpWrapper}>
                    <Image source={require("../../assets/images/issam.jpeg")}
                    style={styles.pdp} />
                </View>
                <View style={styles.topMenuLeft}>
                    <Text style={styles.greetings}>
                     Hi Issam  
                    </Text>
                    <Image source={require("../../assets/icons/waving.png")}
                    style={styles.greetingsImage} />
                </View>
            </View>
          </>
      );
}

export default TopMenu;