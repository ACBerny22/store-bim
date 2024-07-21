import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCartStore } from "../../../lib/store";
import { FlatList } from "react-native";
import CartProdCard from "../../../components/products/CartProdCard";

function getTotalPrice(content: any) {
    let total = 0;
    content.forEach((item: any) => {
        total += item.price * item.quantity;
    });
    return total;
}

export default function App() {
    const { content } = useCartStore();

    const totalPrice = getTotalPrice(content);

    return (
        <SafeAreaView className="pt-5 px-3 flex-1 bg-zinc-100">
            <View className="flex-row justify-between items-end">
                <Text className="text-2xl font-bold">Cart</Text>
                <Text className="text-xl mt-5">
                    Total: <Text className="font-bold">${totalPrice}</Text>
                </Text>
            </View>
            {content && (
                <FlatList
                    style={{ flex: 1, marginTop: 20 }}
                    data={content}
                    renderItem={({ item }) => <CartProdCard product={item} />}
                    keyExtractor={(product) => product.id.toString()}
                ></FlatList>
            )}
        </SafeAreaView>
    );
}
