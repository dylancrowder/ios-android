import React, { useState } from "react";
import { View, Text } from "react-native";
import { Controller } from "react-hook-form";
import { RadioButton, TextInput } from "react-native-paper";

type RequiredFormProps = {
  control: any;
};

const StockType: React.FC<RequiredFormProps> = ({ control }) => {
  const [stockType, setStockType] = useState("unidades");

  const handleStockTypeChange = (value: React.SetStateAction<string>) => {
    setStockType(value);
  };

  return (
    <View>
      <Text>Tipo de Unidad:</Text>
      <RadioButton.Group
        onValueChange={handleStockTypeChange}
        value={stockType}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="unidades" />
          <Text>Unidades</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="kilos" />
          <Text>Kilos</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton value="packs" />
          <Text>Packs</Text>
        </View>
      </RadioButton.Group>

      {stockType === "packs" ? (
        <View>
          <Text>Cantidad de Packs:</Text>
          <Controller
            control={control}
            name="stock.packDetails.packQuantity"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value?.toString()}
                disabled={stockType !== "packs"}
              />
            )}
          />

          <Text>Unidades por Pack:</Text>
          <Controller
            control={control}
            name="stock.packDetails.unitsPerPack"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value?.toString()}
                disabled={stockType !== "packs"}
              />
            )}
          />
        </View>
      ) : (
        <View>
          <Text>Cantidad:</Text>
          <Controller
            control={control}
            name="stock.unitQuantity"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                mode="outlined"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value?.toString()}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default StockType;
