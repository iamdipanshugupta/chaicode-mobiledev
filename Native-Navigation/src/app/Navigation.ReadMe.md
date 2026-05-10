<!-- import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

function UnsafeScreen(){
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{ color: "#000000", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#7c1010", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </View>
  )
}


function SafeScreen(){
  return(
    <SafeAreaView edges={{}} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{ color: "#400c0c", fontSize: 18, padding: 16 }}>
        Header (safely  below notch!)
      </Text>
      <Text style={{ color: "#7c1010", padding: 16 }}>
        This content is safe from the status bar in dark mode.
      </Text>
    </SafeAreaView>
  )
}
const index = () => {
  return (
   <>
   {/* <UnsafeScreen /> */}
   <SafeScreen />
  </>
  )
}

export default index

const styles = StyleSheet.create({}) -->


<!-- 
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{ 
        flex: 1, paddingTop: insets.top + 25, paddingBottom: insets.bottom ,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({}); -->








import {  StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar"
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar  />
        <View style={styles.card}>
          <Text style={styles.title}>HomeScreen</Text>
          <Text style={styles.subtitle}>Hello</Text>
        </View>
    </SafeAreaView>
  );
};
<!-- 
export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 16,
    margin: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    margin: 4,
    padding: 2,
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "800",
    color: "rgb(92, 8, 79)",
  },
  subtitle: {
    padding: 24,
    color: "black",
  },
}); -->


<!-- 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const HomeScreen = () => {
  const isActive = false;

  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton :null
  )
  return (
    <View style={styles.container}>
      <View style={[styles.button , isActive && styles.activeButton]}>
        <Text style={styles.buttonText}>Composed Style</Text>
      </View>
      
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#ccc',   // Default grey
  },
  activeButton: {
    backgroundColor: '#6C63FF', // Override to purple when active
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); -->




<!-- 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const stylesA = StyleSheet.create({
  text:{
    color:"red",
    fontSize:36
  }
})
const stylesB = StyleSheet.create({
  text:{
    fontWeight:"700"
  }
})
const flat = StyleSheet.flatten([stylesA.text , stylesB.text])

const HomeScreen = () => {
  return (
    <View>
      <Text style={flat}>Flaattened Style</Text>
    </View>
  )
}

export default HomeScreen
 -->



import { StyleSheet, Text, View  , useWindowDimensions} from 'react-native'
import React from 'react'



<!-- 
const Homescreen = () => {


  const {height, width} = useWindowDimensions()


  console.log({
    height,
    width
  })
  return (
    <View>
      <Text style={styles.text}>Homescreen</Text>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  text:{
    color:"red",
    fontSize:36
  }
}) -->