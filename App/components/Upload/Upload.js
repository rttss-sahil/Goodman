import React, { Component } from 'react'
import { View, Text } from 'react-native'

export class Upload extends Component {
    render() {
        return (
            <View style={{
                height: 90,
                paddingTop: 50,
                backgroundColor: "white",
                borderColor: "lightgrey",

            }}><Text>
                    Upload
            </Text>
            </View>
        )
    }
}

export default Upload
