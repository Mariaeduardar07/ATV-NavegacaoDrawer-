import { View, TouchableOpacity, Text } from "react-native";
 import { useNavigation } from "@react-navigation/native";
 import Ionicons from "react-native-vector-icons/Ionicons";
 
 export default function HomeSecreen() {
     const navigation = useNavigation();
   return (
     <View style={styles.container}>
       <TouchableOpacity
       style={styles.button}
       onPress={()=> navigation.openDrawer()}
       >
         <Ionicons name="menu" size={24} color="black" />
 
       </TouchableOpacity>
 
       <View>
         <Text>Seja Bem Vindo!</Text>
         <Text>Aqui temos uma tela Home! 🙌.</Text>
       </View>
     </View>
   );
 }
 
 const styles = {
     container: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
     },
 
     button: {
         backgroundColor: "#b51b42",
         padding: 10,
         borderRadius: 5,
        
     }
 }