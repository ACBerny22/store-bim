import { Slot, Tabs } from "expo-router";
import HomeHeader from "../../../components/headers/HomeHeader";
import { Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    height: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: "bold",
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarActiveTintColor: "#542678",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={30} color={color} />
                    ),
                    headerShown: true,
                    header: () => <HomeHeader />,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarActiveTintColor: "#542678",
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={30}
                            color={color}
                        />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    title: "User",
                    tabBarActiveTintColor: "#542678",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
