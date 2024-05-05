import { Slot, Tabs } from "expo-router";
import HomeHeader from "../../../components/HomeHeader";

function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: true,
                    header: () => <HomeHeader />,
                }}
            />
            <Tabs.Screen name="cart" />
            <Tabs.Screen name="user" />
        </Tabs>
    );
}

export default function App() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="user"
                options={{
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
