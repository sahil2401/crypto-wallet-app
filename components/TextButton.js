import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { FONTS, COLORS, SIZES } from '../constants'

const TextButton = ({ label, containerStyle, onPress }) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 3,
            paddingHorizontal: 18,
            borderRadius: 15,
            backgroundColor: COLORS.gray1,
            ...containerStyle
        }}
            onPress={onPress}>
            <Text style={{
                color: COLORS.white,
                ...FONTS.h3
            }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}
export default TextButton;