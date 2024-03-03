import Upload from "./screens/Upload";
import Dompet from "./screens/Dompet";
import Profile from "./screens/Profile";
import { Icon } from 'react-native-elements'
import { Text, Platform, View, StatusBar, SafeAreaView } from "react-native"; // tambahkan SafeAreaView
import { NavigationContainer } from "@react-navigation/native";
import { LibraryStack } from "./tools/StackNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

// Variabel untuk menyimpan style yang sama
const tabIconStyle = {
  alignItems: "center",
  justifyContent: "center",
};

const tabIconBackground = (focused) => ({
  backgroundColor: focused ? "#D9EDC8" : "",
  width: 60,
  paddingVertical: 3,
  borderRadius: 50,
});

const tabTextStyle = (focused) => ({
  color: focused ? "#003502" : "#444746",
});

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    backgroundColor: "#F3FCF6",
    height: 80,
  },
};

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="Library"
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={tabIconStyle}>
                    <Icon
                      size={25}
                      style={[tabIconBackground(focused)]}
                      name="photo-library"
                      type="material"
                      color={focused ? "#003502" : "#444746"}
                    />
                    <Text style={tabTextStyle}>Beranda</Text>
                  </View>
                );
              },
            }}
            component={LibraryStack}
          />
          <Tab.Screen
            name="Dompet"
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View style={tabIconStyle}>
                    <Icon
                      size={25}
                      style={[tabIconBackground(focused)]}
                      name="wallet"
                      type="material"
                      color={focused ? "#003502" : "#444746"}
                    />
                    <Text style={tabTextStyle}>Dompet</Text>
                  </View>
                );
              },
            }}
            component={Dompet}
          />
          <Tab.Screen
            name="Albums"
            component={Upload}
            options={
              {
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={tabIconStyle}>
                      <Icon
                        size={25}
                        style={[tabIconBackground(focused)]}
                        name="add-photo-alternate"
                        type="material"
                        color={focused ? "#003502" : "#444746"}
                      />
                      <Text style={tabTextStyle}>Unggah</Text>
                    </View>
                  );
                },
              }
            } />
          <Tab.Screen
            name="Search"
            component={Profile}
            options={
              {
                tabBarIcon: ({ focused }) => {
                  return (
                    <View style={tabIconStyle}>
                      <Icon
                        size={25}
                        style={[tabIconBackground(focused)]}
                        name="person"
                        type="material"
                        color={focused ? "#003502" : "#444746"}
                      />
                      <Text style={tabTextStyle}>Profil</Text>
                    </View>
                  );
                },
              }
            }
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
