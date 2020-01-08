import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  // Image,
  View,
  Dimensions,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path } from 'react-native-svg';
import { LoginButton } from 'react-native-fbsdk';

import homeBackground from '../../assets/images/homeBackground.png';
// import logo from '../../assets/images/Logo.png';

const { width, height } = Dimensions.get('window');

export default function SignIn() {
  return (
    <ImageBackground
      source={homeBackground}
      style={{ width: '110%', height: '100%' }}
    >
      <SafeAreaView>
        {/* <Image
          style={{ width: 122, height: 132, marginTop: 52, marginLeft: 27 }}
          source={logo}
        /> */}
        <View
          style={{ width: 122, height: 132, marginTop: 52, marginLeft: 33 }}
        >
          <Text
            style={{
              fontFamily: 'Poppins',
              fontStyle: 'italic',
              fontWeight: '900',
              fontSize: 55,
              lineHeight: 82,
              color: '#FFFFFF',
              letterSpacing: -3.4,
            }}
          >
            NXT
          </Text>
          <Text
            style={{
              top: -50,
              left: 30,
              fontFamily: 'Poppins',
              fontStyle: 'italic',
              fontWeight: '900',
              fontSize: 55,
              lineHeight: 82,
              color: '#FFFFFF',
              letterSpacing: -3.4,
            }}
          >
            LVL
          </Text>
          <View
            style={{
              top: -70,
              width: 100,
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <Text
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'italic',
                fontWeight: '800',
                fontSize: 18,
                lineHeight: 27,
                color: '#FFFFFF',
              }}
            >
              Tattoo
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins',
                fontStyle: 'italic',
                fontWeight: '300',
                fontSize: 18,
                lineHeight: 27,
                color: '#FFFFFF',
                opacity: 0.9,
                marginLeft: 5,
              }}
            >
              Studio
            </Text>
          </View>
        </View>
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
          colors={['rgba(219, 0, 255, 0.0001)', 'rgba(0, 211, 145, 1)']}
          style={{ width, height: 347, left: 0, top: 0 }}
        />
        <View
          style={{
            width,
            height,
            marginTop: -18,
            position: 'absolute',
            transform: [{ rotate: '180deg' }],
          }}
        >
          <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 593.576L0 534.165C0 509.503 
                 15.8608 487.638 39.3045 
                 479.982L323.973 387.014C354.409 
                 377.074 420 368.688 420 
                 250.67V279.214V0H0V458.842L0 593.576Z"
              fill="#e7e7e7"
            />
          </Svg>
        </View>
        <View
          style={{
            position: 'absolute',
            width,
            height: 63,
            left: 79,
            top: 472,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              position: 'absolute',
              height: 63,
              width: 240,
              right: 0,
              fontFamily: 'Poppins',
              fontStyle: 'italic',
              fontWeight: '900',
              fontSize: 42,
              lineHeight: 63,
              textAlign: 'left',
              letterSpacing: -2.59636,
              color: '#000000',
              opacity: 0.12,
            }}
          >
            LOGIN
          </Text>
        </View>
        <LoginButton
          permissions={['public_profile']}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('falha na autenticação: ', error);
            } else if (result.isCancelled) {
              console.log('cancelado pelo usuário');
            } else {
              console.log('result: ', result);
            }
          }}
        />
        <View
          style={{
            backgroundColor: '#e7e7e7',
            width,
            height: height - height / 3,
            bottom: 0,
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}
