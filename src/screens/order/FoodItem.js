import React from 'react'
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native'
const w = Dimensions.get('screen').width;

const FoodItem = ({data,isDelivery,fee}) => {

    if(isDelivery){
        return(
            <View style={styles.container}>
                <View style={styles.imgCon}>
                    <Image source={require('../../assets/images/car.png')} style={styles.imageCon} />
                </View>
                <View style={styles.body}>
                    <Text style={styles.name}>Delivery Fee</Text>
                </View>
                <View style={styles.end}>
                    <Text style={styles.total}>
                        ${Number(fee).toFixed(2)}
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Image source={data.image} style={styles.image} />
            <View style={styles.body}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.restaurant}>{data.restaurant}</Text>
            </View>
            <View style={styles.end}>
                <Text style={styles.total}>
                    ${Number(data.price).toFixed(2)}x{data.quantity}
                </Text>
            </View>
        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({
    image:{
        width:w/4,
        height:w/4.8,
        borderRadius:10
    },
    name:{
        fontFamily: 'CeraPro-Bold',
    },
    container: {
        flexDirection: 'row',
        paddingVertical:10,
        paddingHorizontal:20
    },
    restaurant:{
        fontFamily: 'CeraPro-Medium',
        fontSize:13,
        color:'#222',
        marginTop: 10,
    },
    body:{
        flex:1,
        justifyContent: 'center',
        paddingLeft:10
    },
    total:{
        fontFamily: 'CeraPro-Medium',
        fontSize:13,
        color:'#222'
    },
    end:{
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight:20,
    },
    imgCon:{
        backgroundColor: '#F4E5C1',
        width:w/4,
        padding:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems: 'center',
    },
    imageCon:{
        
    }
})
