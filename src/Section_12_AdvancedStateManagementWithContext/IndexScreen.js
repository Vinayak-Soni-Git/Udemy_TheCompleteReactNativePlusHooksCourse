import React, { useContext } from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)

    return (
        <View>
            <Button title={'Add Post'} onPress={addBlogPost}/>
            <FlatList data={state}
                      keyExtractor={(blogPosts) => blogPosts.title}
                      renderItem={({ item }) => {
                          return <View>
                              <Text>{item.title}</Text>
                              <Feather name={'trash'} size={30} color={'black'} />
                          </View>

                      }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    row:{

    }
})

export default IndexScreen
