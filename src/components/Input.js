import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  textContentType,
} from 'react-native';
import {
  COLOUR_RED,
  COLOUR__INPUT_TITLE,
  FONT_FAMILY_BODY,
  FONT_FAMILY_BODY_SEMIBOLD,
} from '../constants/Styles';

export const Input = ({
  value,
  placeholder,
  inputStyle,
  leftIcon,
  rightIcon,
  title,
  inputType,
  secureTextEntry,
  inputContainerStyle,
  onPressRightIcon,
  onChangeText,
  placeholderTextColor,
  titleStyle,
  mainContainerStyle,
  maxLength,
  errorMessage,
}) => {
  return (
    <View style={[styles.mainContainer, {...mainContainerStyle}]}>
      <Text style={[styles.title, {...titleStyle}]}>{title}</Text>
      <View style={[styles.inputContainer, {...inputContainerStyle}]}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <TextInput
          style={[
            styles.textInput,
            {
              paddingLeft: leftIcon ? 10 : undefined,
              paddingRight: rightIcon ? 10 : undefined,
              ...inputStyle,
            },
          ]}
          placeholder={placeholder}
          textContentType={textContentType}
          keyboardType={
            inputType === 'email'
              ? 'email-address'
              : inputType === 'phone'
              ? 'phone-pad'
              : inputType === 'number'
              ? 'number-pad'
              : 'default'
          }
          secureTextEntry={secureTextEntry}
          defaultValue={value}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          maxLength={maxLength}
        />
        {rightIcon && (
          <TouchableOpacity
            style={styles.rightIcon}
            onPressIn={onPressRightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text style={styles.errorText}> {errorMessage}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
  },
  errorText: {
    color: COLOUR_RED,
    fontFamily: FONT_FAMILY_BODY,
    fontSize: 14,
    lineHeight: 16.8,
    marginTop: 8,
  },
  inputContainer: {
    borderWidth: 1,
    width: '100%',
    height: 50,
    borderRadius: 50,
    borderColor: '#D1D3D4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    color: '#192426',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 16.8,
    width: '90%',
  },
  leftIcon: {},
  rightIcon: {},
  title: {
    color: COLOUR__INPUT_TITLE,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16.8,
    fontFamily: FONT_FAMILY_BODY_SEMIBOLD,
    marginBottom: 5,
  },
});
