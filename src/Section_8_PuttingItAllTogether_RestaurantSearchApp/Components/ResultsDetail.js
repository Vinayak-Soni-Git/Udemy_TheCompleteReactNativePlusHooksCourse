import { View, StyleSheet, Text, Image } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.imageStyle} source={{uri:result.image_url}} />
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:5,
    },
    imageStyle:{
        width:250,
        height:120,
        borderRadius:4,
    },
    name:{
        fontWeight:'bold',
        fontSize:16,
    }
})

export default ResultsDetail

