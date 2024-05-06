import { Image, View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

interface PopProdCardProps {
    product: {
        id: number;
        title: string;
        image: string;
        price: number;
        rating: {
            rate: number;
            count: number;
        };
    };
}

export default function PopProdCard({ product }: PopProdCardProps) {
    return (
        <View
            className="flex flex-col justify-evenly items-center p-5 rounded-xl bg-white mr-5"
            style={{ gap: 18 }}
            key={product.id}
        >
            <View
                className="flex justify-center items-center"
                style={{ gap: 15 }}
            >
                <Image
                    source={{
                        uri: product.image,
                    }}
                    style={{
                        width: 120,
                        height: 150,
                    }}
                    resizeMode="contain"
                ></Image>
                <Text className="text-lg ">
                    {product.title.slice(0, 20)}
                </Text>
            </View>
            <View className="">
                <Text className="text-2xl text-center font-bold">${product.price}</Text>
                <Text
                    className="text-zinc-500 flex items-center justify-center text-center"
                    style={{ gap: 5 }}
                >
                    <AntDesign name="star" size={12} />
                    {product.rating.rate}
                </Text>
            </View>
            <View className="flex justify-center items-center">
                <TouchableOpacity>
                    <Text className="text-blue-500">Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
