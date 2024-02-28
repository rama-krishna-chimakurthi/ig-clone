import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image style={styles.logo} source={require('../assets/insta_logo.png')}/>
        </TouchableOpacity>
        <View style={styles.iconsContainer}>
            <TouchableOpacity>
                <Image
                    source={{
                        uri :'https://img.icons8.com/ios/50/like--v1.png'
                    }}
                    style={styles.icon}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <Image style={styles.icon} source={require('../assets/send.png')}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container :{
        paddingTop:35,
        paddingLeft:10,
        paddingRight:20,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection: 'row',
    },
    iconsContainer:{
        flexDirection:'row',
        gap:15
    },  
    logo :{
        width:150,
        height:50,
        resizeMode: 'contain'
    },
    icon:{
        height:30, 
        width:30, 
        resizeMode:'contain'
    },
    unreadBadge:{
        backgroundColor:'#FF3250',
        position:'absolute',
        left:18,
        top:-10,
        borderRadius:50,
        padding:2,
        zIndex:5
    },
    unreadBadgeText:{
        color:'white',
        fontWeight:'600'
    }
})

export default Header