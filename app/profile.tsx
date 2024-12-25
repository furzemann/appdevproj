import {View,Text} from 'react-native'
import HomeButton from '@/components/HomeButton'
import ProfileIcon from '@/components/Icon'
export default function Profile() {
    return ( <View style={{flex:1,alignItems:'center'}}>
        <ProfileIcon/>
        <Text>Hello World!</Text>
        <HomeButton/>
    </View>)
}