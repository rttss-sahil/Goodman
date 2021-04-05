import React, { Component } from 'react';
import { Image, Text, View, FlatList } from 'react-native';

export class MainFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedData: [0, 1, 2, 3, 4],
            refresh: false
        }
    }
    onRefresh = () => {
        this.setState({
            refresh: true
        })
        const last = this.state.feedData[4];
        let feedData = [];
        for (let i = last; i <= last + 4; i++) {
            feedData.push(i + 1)
        }
        this.setState({
            feedData,
            refresh: false
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "rgba(70, 48, 235, 0.1)" }}>
                <View style={{ height: 75, paddingTop: 40, backgroundColor: "white", borderColor: "lightgrey", borderBottomWidth: 0.5 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: "#4630EB" }}>Goodman</Text>
                </View>
                <FlatList
                    data={this.state.feedData}
                    refreshing={this.state.refresh}
                    onRefresh={this.onRefresh}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ flex: 1 }}
                    renderItem={(item, index) => (
                        <View key={index} style={{ margin: 10, backgroundColor: "#fff", flex: 1, borderRadius: 10 }}>
                            <View>
                                <Text>Time Ago</Text>
                                <Text>@Rusty</Text>
                            </View>
                            <View>
                                <Image source={{ uri: 'https://source.unsplash.com/random/128x' + Math.floor(Math.random() * 800) + 500 }} style={{ resizeMode: "cover", width: "100%", height: 275 }} />
                            </View>
                            <View>
                                <Text>Caption Text</Text>
                                <Text>Comments</Text>
                            </View>
                        </View >
                    )
                    }
                />
            </View>
        )
    }
}

export default MainFeed;
