import React, { Component } from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import f from '../../utils/firebase.config'

export class MainFeed extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedData: [],
            refresh: false,
            loading: false
        }
    }

    componentDidMount() {
        this.loadFeed()
    }

    loadFeed = () => {
        this.setState({ refresh: true, loading: true })
        f.database.ref('photos').orderByChild('posted').on("value", snapshot => {
            let data = [];
            snapshot.val() !== null && data.push(snapshot.val());
            for (let photo of data) {
                for (let i in photo) {
                    this.setState({ feedData: [...this.state.feedData, photo[i]] })
                }
            }
            this.setState({ loading: false, refresh: false })
        })
    }

    onRefresh = () => {
        this.setState({
            refresh: true,
            loading: true
        })
        this.setState({
            refresh: false,
            loading: false
        })
    }
    render() {
        console.log(this.state.feedData)
        return (
            <View style={{ flex: 1, backgroundColor: "rgba(70, 48, 235, 0.1)" }}>
                <View style={{ height: 75, paddingTop: 40, backgroundColor: "white", borderColor: "lightgrey", borderBottomWidth: 0.5 }}>
                    <Text style={{ fontSize: 20, textAlign: "center", color: "#4630EB" }}>Goodman</Text>
                </View>
                {this.state.loading ? (
                    <View>
                        <Text>Loading....</Text>
                    </View>
                ) : (
                    <FlatList
                        data={this.state.feedData}
                        refreshing={this.state.refresh}
                        onRefresh={this.onRefresh}
                        keyExtractor={(item, index) => index.toString()}
                        style={{ flex: 1 }}
                        renderItem={({ item }, index) => (
                            <View key={index} style={{ margin: 10, backgroundColor: "#fff", flex: 1, borderRadius: 10 }}>
                                <View>
                                    <Text>{item.posted} time ago</Text>
                                    <Text>{item.author}</Text>
                                </View>
                                <View>
                                    <Image source={{ uri: item.url }} style={{ resizeMode: "cover", width: "100%", height: 275 }} />
                                </View>
                                <View>
                                    <Text>{item.caption}</Text>
                                    <Text>Comments</Text>
                                </View>
                            </View >
                        )} />)}
            </View>
        )
    }
}

export default MainFeed;
