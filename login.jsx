import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet , Image, TouchableOpacity, TextInput} from 'react-native';


export default function App() {
  
const [ID , setID] = useState(0) ;
  

  // Request Camera Permission
 

  // What happens when we scan the bar code
 
  // Check permissions and return the screens
 

  // Return the View
  return (
    <View style={styles.container}>
      <Image
style={styles.logo}
  source={require('./assets/create_a_logo_for_a_bracelet_wich_has_realtion_w 1.png')}
/>
<Text style ={styles.welcome}>Welcome!</Text>
<Text style ={styles.text}>enter your bracelet ID</Text>
      <TextInput style={styles.inp} placeholder='bracelet ID' keyboardType='numeric' onChangeText={setID}/>

      

      <TouchableOpacity style={styles.butto} activeOpacity={0.8} onPress={() => setText('scanned')} >
        <Text style={styles.texto}>connect</Text>
      </TouchableOpacity>
<View style={styles.line}/>
<Text  style={{alignSelf:'center',marginTop:15,fontSize:20}}>CONTACT US : 0657-082-317</Text>
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
    flex : 1 ,
    
    
    },
    logo :{
    marginTop:40,
    alignSelf:'center',
    
    },
    welcome:{
    marginTop:0,
    alignSelf:'center',
    fontWeight :'300',
    fontSize: 50 ,
    },
    text:{
    marginTop:50,
    alignSelf:'center',
    fontWeight :'500',
    fontSize: 20 ,
    } ,
    inp:{
      alignSelf:'center',
      marginTop : 60 ,
      
      height:50,
      width:200,
      borderRadius:10,
      borderColor:'#383838',
      borderWidth:1,
      padding:10,
     
      
    },
    butto:{
    marginTop:30,  
    borderRadius:20,
    alignSelf:'center',
    backgroundColor:'black',
    paddingHorizontal:60,
   paddingVertical:10,
    },
    texto:{
      color :'white',
      fontSize:15,
      fontWeight:'bold',
    },
    line: {
      alignSelf:'center',
      borderBottomWidth: 1,
      borderBottomColor: 'black', // Change color as needed
      width: '95%', // Adjust width as needed
      marginTop: 100, 
      
    }
});