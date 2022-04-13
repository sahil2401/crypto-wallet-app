import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Switch
} from 'react-native';
import { MainLayout } from "./";
import { HeaderBar } from '../components';
import { FONTS, COLORS, SIZES, dummyData, icons } from '../constants';

const SectionTitle = ({ title }) => {
    return (
        <View style={{ marginTop: SIZES.padding }}>
            <Text style={{ color: COLORS.lightGray3, ...FONTS.h4 }}>{title}</Text>
        </View>
    )

}

const Setting = ({ title, value, type, onPress }) => {
    if (type == "button") {
        return (
            <TouchableOpacity
                style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}
                onPress={onPress}
            >

                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>
                    {title}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ marginRight: SIZES.radius, color: COLORS.lightGray3, ...FONTS.h3 }}>{value}</Text>
                    <Image
                        source={icons.rightArrow}
                        style={{ height: 15, width: 15, tintColor: COLORS.white }}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                <Text style={{ flex: 1, color: COLORS.white, ...FONTS.h3 }}>
                    {title}
                </Text>
                <Switch
                    value={value}
                    onValueChange={(value) => onPress(value)}
                />
            </View>
        )
    }
}

const Profile = () => {

    const [faceID, setFaceID] = useState(true)
    return (
        <MainLayout>
            <View style={{
                flex: 1,
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.black,
                marginTop: -30
            }}>
                {/* {/ Header /} */}
                <HeaderBar
                    title="Profile"
                />

                {/* {/ Details /} */}
                <ScrollView>

                    {/* {/ Email & User ID /} */}
                    <View
                        style={{ flexDirection: 'row', marginTop: SIZES.radius }}
                    >
                        {/* {/ Email and ID /} */}
                        <View style={{ flex: 1 }}>
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.profile.email}</Text>
                            <Text style={{ color: COLORS.lightGray3, ...FONTS.body4 }}>ID: {dummyData.profile.id}</Text>
                        </View>
                        {/* {/ Status /} */}

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                style={{ height: 25, width: 25 }}
                                source={icons.verified}
                            />

                            <Text style={{ marginLeft: SIZES.base, color: COLORS.lightGreen, ...FONTS.body4 }}>Verified</Text>
                        </View>
                    </View>
                    {/* {/ APP /} */}
                    <SectionTitle
                        title="APP"
                    />
                    <Setting
                        title="Launch Screen"
                        value="Home"
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />

                    <Setting
                        title="Appearance"
                        value="Dark"
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />

                    {/* {/ Account /} */}

                    <SectionTitle
                        title="ACCOUNT"
                    />
                    <Setting
                        title="Payment Currency"
                        value="USD"
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />
                    <Setting
                        title="Language"
                        value="English"
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />

                    {/* {/ SECURITY /}s */}

                    <SectionTitle
                        title="SECURITY"
                    />
                    <Setting
                        title="FaceID"
                        value={faceID}
                        type='switch'
                        onPress={(value) => setFaceID(value)}
                    />
                    <Setting
                        title="Password Settings"
                        value=""
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />
                    <Setting
                        title="Change Password"
                        value=""
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />
                    <Setting
                        title="2-Factor Authentication "
                        value=""
                        type='button'
                        onPress={() => console.log("Pressed")}
                    />
                </ScrollView>
            </View>
        </MainLayout>
    )
}

export default Profile;