import { View, Text } from 'react-native'
import React from 'react'
import {
    ChartDot,
    ChartPath,
    ChartPathProvider,
    ChartXLabel,
    ChartYLabel,
    monotoneCubicInterpolation
} from '@rainbow-me/animated-charts'
import { SIZES, COLORS, FONTS } from '../constants'
import moment from 'moment';

const Chart = ({ containerStyle, chartPrices }) => {

    // Points 
    let startUnixTimeStamp = moment().subtract(7, 'day').unix()

    let data = chartPrices ? chartPrices?.map((item, index) => {
        return {
            x: startUnixTimeStamp + (index + 1) * 3600,
            y: item
        }
    }) : []

    let points = monotoneCubicInterpolation({ data, range: 40 })

    const formatUSD = value => {
        'worklet';

        if (value === '') {
            return '';
        }

        return `$${Number(value).toFixed(2)}`
    }

    const formatDateTime = value => {
        'worklet';
        if (value === '') {
            return '';
        }

        var selectDate = new Date(value * 1000);

        let date = `0${selectDate.getDate()}`.slice(-2)
        let month = `0${selectDate.getMonth() + 1}`.slice(-2)

        return `${date} / ${month}`
    }

    const formatNumber = (value, roundingPoint) => {
        if (value > 1e9) {
            return `${(value / 1e9).toFixed(roundingPoint)}B`
        }
        else if (value > 1e6) {
            return `${(value / 1e6).toFixed(roundingPoint)}M`
        }
        else if (value > 1e3) {
            return `${(value / 1e3).toFixed(roundingPoint)}K`
        }
        else {
            return value.toFixed(roundingPoint)
        }

    }
    const getYAxisLabelValues = () => {
        if (chartPrices != undefined) {
            let minValue = Math.min(...chartPrices)
            let maxValue = Math.max(...chartPrices)

            let midValue = (minValue + maxValue) / 2

            let higherMidValue = (maxValue + midValue) / 2
            let lowerMidValue = (minValue + midValue) / 2

            let roundingPoint = 2

            return [
                formatNumber(maxValue, roundingPoint),
                formatNumber(higherMidValue, roundingPoint),
                formatNumber(lowerMidValue, roundingPoint),
                formatNumber(minValue, roundingPoint),
            ]

        }
        else {
            return []
        }
    }

    return (
        <View
            style={{ ...containerStyle }}
        >
            {/* Y-Axis Lable  */}
            <View style={{
                position: 'absolute',
                left: SIZES.padding,
                top: -10,
                bottom: 0,
                justifyContent: 'space-around'
            }}>
                {/* getYaxisLable Value */}
                {getYAxisLabelValues().map((item, index) => {
                    return (
                        <Text
                            key={index}
                            style={{
                                color: COLORS.lightGray3,
                                ...FONTS.body4
                            }}>
                            {item}
                        </Text>
                    )
                })}

            </View>

            {/* Chart  */}
            {
                data.length > 0 &&
                <ChartPathProvider
                    data={{
                        points,
                        smoothingStrategy: 'bezier'
                    }}
                >
                    <ChartPath
                        height={150}
                        width={SIZES.width}
                        stroke={COLORS.lightGreen}
                        strokeWidth={2}
                    />
                    <ChartDot>
                        <View
                            style={{
                                position: 'absolute',
                                left: -35,
                                width: 80,
                                alignItems: 'center',
                                backgroundColor: COLORS.transparentBlack1
                            }}
                        >
                            {/* DOT  */}
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 20,
                                    height: 20,
                                    borderRadius: 15,
                                    backgroundColor: COLORS.white
                                }}
                            >
                                <View
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 10,
                                        backgroundColor: COLORS.lightGreen

                                    }}
                                />
                            </View>

                            {/* Y-Lable  */}
                            <ChartYLabel
                                format={formatUSD}
                                style={{
                                    color: COLORS.white,
                                    ...FONTS.body5
                                }}
                            />

                            {/* X-Lable  */}
                            <ChartXLabel
                                format={formatDateTime}
                                style={{
                                    marginTop: -30,
                                    color: COLORS.lightGray3,
                                    ...FONTS.body5,
                                    lineHeight: 15
                                }}
                            />
                        </View>
                    </ChartDot>
                </ChartPathProvider>
            }
        </View>
    )
}

export default Chart