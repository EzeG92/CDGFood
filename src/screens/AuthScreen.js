// import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Alert } from 'react-native'
// import React, { useState, useEffect, useReducer, useCallback } from 'react'
// import { Colors } from '../constants/colors'
// import { useDispatch } from 'react-redux'
// import { signUp } from '../store/actions/auth.actions'
// import Input from '../components/Input'

// const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE'

// const formReducer = (state, action) => {
//     if (action.type === FORM_INPUT_UPDATE) {
//         const updateValues = {
//             ...state.inputValues,
//             [action.input]: action.value,
//         };
//         const updatedValidities = {
//             ...state.inputValidities,
//             [action.input]: action.isValid
//         };
//         let updatedFormIsValid = true;
//         for (const key in updatedValidities) {
//             updatedFormIsValid = updatedFormIsValid && updatedValidities[key]
//         }
//         return {
//             formIsValid: updatedFormIsValid,
//             inputValidities: updatedValidities,
//             inputValues: updateValues,
//         }
//     }
//     return state;
// }

// const AuthScreen = () => {
//     const dispatch = useDispatch();
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (error) {
//             Alert.alert('A ocurrido un error', error, [{ text: 'OK' }])
//         }
//     }, [error])

//     const [formState, dispatchFormState] = useReducer(formReducer, {
//         inputValues: {
//             email: '',
//             password: '',
//         },
//         inputValidities: {
//             email: false,
//             password: false,
//         },
//         formIsValid: false,
//     })

//     const handleSignUp = () => {
//         dispatch(signUp (email, password));
//     };

//     const onInputChangeHandler = useCallback(
//         (inputIdentifier, inputValue, inputValidity) => {
//             dispatchFormState({
//                 type: FORM_INPUT_UPDATE,
//                 value: inputValue,
//                 isValid: inputValidity,
//                 input: inputIdentifier,
//             });
//         },
//         [dispatchFormState]
//     )

//     return (
//         <KeyboardAvoidingView
//             behavior='padding'
//             keyboardVerticalOffset={50}
//             style={styles.screen}>

//             <View style={styles.container}>
//                 <Text style={styles.title}>CDG FOOD LOGIN</Text>
//                 <View>
//                     <Input
//                         id='email'
//                         label='Email'
//                         keyboardType='email-address'
//                         required
//                         email
//                         autoCapitalize='none'
//                         errorText='Por favor ingrese un email valido'
//                         onInputChange={onInputChangeHandler}
//                         initialValue=''
//                     />

//                     <TextInput
//                         style={styles.input}
//                         id='password'
//                         label='Clave'
//                         placeholder='password'
//                         keyboardType='default'
//                         secureTextEntry
//                         required
//                         minlength={6}
//                         autoCapitalize='none'
//                         errorText='Por favor ingrese un passaword'
//                         // onChangeText={setPassword}
//                         initialValue=''
//                     />
//                 </View>
//                 <View style={styles.footer}>
//                     <View style={styles.button}>
//                     <Button
//                         title='Registrarme'
//                         color={Colors.primary}
//                         onPress={handleSignUp}
//                     />
//                     </View>
//                 </View>
//             </View>
//         </KeyboardAvoidingView>
//     )
// }

// export default AuthScreen

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },

//     title: {
//         fontSize: 24,
//         marginBottom: 18
//     },

//     container: {
//         width: '80%',
//         maxWidth: 400,
//         backgroundColor: '#fff',
//         height: '50%',
//         maxHeight: 400,
//         padding: 12,
//     },

//     footer: {
//         marginTop: 42,
//     },

//     button: {
//         marginBottom: 8,
//     },

//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//     }
// })

import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/colors'
import { useDispatch } from 'react-redux'
import { signUp } from '../store/actions/auth.actions'

const AuthScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        dispatch(signUp(email, password))
    }

    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>CDG FOOD LOGIN</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        id='email'
                        placeholder='email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        onChangeText={setEmail}
                        initialValue=''
                    />

                    <TextInput
                        style={styles.input}
                        id='password'
                        placeholder='password'
                        keyboardType='default'
                        secureTextEntry
                        minlength={6}
                        autoCapitalize='none'
                        onChangeText={setPassword}
                        initialValue=''
                    />
                </View>
                <View>
                    <Button
                        title='Registrarme'
                        color={Colors.primary}
                        onPress={handleSignUp}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: '#fff',
        height: '50%',
        padding: 12,
    },

    title: {
        fontSize: 24,
        marginBottom: 18
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }

})