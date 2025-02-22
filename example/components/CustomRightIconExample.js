import { Feather } from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { useRef } from "react";
import { useMemo } from "react";
import { Text, View } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { generateDataSet } from "../helpers";

export const CustomRightIconExample = memo(() => {
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownController = useRef(null);

  const dataSet = useMemo(generateDataSet, []);

  return (
    <View>
      <AutocompleteDropdown
        controller={(controller) => {
          dropdownController.current = controller;
        }}
        clearOnFocus={false}
        onSelectItem={setSelectedItem}
        dataSet={dataSet}
        direction="down"
        suggestionsListMaxHeight={200}
        renderItem={(item, text) => (
          <Text
            style={{
              color: "#f00",
              padding: 28,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            -= {item.title} =-
          </Text>
        )}
        RightIconComponent={<Feather name="smile" size={18} color="#f55" />}
        onRightIconComponentPress={() => {
          dropdownController.current?.toggle();
        }}
        showChevron={false}
      />
      <Text style={{ color: "#668", fontSize: 13 }}>
        Selected item: {JSON.stringify(selectedItem)}
      </Text>
    </View>
  );
});
