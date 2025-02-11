import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Switch, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";
import { Barcode } from "./atoms/Barcode";
import { Images } from "./atoms/Images";
import { Supplier } from "./atoms/Supplier";

interface OptionalFormProps {
  errors: any;
  control: any;
  setValue: any;
}

const OptionalForm: React.FC<OptionalFormProps> = ({
  errors,
  control,
  setValue,
}) => {
  interface DisabledFields {
    barcode: boolean;
    image: boolean;
    color: boolean;
    supplier: boolean;
    model: boolean;
    capacity: boolean;
    purchasePrice: boolean;
    manufactureDate: boolean;
    discount: boolean;
    description: boolean;
  }

  const [disabledFields, setDisabledFields] = useState<DisabledFields>({
    barcode: true,
    image: true,
    color: true,
    supplier: true,
    model: true,
    capacity: true,
    purchasePrice: true,
    manufactureDate: true,
    discount: true,
    description: true,
  });

  const handleSwitchChange = (field: keyof DisabledFields) => {
    setDisabledFields((prevState) => {
      const newState = { ...prevState, [field]: !prevState[field] };

      if (newState[field] === true) {
        setValue(field, "", { shouldValidate: false });
      }

      return newState;
    });
  };

  useEffect(() => {
    // Este efecto se ejecuta cuando disabledFields cambia
    // Aquí puedes agregar lógica adicional si lo necesitas
  }, [disabledFields]);

  return (
    <View style={styles.container}>
      {/* Código de Barras */}
      <Barcode />

      {/* Fecha de Fabricación */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Fecha de Fabricación:</Text>
        {!disabledFields.manufactureDate && (
          <Controller
            control={control}
            name="manufactureDate"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={styles.input}
                placeholder="YYYY-MM-DD"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.manufactureDate && (
          <Text style={styles.errorText}>{errors.manufactureDate.message}</Text>
        )}
        <Switch
          value={!disabledFields.manufactureDate}
          onValueChange={() => handleSwitchChange("manufactureDate")}
        />
      </View>

      {/* Imágenes */}
      <Images />

      {/* Color */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Color:</Text>
        {!disabledFields.color && (
          <Controller
            control={control}
            name="color"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={styles.input}
                placeholder="Color"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.color && (
          <Text style={styles.errorText}>{errors.color.message}</Text>
        )}
        <Switch
          value={!disabledFields.color}
          onValueChange={() => handleSwitchChange("color")}
        />
      </View>

      {/* Proveedor */}
      <Supplier />

      {/* Modelo */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Modelo:</Text>
        {!disabledFields.model && (
          <Controller
            control={control}
            name="model"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={styles.input}
                placeholder="Modelo"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.model && (
          <Text style={styles.errorText}>{errors.model.message}</Text>
        )}
        <Switch
          value={!disabledFields.model}
          onValueChange={() => handleSwitchChange("model")}
        />
      </View>

      {/* Capacidad */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Capacidad:</Text>
        {!disabledFields.capacity && (
          <Controller
            control={control}
            name="capacity"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={styles.input}
                placeholder="Capacidad"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.capacity && (
          <Text style={styles.errorText}>{errors.capacity.message}</Text>
        )}
        <Switch
          value={!disabledFields.capacity}
          onValueChange={() => handleSwitchChange("capacity")}
        />
      </View>

      {/* Precio de Compra */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Precio de Compra:</Text>
        {!disabledFields.purchasePrice && (
          <Controller
            control={control}
            name="purchasePrice"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Precio"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.purchasePrice && (
          <Text style={styles.errorText}>{errors.purchasePrice.message}</Text>
        )}
        <Switch
          value={!disabledFields.purchasePrice}
          onValueChange={() => handleSwitchChange("purchasePrice")}
        />
      </View>

      {/* Descuento */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descuento (%):</Text>
        {!disabledFields.discount && (
          <Controller
            control={control}
            name="discount"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="%"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.discount && (
          <Text style={styles.errorText}>{errors.discount.message}</Text>
        )}
        <Switch
          value={!disabledFields.discount}
          onValueChange={() => handleSwitchChange("discount")}
        />
      </View>

      {/* Descripción */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descripción:</Text>
        {!disabledFields.description && (
          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value = "" } }) => (
              <TextInput
                style={[styles.input, styles.textArea]}
                multiline
                placeholder="Descripción"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        )}
        {errors?.description && (
          <Text style={styles.errorText}>{errors.description.message}</Text>
        )}
        <Switch
          value={!disabledFields.description}
          onValueChange={() => handleSwitchChange("description")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  inputContainer: { marginBottom: 10 },
  label: { fontWeight: "bold", marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 4,
  },
  textArea: { height: 80 },
  errorText: { color: "red", fontSize: 12 },
});

export default OptionalForm;
