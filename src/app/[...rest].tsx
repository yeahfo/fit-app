import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View }                 from 'react-native';

exports.default = () => {
    const { user } = useLocalSearchParams();
    return (
        <View>
            <Text style={ [ { fontSize: 120 } ] }>Settings...: { user }</Text>
            <Link href="/">INDEX</Link>
        </View>
    );
};