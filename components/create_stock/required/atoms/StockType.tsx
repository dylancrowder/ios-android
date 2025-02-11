import React from "react";
import { View, Text } from "react-native";
import { Controller, useWatch } from "react-hook-form";
import { RadioButton, TextInput } from "react-native-paper";

type RequiredFormProps = {
  control: any;
  errors: any;
  setValue: any;
};

const StockType: React.FC<RequiredFormProps> = ({
  control,
  errors,
  setValue,
}) => {
  const unitType = useWatch({ control, name: "stock.unitType" });

  return (
    <View>
      <Text>Tipo de Unidad:</Text>
      <Controller
        control={control}
        name="stock.unitType"
        rules={{ required: "El tipo de unidad es requerido" }}
        render={({ field: { value, onChange } }) => (
          <RadioButton.Group
            onValueChange={(newValue) => {
              onChange(newValue);
              setValue("stock.unitQuantity", "0"); // Reinicia la cantidad
              setValue("stock.packDetails.packQuantity", "0"); // Reinicia packs
              setValue("stock.packDetails.unitsPerPack", "0"); // Reinicia unidades por pack
            }}
            value={value || "unidades"}
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
        )}
      />
      {errors?.stock?.unitType && (
        <Text style={{ color: "red" }}>{errors.stock.unitType.message}</Text>
      )}

      {/* Mostrar inputs dinámicamente según la selección */}
      {unitType === "packs" ? (
        <View>
          <Text>Cantidad de Packs:</Text>
          <Controller
            control={control}
            name="stock.packDetails.packQuantity"
            rules={{ required: "La cantidad de packs es requerida" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ""}
                />
                {errors?.stock?.packDetails?.packQuantity && (
                  <Text style={{ color: "red" }}>
                    {errors.stock.packDetails.packQuantity.message}
                  </Text>
                )}
              </>
            )}
          />

          <Text>Unidades por Pack:</Text>
          <Controller
            control={control}
            name="stock.packDetails.unitsPerPack"
            rules={{ required: "Las unidades por pack son requeridas" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ""}
                />
                {errors?.stock?.packDetails?.unitsPerPack && (
                  <Text style={{ color: "red" }}>
                    {errors.stock.packDetails.unitsPerPack.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>
      ) : (
        <View>
          <Text>Cantidad:</Text>
          <Controller
            control={control}
            name="stock.unitQuantity"
            rules={{ required: "La cantidad es requerida" }}
            render={({ field: { onChange, onBlur, value } }) => (
              <>
                <TextInput
                  mode="outlined"
                  keyboardType="numeric"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value ? value.toString() : ""}
                />
                {errors?.stock?.unitQuantity && (
                  <Text style={{ color: "red" }}>
                    {errors.stock.unitQuantity.message}
                  </Text>
                )}
              </>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default StockType;
