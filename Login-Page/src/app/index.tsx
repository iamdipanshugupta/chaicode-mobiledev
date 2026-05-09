import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  Linking,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons'

const GREEN = '#7AC142'
const DARK_GREEN = '#5fa030'

const Loginpage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailFocused, setEmailFocused] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  const openLink = async (appUrl: string, webUrl: string) => {
    const supported = await Linking.canOpenURL(appUrl)
    Linking.openURL(supported ? appUrl : webUrl)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>

          {/* ── Logo ── */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <View style={styles.plusHorizontal} />
              <View style={styles.plusVertical} />
            </View>
          </View>

          {/* ── Heading ── */}
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Let's experience the joy of telecare AI.</Text>

          {/* ── Email Field ── */}
          <Text style={styles.label}>Email Address</Text>
          <View style={[styles.inputWrapper, emailFocused && styles.inputWrapperFocused]}>
            <Ionicons name="mail-outline" size={18} color="#888" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholder="elementary221b@gmail.com"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </View>

          {/* ── Password Field ── */}
          <Text style={styles.label}>Password</Text>
          <View style={[styles.inputWrapper, passwordFocused && styles.inputWrapperFocused]}>
            <Ionicons name="lock-closed-outline" size={18} color="#888" style={styles.fieldIcon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your password..."
              placeholderTextColor="#aaa"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#888"
              />
            </Pressable>
          </View>

          {/* ── Forgot Password ── */}
          <Pressable
            style={styles.forgotWrapper}
            onPress={() => console.log('Forgot password pressed')}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </Pressable>

          {/* ── Sign In Button ── */}
          <Pressable
            style={({ pressed }) => [
              styles.signInBtn,
              pressed && styles.signInBtnPressed,
            ]}
            onPress={() => console.log('Sign In pressed!')}
          >
            <Text style={styles.signInText}>Sign In</Text>
            <Text style={styles.signInArrow}>→</Text>
          </Pressable>

          {/* ── Divider ── */}
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or continue with</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* ── Social Buttons ── */}
          <View style={styles.socialRow}>
            <Pressable
              style={({ pressed }) => [styles.socialBtn, pressed && styles.socialBtnPressed]}
              onPress={() => openLink('fb://profile', 'https://facebook.com/yourprofile')}
            >
              <FontAwesome name="facebook" size={22} color="#1877F2" />
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.socialBtn, pressed && styles.socialBtnPressed]}
              onPress={() => Linking.openURL('https://google.com')}
            >
              <AntDesign name="google" size={22} color="#EA4335" />
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.socialBtn, pressed && styles.socialBtnPressed]}
              onPress={() =>
                openLink(
                  'instagram://user?username=iamdipanshugupta',
                  'https://www.instagram.com/iamdipanshugupta/'
                )
              }
            >
              <AntDesign name="instagram" size={22} color="#E1306C" />
            </Pressable>
          </View>

          {/* ── Sign Up Link ── */}
          <View style={styles.signupRow}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <Pressable onPress={() => console.log('Sign Up pressed')}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </Pressable>
          </View>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Loginpage

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f0',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 24,
  },

  /* Logo */
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoBox: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusHorizontal: {
    position: 'absolute',
    width: 48,
    height: 14,
    backgroundColor: GREEN,
    borderRadius: 4,
  },
  plusVertical: {
    position: 'absolute',
    width: 14,
    height: 48,
    backgroundColor: GREEN,
    borderRadius: 4,
  },

  /* Heading */
  title: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1a1a1a',
    letterSpacing: -0.5,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
  },

  /* Labels */
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#555',
    marginBottom: 8,
    marginTop: 4,
  },

  /* Input */
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    paddingHorizontal: 14,
    paddingVertical: 4,
    marginBottom: 16,
  },
  inputWrapperFocused: {
    borderColor: GREEN,
  },
  fieldIcon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#1a1a1a',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  eyeBtn: {
    padding: 4,
  },

  /* Forgot Password */
  forgotWrapper: {
    alignSelf: 'flex-end',
    marginBottom: 16,
    marginTop: -8,
  },
  forgotText: {
    color: GREEN,
    fontSize: 13,
    fontWeight: '600',
  },

  /* Sign In Button */
  signInBtn: {
    backgroundColor: GREEN,
    borderRadius: 14,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    shadowColor: GREEN,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  signInBtnPressed: {
    backgroundColor: DARK_GREEN,
    transform: [{ scale: 0.97 }],
    elevation: 2,
  },
  signInText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  signInArrow: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
  },

  /* Divider */
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  dividerText: {
    marginHorizontal: 12,
    color: '#aaa',
    fontSize: 13,
  },

  /* Social */
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialBtnPressed: {
    backgroundColor: '#f0f0f0',
    transform: [{ scale: 0.95 }],
  },

  /* Sign Up */
  signupRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupText: {
    color: '#888',
    fontSize: 14,
  },
  signupLink: {
    color: GREEN,
    fontSize: 14,
    fontWeight: '700',
  },
})