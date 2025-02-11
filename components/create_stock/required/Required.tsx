import React from "react";
import { Controller } from "react-hook-form";
import { View, Text } from "react-native";
import { TextInput, Switch } from "react-native-paper";
import StockType from "./atoms/StockType";

// Tipado de las props del componente
type RequiredFormProps = {
  control: any;
  errors: any;
  setValue: any;
  watch: any;
};

// Componente con tipado aplicado
export const Required: React.FC<RequiredFormProps> = ({
  control,
  errors,
  setValue,
  watch,
}) => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre:</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                marginBottom: 5,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.name && (
              <Text style={{ color: "red" }}>{errors.name.message}</Text>
            )}
          </>
        )}
      />

      <Text>Código Único:</Text>
      <Controller
        control={control}
        name="uniqueCode"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                marginBottom: 5,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.uniqueCode && (
              <Text style={{ color: "red" }}>{errors.uniqueCode.message}</Text>
            )}
          </>
        )}
      />

      <Text>Precio de Venta:</Text>
      <Controller
        control={control}
        name="salePrice"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                marginBottom: 5,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
            {errors.salePrice && (
              <Text style={{ color: "red" }}>{errors.salePrice.message}</Text>
            )}
          </>
        )}
      />

      <Text>Categoría:</Text>
      <Controller
        control={control}
        name="category"
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                marginBottom: 5,
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            {errors.category && (
              <Text style={{ color: "red" }}>{errors.category.message}</Text>
            )}
          </>
        )}
      />

      <StockType
        control={control}
        errors={errors}
        setValue={setValue}

      />

      <Text>Disponibilidad:</Text>
      <Controller
        control={control}
        name="availability"
        render={({ field: { onChange, value } }) => (
          <Switch value={value} onValueChange={onChange} />
        )}
      />
    </View>
  );
};
