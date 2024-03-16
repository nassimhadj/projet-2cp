import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button , Image, TouchableOpacity} from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const  qrlogin = ({navigation})=>{
    const gotopage = () => {
        navigation.navigate('login'); // Navigate to AnotherPage
      };
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')
  




  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data) ;
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
 

  // Return the View
  return (
    <View style={styles.container}>
      <Image
style={styles.logo}
  source={require('./assets/create_a_logo_for_a_bracelet_wich_has_realtion_w 1.png')}
/>
<Text style ={styles.welcome}>Welcome!</Text>
<Text style ={styles.text}>scan your QR code</Text>
      
<View style={styles.barcodescanner}> 
<BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 300, width: 300 , }} />
          </View>
       
      
      

      <TouchableOpacity style={styles.butto} activeOpacity={0.8} onPress={gotopage} >
        <Text style={styles.texto}>try another method</Text>
      </TouchableOpacity>
<View style={styles.line}/>
<Text  style={{alignSelf:'center',marginTop:15,fontSize:20}}>CONTACT US : 0657-082-317</Text>
    </View>
  );
};

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
    marginTop:15,
    alignSelf:'center',
    fontWeight :'500',
    fontSize: 20 ,
    } ,
    barcodescanner:{
      alignSelf:'center',
      marginTop : 20 ,
      
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
export default qrlogin ;