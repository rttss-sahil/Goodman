import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bgColor: (backgroundColor) => ({
        backgroundColor
    }),
    txtColor: (color) => ({
        color
    }),
})

export default styles;