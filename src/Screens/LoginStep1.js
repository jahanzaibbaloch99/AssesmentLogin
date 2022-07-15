import React, {useState, useContext} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';
import {ThemeContext} from '../Context/ThemeContext';
import {useTheme} from '@react-navigation/native';

const LoginStep1 = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [shouldShowPassword, setShouldShowPassword] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);
  const [hasError, setHasError] = useState(false);
  const {colors} = useTheme();
  const onSubmit = (text, pass) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pass && String(text).toLowerCase().match(regex)) {
      Alert.alert(
        'Registered Successfully',
        'You have been registered Successfully',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              setEmail('');
              setPassword('');
              setShouldShowPassword(false);
            },
          },
        ],
      );
    } else if (String(text).toLowerCase().match(regex)) {
      setShouldShowPassword(true);
    } else {
      setHasError(true);
    }
  };
  return (
    <View style={{flex: 1, padding: 15, backgroundColor: colors.background}}>
      <View>
        <Switch
          trackColor={{false: 'white', true: 'white'}}
          thumbColor={colors.text}
          onValueChange={setTheme}
          value={theme}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: colors.text}}>
            Login Assesment
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          paddingTop: 15,
          paddingHorizontal: 10,
        }}>
        <View>
          <View style={{marginVertical: 5}}>
            <View style={{marginVertical: 5}}>
              <Text style={{color: colors.text, fontWeight: 'bold'}}>
                Email
              </Text>
            </View>
            <TextInput
              value={email}
              onChangeText={text => {
                setHasError(false);
                setEmail(text);
              }}
              placeholder="Email"
              placeholderTextColor={colors.colorRevert}
              style={{
                backgroundColor: colors.fieldsColor,
                borderRadius: 10,
                paddingHorizontal: 15,
                color: colors.colorRevert,
              }}
            />
            {hasError && (
              <View style={{marginTop: 5}}>
                <Text style={{color: 'red'}}>Email is not Valid</Text>
              </View>
            )}
          </View>
          {shouldShowPassword && (
            <View style={{marginVertical: 5}}>
              <View style={{marginVertical: 5}}>
                <Text style={{color: colors.text, fontWeight: 'bold'}}>
                  Password
                </Text>
              </View>
              <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                placeholderTextColor={colors.colorRevert}
                style={{
                  backgroundColor: colors.fieldsColor,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  color: colors.colorRevert,
                }}
              />
            </View>
          )}
        </View>
        <View style={{marginVertical: 10}}>
          <TouchableOpacity
            onPress={() => {
              onSubmit(email, password);
            }}
            style={{
              backgroundColor: colors.btnColor,
              padding: 15,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: colors.colorRevert,
              }}>
              Sing in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginStep1;
