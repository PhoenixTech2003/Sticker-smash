import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/imageViewer';
import Button from './components/button';
const placeHolderImage = require("./assets/images/background-image.png")

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>

      <ImageViewer placeHolderImageSource={placeHolderImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label={"Choose a Photo"}/>
        <Button label={"Use this Photo"}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop:58,
  },
  image:{
    width: 320,
    height:440,
    borderRadius:18,
  },
  footerContainer:{
    flex:1/3,
    alignItems: 'center'
  }
});
