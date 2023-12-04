import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function ExperienceScreen() {
 


  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.mainBaslikContainer}>
        <Text style={styles.mainBaslik}>İş Deneyimlerim</Text>
      </View>
      <View style={styles.Maincizgi}/>

      <View style={styles.icerikContainer}>
        <View style={styles.icerikAltContainer}>

      <Text style={styles.icerikBaslik}>
          Ottoo Yazılım
          </Text>
          <Text style={styles.pozisyon}>
            Front-End Yazılım Geliştirici Stajyer
          </Text>
        
        <Text style={styles.icerikAciklama}>

            Ottoo Yazılım firmasına 2023 yılının Ocak ayında başlattıkları başlattıkları front-end staj programıyla başladım. 
            Bakanlık onaylı Petstok ve Eczastok projelerinde arayüz tasarımlarını koda döktüm. Agile kanban metodolojisi ile yazılım süreçlerini tamamladım. Okulum örgün eğitime döndüğünden dolayı
            stajımı sonlandırmak zorunda kaldım.

          </Text>   
          
          <View style={styles.teknolojiContainer}>
            <Text style={styles.teknolojiBaslik}>
            Kullandığım Teknolojiler
          </Text>
          <Text style={styles.icerikTeknoloji}>
            Vue.js - Html - CSS - Boostrap - Resvonsiv Dizayn - JavaScript
          </Text> 
        </View>

           
          
        </View>

          <View style={styles.cizgi}/>


         <View style={styles.icerikAltContainer}>

      <Text style={styles.icerikBaslik}>
          Esbi Bilgisayar
          </Text>
          <Text style={styles.pozisyon}>
           Yazılım Geliştirici Stajyer
          </Text>
        
        <Text style={styles.icerikAciklama}>
            2023 Eylül - Ağustos ayları içerisinde üniversitemin bana zorunlu tuttuğu yazılım stajımı gerçekleştirdim. Staj süresince C# ve MSSQL kullanarak muhasebe uygulamalarında görev aldım. Stajımın sonunda komplike bir C# yazımıyla yurt otomasyon projesi oluşturdum.
            Stajımı başarılı şekilde tamamladım. Üniversiteme evraklarımı ilettim.
          </Text>   
          
          <View style={styles.teknolojiContainer}>
            <Text style={styles.teknolojiBaslik}>
            Kullandığım Teknolojiler
          </Text>
          <Text style={styles.icerikTeknoloji}>
            C# - Visual Studio - MSSQL - Logo Yazılım Veri Tabanları
          </Text> 
        </View>

           
          
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
    color: 'black',
    fontWeight:'bold'
  },
  icerikAciklama: {
    fontSize: 20,
    marginLeft:5
  },
  icerikTeknoloji: {
    fontSize: 20,
    marginLeft:5
  },
  teknolojiBaslik: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'cadetblue'
  },
  teknolojiContainer: {
    marginTop: 10,
  },
  pozisyon: {
    fontSize: 20,
    fontWeight: 'bold',
  }

})