import {Text, TextInput, View, StyleSheet} from "react-native";
import {useState} from "react";

const TextScreen = ()=>{
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View>
            <Text>Enter Name: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={name}
                onChangeText={(newValue)=>setName(newValue)}
            />
            <Text>My name is {name}</Text>

            <Text>Enter Password: </Text>
            <TextInput
                style={styles.input}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={password}
                onChangeText={(newValue)=>setPassword(newValue)}
            />
            {password?.length < 4 ? <Text>Password must be 4 characters</Text>:null}
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        margin:15,
        borderColor:'black',
        borderWidth:1,
    }
})

export default TextScreen
