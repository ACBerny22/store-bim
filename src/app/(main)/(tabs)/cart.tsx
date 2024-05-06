import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartStore } from "../../../lib/store";
import ProdCard from "../../../components/products/ProdCard";
import { FlatList } from "react-native";

export default function App() {
    const { content, addItem } = useCartStore();

    return (
        <SafeAreaView className="pt-5 px-3 flex-1">
            <Text className="text-2xl font-bold">Cart</Text>
            {content && (
                <FlatList
                    style={{ flex: 1, marginTop: 20 }}
                    data={content}
                    renderItem={({ item }) => <ProdCard product={item} />}
                    keyExtractor={(product) => product.id.toString()}
                ></FlatList>
            )}
        </SafeAreaView>
    );
}
