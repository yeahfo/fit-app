import { Button, Card, Icon, Input, WhiteSpace, WingBlank } from '@ant-design/react-native';
import { useFonts }                                         from 'expo-font';
import { Link }                                             from 'expo-router';
import React                                                from 'react';
import { View }                                             from 'react-native';

exports.default = () => {
    useFonts( {
        antoutline: require( '@ant-design/icons-react-native/fonts/antoutline.ttf' ),
    } );
    return (
        <View style={ { paddingTop: 150 } }>
            <WingBlank size="lg">
                <Card style={ {
                    backgroundColor: 'rgba(219,234,219,0.28)'
                } }>
                    <Card.Header
                        title="登录"
                        thumbStyle={ { width: 30, height: 30 } }
                        thumb={ <Icon name="wechat" color="green"/> }
                    />
                    <Card.Body>
                        <View style={ { height: 42 } }>
                            <Input style={ {
                                marginLeft: 10,
                                width: 400,
                                borderWidth: 1,
                                borderColor: 'rgba(164,231,164,0.72)',
                                borderRadius: 42
                            } } prefix={ <Icon name="user" color="rgba(164,231,164,0.72)"
                                               style={ { marginLeft: 10 } }/> } placeholder="手机号/邮箱" type="text"/>
                        </View>
                        <WhiteSpace size="lg"/>
                        <View style={ { height: 42 } }>
                            <Input style={ {
                                marginLeft: 10,
                                width: 400,
                                borderWidth: 1,
                                borderColor: 'rgba(164,231,164,0.72)',
                                borderRadius: 42
                            } } prefix={ <Icon name="lock" color="rgba(164,231,164,0.72)"
                                               style={ { marginLeft: 10 } }/> } placeholder="密码" type="password"/>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content={
                            <Button type="primary" style={ {
                                borderRadius: 48
                            } }>登录</Button>
                        }
                        extra={ <Link href="/register" className="fa-external-link" style={ {
                            marginTop: 32,
                            color: 'blue',
                            alignSelf: 'flex-end'
                        } }>注册</Link> }
                    />
                </Card>
            </WingBlank>
        </View>
    );
};