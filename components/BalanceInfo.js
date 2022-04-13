import { Image, Text, View } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, icons } from '../constants'
import { transform } from '@babel/core'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

const BalanceInfo = ({ title, displayAmount, changePct, containerStyle }) => {
    return (
        <View style={{ ...containerStyle, marginTop: 10 }}>
            {/* Title  */}
            <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>{title}</Text>

            {/* Figures  */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end',

            }}>
                <Text style={{ ...FONTS.h2, color: COLORS.lightGray3 }}>$</Text>
                <Text style={{ marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white }}>
                    {displayAmount.toFixed(2)}
                </Text>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}> USD</Text>
            </View>

            {/* Chngae Percentage  */}
            <View style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
            }}>
                {
                    changePct != 0 &&
                    <Image
                        source={icons.upArrow}
                        style={{
                            width: 10,
                            height: 10,
                            alignSelf: 'center',
                            tintColor: (changePct > 0) ? COLORS.lightGreen : COLORS.red,
                            transform: (changePct > 0) ? [{ rotate: '45deg' }] : [{ rotate: '125deg' }]
                        }}
                    />
                }
                <Text style={{
                    marginLeft: SIZES.base,
                    alignSelf: 'flex-end',
                    color: (changePct == 0) ? COLORS.lightGray3
                        : (changePct > 0) ? COLORS.lightGreen :
                            COLORS.red,
                    ...FONTS.h4
                }}>
                    {changePct.toFixed(2)}%
                </Text>
                <Text style={{
                    marginLeft: SIZES.radius,
                    alignSelf: 'flex-end',
                    color: COLORS.lightGray3,
                    ...FONTS.h5
                }}>
                    7d change
                </Text>
            </View>

        </View>
    )
}

export default BalanceInfo
