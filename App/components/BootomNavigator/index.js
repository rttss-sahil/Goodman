const React = require('react');
const { Text, View, Image } = require('react-native')
const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs')
const { TouchableOpacity } = require('react-native-gesture-handler');
const { vw } = require("react-native-expo-viewport-units")
const { FontAwesome5 } = require('@expo/vector-icons')

import MainProfile from '../MainProfile/MainProfile';
import MainFeed from '../MainFeed/MainFeed';
import svg from '../../static/icons/svg';
import Upload from '../Upload/Upload';





const Tab = createBottomTabNavigator();
class BottomNavigator extends React.Component {
    render() {
        return (
            <Tab.Navigator
                initialRouteName="Feed"
                tabBar={props => MyTabs(props)}
            >
                <Tab.Screen name="Feed" component={MainFeed} />
                <Tab.Screen name="Upload" component={Upload} />
                <Tab.Screen name="Profile" component={MainProfile} />
            </Tab.Navigator>
        )
    }
}

const RequiredIcon = ({ isFocused, label }) => {
    const fill = isFocused ? "#4630EB" : "gray";
    var component;
    switch (label) {
        case "Profile":
            component = <svg.ProfileSvg fill={fill} />
            break;
        case "Feed":
            component = <svg.HomeSvg fill={fill} />
            break;
        case "Upload":
            component = <svg.UploadSvg fill={fill} />
            break;
    }
    return component;
}

const MyTabs = ({ state, navigation }) => {
    return (
        <View style={{
            flexDirection: "row",
            height: 60,
            // paddingBottom: 10,
            justifyContent: "center",
            alignItems: "center"
        }}>
            {state.routes.map((route, i) => {
                const isFocused = state.index === i;
                const label = route.name;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <TouchableOpacity
                        key={i}
                        onPress={onPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center",
                            width: vw(33),
                        }}
                    >
                        <View style={{
                            flex: 1, justifyContent: "center", alignItems: "center"
                        }}>
                            <RequiredIcon isFocused={isFocused} label={label} />
                            <Text style={{ color: isFocused ? '#4630EB' : 'gray', textAlign: "center", fontSize: 12 }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>)
            })
            }
        </View>
    )
}

export default BottomNavigator;