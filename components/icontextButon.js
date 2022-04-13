import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const IcontextButon = ({ lable, icon, containerStyle, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.white,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                resizeMode='contain'
                style={{
                    width: 20,
                    height: 20
                }}
            />
            <Text
                style={{
                    marginLeft: SIZES.base,
                    ...FONTS.h3
                }}
            >{lable}</Text>
        </TouchableOpacity>
    )
}

export default IcontextButon
