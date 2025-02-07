import React from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

// Definir el tipo de los datos del formulario
type FormData = {
  name: string;
};

type RequiredFormProps = {
  control: any;
  handleSubmit: any;
  onSubmit: (data: FormData) => void;
};

const RequiredForm = ({
  control,
  handleSubmit,
  onSubmit,
}: RequiredFormProps) => {
  return (
    <View>
      <Text>Nombre:</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
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
        )}
      />
      <Button onPress={handleSubmit(onSubmit)}>Enviar</Button>
    </View>
  );
};

export default RequiredForm;
