import { StyleSheet, Text, View, Button, Image,ScrollView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('myapp/assets/img/pp.jpeg')}
          style={styles.image}
        />
        <View style={styles.textView}>
        <Text style={styles.textBanner}>
          Merhaba ben Alper, 22 yaşındayım. Sakarya Üniversitesinde Bilişim
          Sistemleri Mühendisliği Bölümü okuyorum. 2022 yılından itibaren yoğun bir ilgiyle front-end yazılım geliştiriciliği yapıyorum.
          Web ve mobil alanda çeşitli projeler geliştirdim. Web alanında 2023 yılında Ottoo Yazılım firmasında 4,5 aylık bir front-end geliştirici deneyimim oldu.
          Bu deneyimin sonunda okulumun örgün eğitime devam etmesi dolayısıyla çalışmamı sonlandırmak zorunda kaldım.
          Şuanda Tubitak başvurusunda bulunduğum bitirme tezim için yapay zeka destekli bir chatbot yapım aşamasındayım. İlerleyen yıllarda kendi yazılım ve reklam şirketimi kurmak istiyorum.
        </Text>
        </View>
        
      </View>

      

      <View style={styles.butonlar}>
        <Text onPress={() => navigation.navigate('Eğitimim')} style={[styles.textButon1, styles.button]}>
            Eğitimim
        </Text>
        
        <Text onPress={() => navigation.navigate('Yeteneklerim')} style={[styles.textButon2, styles.button]}>
            Yeteneklerim
        </Text>
        
        <Text onPress={() => navigation.navigate('Deneyimlerim')} style={[styles.textButon3, styles.button]}>
            Deneyimlerim
        </Text>
        
        <Text onPress={() => navigation.navigate('Projelerim')} style={[styles.textButon4, styles.button]}>
            Projelerim
          </Text>



      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textBanner: {
    marginHorizontal: 10,
    fontSize: 15,
  },
  textView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    padding:3
  },
  imgContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 250,
    borderRadius: 50,
    alignSelf: 'center',
    margin: 15,
  },
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'relative',
      marginTop: 20,
      height: 200,
      backgroundColor: 'white',
    marginHorizontal: 10,
        borderWidth: 1,
    borderColor: 'grey',
    borderRadius:15,
    
  },
  
     
    button: {
    width:150, 
        height: 80,
        borderRadius:10,
        fontSize:20,
      position: 'absolute',
      textAlign: 'center',
    paddingVertical:20
  },
    
    
    
  butonlar: {
    position: 'relative',
      marginTop: 20,
      height: 200,
      backgroundColor: 'white',
    marginHorizontal: 10,
        borderWidth: 1,
    borderColor: 'grey',
    borderRadius:15,
  
    },
  textButon1: {
    width: 100,
    height: 50,
    backgroundColor: 'yellow',
    top: 10,
    left: 10,
    
    },  
textButon2: {
    width: 100,
    height: 50,
  backgroundColor: 'blue',
  bottom: 10,
    left:10
  },
    textButon3: {
    width: 100,
    height: 50,
      backgroundColor: 'grey',
      top: 10,
      right:10
    
  },
    textButon4: {
    width: 100,
    height: 50,
      backgroundColor: 'green',
      bottom: 10,
    right:10
    }






});
