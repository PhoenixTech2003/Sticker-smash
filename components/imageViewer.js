import { StyleSheet, Image } from "react-native";

export default function ImageViewer({placeHolderImageSource}){
    return(
        <Image style={styles.image} source={placeHolderImageSource}/>
    )
}

const styles = StyleSheet.create({
    image:{
        width:320,
        height:440,
        borderRadius:18,
    }
})