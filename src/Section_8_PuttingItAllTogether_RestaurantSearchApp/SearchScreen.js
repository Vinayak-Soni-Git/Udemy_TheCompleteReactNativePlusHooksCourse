import { View, StyleSheet, TextInput, Text, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import UseResults from './hooks/UseResults'
import ResultsList from './Components/ResultsList'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.searchBarContainer}>
            <Feather style={styles.iconStyle} name={'search'} size={28} color={'black'}/>
            <TextInput
                autoCapitalize={'none'}
                autoCorrect={false}
                value={term}
                style={styles.inputStyle}
                placeholder={'Search'}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}/>
        </View>
    )
}

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = UseResults()
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }
    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text style={{ color: 'red' }}>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$')} title={'Cost Effective'}/>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$')} title={'Bit Pricier'}/>
                <ResultsList navigation={navigation} results={filterResultsByPrice('$$$')} title={'Big Spender'}/>
            </ScrollView>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    searchBarContainer: {
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 10,
    }
})
