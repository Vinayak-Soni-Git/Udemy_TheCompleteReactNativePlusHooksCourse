import { View, StyleSheet, Text, FlatList, Image } from 'react-native'
import Yelp from './api/Yelp'
import { useState, useEffect } from 'react'

const ResultsShowScreen = ({navigation, route}) => {
    const {id} = route.params;
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await Yelp.get(`/${id}`)
        setResult(response.data)
    }
    useEffect(()=>{
        getResult(id)
    }, [])
    if(!result){
        return null
    }
    return(
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={(photo)=>photo}
                renderItem={({item})=>{
                    return <Image style={styles.image} source={{uri:item}} />
                }}
            />
        </View>
    )
}

export default ResultsShowScreen;

const styles = StyleSheet.create({
    image:{
        width:300,
        height:200,
    }
})
