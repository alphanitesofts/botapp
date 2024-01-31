import React, { useEffect } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import SplashIcon from "../../assets/images/splash.jpeg"
import { useIsFocused } from '@react-navigation/native';

const Splash = ({ navigation }) => {

    const isFocused = useIsFocused()

    useEffect(()=>{
        if(isFocused){
            setTimeout(()=>{
                navigation.navigate("Router")
            },3000)
        }
    },[isFocused])

    return (
        <View style={styles.container}>
            <Image
                source={SplashIcon}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',

                }}
            />
        </View>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})