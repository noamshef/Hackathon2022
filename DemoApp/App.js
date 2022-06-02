import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, Button, Alert,
   KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import { TextInput } from 'react-native-web';
import React,{Component} from 'react';


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={()=>console.log("bluetooth button tapped")}>
          <Image 
          source={{
            width: 300,
            height: 200,
            uri:"https://img.favpng.com/3/10/22/computer-icons-symbol-bluetooth-png-favpng-9qXRbFELntZfwa2ABgY1fh696.jpg",
          }}
          />
        </TouchableOpacity>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
