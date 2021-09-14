import React from 'react'
import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import FoodItem from './FoodItem'
import Swipeable from 'react-native-swipeable';

const nocks = [
    {
        name:'Chicken, Cashew and Avocado Salad',
        restaurant: 'The Plan house',
        price:15,
        image: require('../../assets/images/salad.jpg'),
        quantity:1,
        id:1
    },
    
    {
        name:'Cheese, Vegan',
        restaurant: 'The Plan house',
        price:15,
        image: require('../../assets/images/cheese.jpg'),
        quantity:1,
        id:2
    },   
]

const ListFood = () => {

    const [data, setData] = React.useState(nocks)

    const onDelete = (id) => {
        if(id){
            setData((e) => e.filter((x) => x.id != id))
        }
    }

    const renderFood = (item) => {
        return(
            <Swipeable
                rightButtons={[
                    <View style={styles.button}>
                        <Pressable onPress={() => onDelete(item.id)}>
                            <Image source={require('../../assets/images/garbage.png')} />
                        </Pressable>
                    </View>,
                ]}
            >
                <FoodItem data={item} />
            </Swipeable>
        )  
    }

    return (
        <View style={styles.container}>
            <View style={styles.listfood}>
                {data.map(renderFood)}
                <FoodItem isDelivery fee={2.5} />
            </View>
        </View>
    )
}

export default ListFood

const styles = StyleSheet.create({
    container:{
    },
    listfood:{
        //flex:1
    },
    button:{
        justifyContent: 'center',
        marginTop:30
    },
})
