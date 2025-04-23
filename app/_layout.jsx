import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerActiveTintColor:'white',
            drawerActiveBackgroundColor:'#ff9ed2',
            title: "Início",
            drawerLabel: "Home",
            //   headerShown: false,
            //   headerLeft: true,
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="calculadora"
          options={{
            drawerActiveTintColor:'white',
            drawerActiveBackgroundColor:'#ff9ed2',
            title: "Calculadora",
            drawerLabel: "Calculadora",
            //  headerShown: false,
            //  headerLeft: true,
            drawerIcon: ({ size, color }) => (
              <SimpleLineIcons name="calculator" size={24} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="contador"
          options={{
            drawerActiveTintColor:'white',
            drawerActiveBackgroundColor:'#ff9ed2',
            title: "Contado Simples",
            drawerLabel: "Contado Simples",
            //  headerShown: false,
            //  headerLeft: true,
            drawerIcon: ({ size, color }) => (
                <Ionicons name="stopwatch-outline" size={25} color={color}></Ionicons>
            ),
          }}
        />

        <Drawer.Screen
          name="geradorSenha"
          options={{
            drawerActiveTintColor:'white',
            drawerActiveBackgroundColor:'#ff9ed2',
            title: "Gerador de Senha",
            drawerLabel: "Gerador de Senha",
            //  headerShown: false,
            //  headerLeft: true,
            drawerIcon: ({ size, color }) => (
              <Ionicons name="lock-closed-outline" size={25} color={color}></Ionicons>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
