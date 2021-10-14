import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string,
    color?: string,
    width? : boolean,
    action: (numberText: string) => void
}

export const ButtonCalc = ({text, color= '#2d2d2d', width = false, action}:Props) => {
    return (
        <TouchableOpacity
            onPress={() => action( text )}
        >
            <View style={
                { ...styles.button,
                backgroundColor: color,
                width: (width) ? 180 : 80
                }
            }>
                <Text style={{
                    ...styles.buttonText,
                    color: (color == "#9b9b9b" ? 'black' : 'white')
                }}> {text} </Text>
            </View>
        </TouchableOpacity>

    )
}
