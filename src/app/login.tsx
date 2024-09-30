import { Flex, Icon, Input }              from '@ant-design/react-native';
import { useFonts }                       from 'expo-font';
import React, { useEffect, useState }     from 'react';
import {
    View,
    Text,
    Button,
    Card, Avatar, Toast
}                                         from 'react-native-ui-lib';
import { createVerificationCodeForLogin } from '../api/verification';

exports.default = () => {
    useFonts( {
        antoutline: require( '@ant-design/icons-react-native/fonts/antoutline.ttf' ),
    } );
    const [ errorToast, setErrorToast ] = useState( null );
    const [ username, setUsername ] = useState( null );


    const usernameChanged = async ( e: any ) => {
        if ( e !== '' ) {
            setUsername( e );
        }
    };

    const [ verificationLabel, setVerificationLabel ] = useState( '获取验证码' );
    const countdownSeconds = 5;
    const [ countdown, setCountdown ] = useState( countdownSeconds );
    const [ verification, setVerification ] = useState( false );
    const verificationGetOnPass = async () => {
        if ( username !== null && username.trim() !== '' ) {
            await createVerificationCodeForLogin( username.trim() )
                .then( res => res.json() )
                .then( res => {
                    if ( !res.error ) {
                        setVerification( true );
                        setVerificationLabel( `${ countdown }秒后重新获取` );
                        const interval = setInterval( () => {
                            setCountdown( prev => {
                                if ( prev <= 1 ) {
                                    clearInterval( interval );
                                    setVerificationLabel( '获取验证码' );
                                    setVerification( false );
                                    return countdownSeconds; // 重置倒计时
                                }
                                setVerificationLabel( `${ prev - 1 }秒后重新获取` );
                                return prev - 1;
                            } );
                        }, 1000 );
                    } else {
                        let msg = '';
                        for ( const key in res.error.data ) {
                            msg += res.error.data[ key ];
                        }
                        setErrorToast( `${ res.error.userMessage }[${ msg }]` );
                    }

                } );
        } else {
            setErrorToast( '请输入手机号或邮箱' );
        }
    };
    useEffect( () => {
        return () => {
            clearInterval( countdown );
        };
    }, [] );
    return (
        <Card flex paddingH-25 paddingT-120>
            <Toast
                visible={ errorToast !== null }
                position={ 'top' }
                preset={ 'failure' }
                backgroundColor={ '#e84848' }
                message={ errorToast }
                showLoader
                autoDismiss={ 1000 }
                onDismiss={ () => {
                    setErrorToast( null );
                } }
            ></Toast>
            <Text orange50 text20><Avatar label={ 'FIT' }
                                          badgeProps={ { backgroundColor: '#f6802c' } }
                                          backgroundColor={ 'rgba(164,231,164,0.72)' }
            />刚好！</Text>
            <Input placeholder="请输入手机号邮箱" style={ {
                borderBottomWidth: 1,
                marginTop: 32
            } }
                   prefix={ <Icon name="user"/> }
                   showSoftInputOnFocus
                   onChangeText={ usernameChanged }
            />
            <Input placeholder="请输入密码" secureTextEntry style={ {
                borderBottomWidth: 1,
                marginTop: 32
            } }
                   prefix={ <Icon name="lock"/> }
                   showSoftInputOnFocus
            />
            <Flex>
                <Flex.Item style={ { paddingLeft: 4, paddingRight: 4 } }>
                    <Input placeholder="请输入验证码" style={ {
                        borderBottomWidth: 1,
                        marginTop: 20
                    } }
                           prefix={ <Icon name="message"/> }
                           showSoftInputOnFocus
                    />
                </Flex.Item>
                <Flex.Item style={ { paddingLeft: 4, paddingRight: 4 } }>
                    <Button text90 white background-orange30
                            label={ verificationLabel }
                            disabled={ verification }
                            onPress={ verificationGetOnPass }
                    />
                </Flex.Item>
            </Flex>
            <Flex>
                <Flex.Item style={ { paddingLeft: 4, paddingRight: 4, marginTop: 20 } }>
                    <Button link text32 grey30 label="验证码登录" marginR-80/>
                </Flex.Item>
                <Flex.Item style={ { paddingLeft: 4, paddingRight: 4 } }>
                    <Button link text32 grey30 label="忘记密码" marginL-80/>
                </Flex.Item>
            </Flex>

            <View marginT-100 center>
                <Button text70 white background-orange30 label="登录" onPress={ () => {
                    alert( username );
                } }/>
                <Button link text70 orange30 label="注册" marginT-20/>
            </View>
        </Card>
    );
};