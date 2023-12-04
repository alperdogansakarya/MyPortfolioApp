import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function EducationScreen() {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainBaslikContainer}>
        <Text style={styles.mainBaslik}>Eğitimlerim Ve Sertifikalarım</Text>
      </View>
      <View style={styles.Maincizgi}/>

      <View style={styles.icerikContainer}>
        <View style={styles.icerikAltContainer}>

      <Text style={styles.icerikBaslik}>
          Sakarya Üniversitesi
      </Text>
        
        <Text style={styles.icerikAciklama}>
          Sakarya Üniversitesi Bilgisayar Fakültesi Bilişim Sistemleri Mühendisliği Bölümüne 2019 yılında başladım. Şuan 4. sınıf öğrencisiyim. 
          </Text>     
          
        </View>

          <View style={styles.cizgi}/>


        <View style={styles.icerikAltContainer}>

      <Text style={styles.icerikBaslik}>
          SAÜSEM B1 Seviye İngilizce Kursu 
      </Text>
        
        <Text style={styles.icerikAciklama}>
          2022 Yılı Online eğitim şeklinde B1 seviye ingilizce kursumu tamamladım. Kurs sonundaki sınavımı başarıyla sonuçlandırarak sertifakamı aldım.
        </Text>      
        </View>
        
        <View style={styles.cizgi}/>    

        <View style={styles.icerikAltContainer}>

      <Text style={styles.icerikBaslik}>
          BTK Akademi Vue.JS Kursu
      </Text>
        
        <Text style={styles.icerikAciklama}>
        2023 Yılında Yaklaşık 3 aylık bir süre içerisinde Vue.js kursumu tamamladım. Vue.js teknolojisi üzerinden web tabanlı projeler oluşturabilecek seviyeye geldim.
        </Text>      
        </View>
        
        <View style={styles.cizgi}/>    

        <View style={styles.icerikAltContainer}>

      <Text style={styles.icerikBaslik}>
            React Native Udemy Kursu (Can Boz)
            
      </Text>
        
          <Text style={styles.icerikAciklama}>
            2023 Yılı Ekim ayında başladığım React Native kursumun %50'sini tamamladım. Aktif bir şekilde devam ediyorum. Eğitim sonunda Sertifikamı alarak React Native alanında da bir iş sahibi olabileceğim.
        </Text>      
      </View>

      </View>
      

       


    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainBaslikContainer: {
    alignItems: 'center',
    marginBottom: 1,
    marginTop: 5
  },
  mainBaslik: {
    color:'cadetblue',
    fontSize: 40,
    fontWeight: 'bold',
    
  },
  mainContainer: {
    backgroundColor: 'white',
    height:'100%'
  },
  cizgi: {
    backgroundColor: 'grey',
    marginBottom: 15,
    marginTop:15,
    height: 2,
    marginHorizontal: 5,
    borderRadius:20
  },
  Maincizgi: {
        backgroundColor: 'grey',
    marginBottom: 17,
    marginTop:1,
    height: 2,
    marginHorizontal: 45,
    borderRadius:20
  },
  icerikAltContainer: {
    marginLeft:5
  },
  icerikBaslik: {
    fontSize: 30,
    marginBottom: 7,
    color:'black'
  },
  icerikAciklama: {
    fontSize: 20,
    marginLeft:5
  },


})