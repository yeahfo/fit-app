import { Link }       from 'expo-router';
import { Text, View } from 'react-native';

exports.default = () => {
    return (
        <View>
            <Text style={ [ { fontSize: 28 } ] }>Home Page</Text>
            <Link href="/">INDEX</Link>
        </View>
    );
};