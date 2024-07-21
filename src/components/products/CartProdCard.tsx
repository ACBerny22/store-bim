import { Image, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useNavigation } from "expo-router";
import { router } from "expo-router";

interface CartCardProps {
    product: {
        id: number;
        title: string;
        image: string;
        price: number;
        rating: {
            rate: number;
            count: number;
        };
        quantity: number;
    };
}

export default function CartProdCard({ product }: CartCardProps) {
    return (
        <View
            className="flex flex-row  p-5 rounded-xl bg-white mb-5"
            style={{ gap: 12 }}
        >
            <View onTouchEnd={() => router.push("/products/" + product.id)}>
                <Image
                    source={{
                        uri: product.image,
                    }}
                    style={{ width: 120, height: 120 }}
                    resizeMode="contain"
                ></Image>
            </View>
            <View className="flex flex-col" style={{ gap: 20 }}>
                <View className="">
                    <Text className="text-lg font-semibold ">
                        {product.title.slice(0, 20)}
                    </Text>
                    <Text className="text-2xl text-start">
                        ${product.price}
                    </Text>
                    <Text
                        className="text-zinc-500 flex items-center justify-start"
                        style={{ gap: 5 }}
                    >
                        <AntDesign name="star" size={12} />
                        {product.rating.rate}
                    </Text>
                    <Text
                        className="text-zinc-500 flex items-center justify-start"
                        style={{ gap: 5 }}
                    >
                        Quantity: {product.quantity}
                    </Text>
                </View>
                <View className="flex">
                    <View className="">
                        <TouchableOpacity>
                            <Text className="text-rose-500">
                                Remove from cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
