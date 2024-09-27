import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View }                 from 'react-native';

exports.default = () => {
    const { user } = useLocalSearchParams();
    return (
        <View>

            <Text style={ [ { fontSize: 28 } ] }>User: { user }</Text>
            <Link href="/">INDEX</Link>
        </View>
    );
};