import { Button, Card, Icon, Input, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { useFonts }                                         from 'expo-font';
import { Link }                                             from 'expo-router';
import React                                                from 'react';
import { Text, View }                                       from 'react-native';

exports.default = () => {
    useFonts( {
        antoutline: require( '@ant-design/icons-react-native/fonts/antoutline.ttf' ),
    } );
    return (
        <View style={ { paddingTop: 150 } }>
            <WingBlank size="lg">
                <Card>
                    <Card.Header
                        title="登录"
                        thumbStyle={ { width: 30, height: 30 } }
                        thumb={ <Icon name="wechat" color="green"/> }
                        extra="登录"
                    />
                    <Card.Body>
                        <View style={ { height: 42 } }>
                            <Input prefix={ <Icon name="user"/> } placeholder="手机号/邮箱"/>
                        </View>
                        <View style={ { height: 42 } }>
                            <Input prefix={ <Icon name="lock"/> } placeholder="密码"/>
                        </View>
                        <View style={ { height: 42 } }>
                            <Button type="ghost">登录</Button>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content="footer content"
                        extra="footer extra content"
                    />
                </Card>
            </WingBlank>
            <WhiteSpace size="lg"/>
        </View>
    );
};