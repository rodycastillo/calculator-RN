import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    calculatorContainer:{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end'
    },
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    result: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10
    },
    resultSmall: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#fff',
        fontWeight: '400'
    }
});