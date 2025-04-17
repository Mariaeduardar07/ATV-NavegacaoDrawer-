import { Drawer } from "expo-router/drawer";
 import { Ionicons } from "@expo/vector-icons";
 import { GestureHandlerRootView } from "react-native-gesture-handler";
 
 export default function Layout() {
   return (
     <GestureHandlerRootView style={{ flex: 1 }}>
     <Drawer>
       <Drawer.Screen
         name="index"
         options={{
           title: "Início",
           drawerLabel: "Home",
           //   headerShown: false,
           //   headerLeft: true,
           drawerIcon: ({ size, color }) => (
             <Ionicons  name="home" size={size} color={color} />
           ),
         }}
       />
       <Drawer.Screen
         name="calculadora"
         options={{
           title: "Calculadora",
           drawerLabel: "Calculadora",
            //  headerShown: false,
            //  headerLeft: true,
           drawerIcon: ({ size, color }) => (
             <Ionicons name="home" size={size} color={color} />
           ),
         }}
       />

       <Drawer.Screen
         name="contador"
         options={{
           title: "Contado Simples",
           drawerLabel: "Contado Simples",
            //  headerShown: false,
            //  headerLeft: true,
           drawerIcon: ({ size, color }) => (
             <Ionicons name="home" size={size} color={color} />
           ),
         }}
       />

       <Drawer.Screen
         name="geradorSenha"
         options={{
           title: "Gerador de Senha",
           drawerLabel: "Gerador de Senha",
            //  headerShown: false,
            //  headerLeft: true,
           drawerIcon: ({ size, color }) => (
             <Ionicons name="home" size={size} color={color} />
           ),
         }}
       />
 
     </Drawer>
     </GestureHandlerRootView>
   );
 }