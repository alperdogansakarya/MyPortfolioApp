import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';




export default function MySkillScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.baslikContainer}>
        <Text style={styles.baslik}>Yeteneklerim</Text>
      </View>
      <View>

        <View style={styles.iconMainContainer}>
           
        <View style={styles.iconContainer}>
          
        <View style={styles.iconAltContainer}>
          <Image
          source={require('myapp/assets/img/vuejs.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>Vue.JS</Text>
            
            </View>  
            
            <View
            style={[styles.cizgi, styles.cizgi2]}
            />
        
        <View style={styles.iconAltContainer}>
         <Image
          source={require('myapp/assets/img/reactnative.png')}
          style={styles.image}
        />
              <Text style={styles.iconText}>React</Text>
              <Text style={styles.iconText}>Native</Text>
              
              
        </View>
      </View>

          

      <View style={styles.iconContainer}>
        <View style={styles.iconAltContainer}>
          <Image
          source={require('myapp/assets/img/javascript.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>JavaScript</Text>
        </View>
        
            <View
            style={styles.cizgi}
            />

        <View style={styles.iconAltContainer}>
         <Image
          source={require('myapp/assets/img/sql.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>MSSQL</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconAltContainer}>
          <Image
          source={require('myapp/assets/img/html.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>HTML 5</Text>
        </View>
        
            <View
            style={styles.cizgi}
            />

        <View style={styles.iconAltContainer}>
         <Image
          source={require('myapp/assets/img/css.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>CSS 3</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <View style={styles.iconAltContainer}>
          <Image
          source={require('myapp/assets/img/agile.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>Agile</Text>
        </View>
        
            <View
            style={styles.cizgi}
            />

        <View style={styles.iconAltContainer}>
          <Image
          source={require('myapp/assets/img/git.png')}
          style={styles.image}
        />
          <Text style={styles.iconText}>Git</Text>
        </View>
      </View>
      </View>  
     
      </View>
      
     




















    </View>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    backgroundColor: 'white'
  },
  iconMainContainer: {
    alignItems: 'center',
    backgroundColor:'white'
  },
  image: {
    marginVertical:6
  },
  cizgi: {
    width: 2,
    height: '90%',
    backgroundColor: 'grey',
    marginVertical: 5,
    marginHorizontal: 35,
    borderRadius:50
  },
  iconText: {
    textAlign: 'center',
    fontSize:20
  },
  baslik: {
    color:'cadetblue',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    
    
  },
  Container: {
    backgroundColor: 'white'
  },



})