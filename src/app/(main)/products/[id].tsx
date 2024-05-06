import { Text, TouchableOpacity, View } from "react-native";
import { Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useCartStore } from "../../../lib/store";
import { useQuery } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

async function fetchProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
}

export default function App() {
    const { id } = useLocalSearchParams();
    const { content, addItem } = useCartStore();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchProduct(id as string),
    });

    const showToast = () => {
        Toast.show({
            type: "success",
            text1: "Product added to your cart",
            text2: "The product has been succesfully added 👋",
        });
    };

    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView className="p-5 flex  bg-white" style={{ gap: 10 }}>
            <View className="flex justify-center items-center">
                <Image
                    source={{
                        uri: data.image,
                    }}
                    style={{ width: 350, height: 500 }}
                    resizeMode="contain"
                ></Image>
            </View>
            <View
                className="flex justify-start items-start mt-10"
                style={{ gap: 20 }}
            >
                <View className="flex justify-center items-center bg-zinc-950 py-2 px-5 rounded-xl">
                    <Text className="font-bold text-white">
                        {data.category}
                    </Text>
                </View>
                <View className="flex flex-col" style={{ gap: 20 }}>
                    <Text className="text-xl font-bold">{data.title}</Text>
                    <Text className="text-4xl">${data.price}</Text>
                </View>
            </View>
            <View className="flex mt-5" style={{ gap: 20 }}>
                <TouchableOpacity
                    className="p-3 bg-zinc-950  rounded-xl "
                    onPress={showToast}
                >
                    <Text className="text-white text-center text-lg">
                        Buy Now
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    className="p-3 rounded-xl border "
                    onPress={() => {
                        addItem(data);
                        showToast();
                    }}
                >
                    <Text className="text-center text-lg">Add To Cart</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text className="text-left font-bold text-lg mt-10">
                    Description:
                </Text>
                <Text className="text-left">{data.description}</Text>
            </View>
        </ScrollView>
    );
}
