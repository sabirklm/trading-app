import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/CustomButton";
const StockDetailsScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="green" style="dark" />
      <ScrollView>
        <Text className="text-lg p-4 ">Styling just works! 🎉 </Text>

        <Text className="text-base p-4 font-mono">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <View className="p-4">
          <Text className="text-base font-mono">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>

          <View className="flex-row items-center justify-center">
            <CustomButton
              onPress={() => {
                setCount(count + 1);
              }}
              title="Increament+"
            />
            <Text className="text-4xl">{count}</Text>
            <CustomButton
              onPress={() => {
                setCount(count -1);
              }}
              title="Decreament-"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StockDetailsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    backgroundColor: "grey",
    borderRadius: 16,
    borderColor: "black",
  },
});
