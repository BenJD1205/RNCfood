import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

const AddressList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.address}>172 Hong Bang</Text>
                <Text style={styles.text}>172 Hong Bang</Text>
            </View>
            <View style={styles.row}>
                <View style={styles.timeContainer}>
                    <View style={styles.iconTime}>
                        <Image 
                            style={styles.image} 
                            source={require('../../assets/images/clock.png')}
                        />
                    </View>
                    <Text style={styles.timeText}>30 mins</Text>
                </View>
                <Text style={styles.text}>Choose Time</Text>
            </View>
        </View>
    )
}

export default AddressList

const styles = StyleSheet.create({
    address: {
        fontFamily: 'CeraPro-Bold',
        textAlign:'center',
        flex: 1
    },
    timeContainer:{
        flexDirection: 'row',
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    timeText:{
        fontFamily: 'CeraPro-Bold'
    },
    iconTime: { 
        padding:8,
        backgroundColor:"rgba(0,0,0,0.14)",
        borderRadius: 7,
    },
    text:{
        fontFamily: 'CeraPro-Medium',
        textAlign:'center',
        flex:1
    },  
    container:{
        backgroundColor: '#F7CB6b',
        paddingVertical:10,
    },
    row:{
        flexDirection: 'row',
        marginVertical:10,
        alignItems: 'center',
    }
})
