import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetail from './ResultsDetail'
import { ApplicationRoutes } from '../../constants/ApplicationRoutes'

const ResultsList = ({ results, title, navigation }) => {
    if(!results.length){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={navigation.navigate(ApplicationRoutes.ResultsShowScreen, {id:item.id})} >
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )

                }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    }
})

export default ResultsList
