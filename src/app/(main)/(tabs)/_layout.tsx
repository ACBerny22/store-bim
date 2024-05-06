import { Slot, Tabs } from "expo-router";
import HomeHeader from "../../../components/headers/HomeHeader";
import { Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useCartStore } from "../../../lib/store";

export default function App() {
    const { countItems } = useCartStore();
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
                name="(line)"
                options={{
                    title: "Home",
                    tabBarActiveTintColor: "#542678",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={30} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "Cart",
                    tabBarBadge: countItems(),
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
