import { StyleSheet, View } from 'react-native'
import RootNavigator from './src/navigators/RootNavigator'
import { Provider } from './src/context/BlogContext'

export default function App () {
    return (
        <Provider>
            <View style={styles.container}>
                <RootNavigator/>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
