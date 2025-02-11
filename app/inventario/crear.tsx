import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StockFormData, schema } from "../../schema/zod";

import { View, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";

import { Required } from "@/components/create_stock/required/Required";
import OptionalForm from "@/components/create_stock/optional/Optional";

const CreateStock = () => {
  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Datos recibidos del formulario:", data);

    let stockData;

    // Crear stockData dependiendo del tipo de stock (packs o unidades)
    if (data.stock.unitType === "packs") {
      stockData = {
        unitType: data.stock.unitType,
        packDetails: {
          packQuantity: data.stock.packDetails?.packQuantity,
          unitsPerPack: data.stock.packDetails?.unitsPerPack,
        },
      };
    } else {
      stockData = {
        unitType: data.stock.unitType,
        unitQuantity: data.stock.unitQuantity,
      };
    }

    // Crear FormData para enviar los datos
    const formData = new FormData();
    formData.append("uniqueCode", data.uniqueCode);
    formData.append("name", data.name);
    formData.append("salePrice", data.salePrice.toString());
    formData.append("category", data.category);
    formData.append("availability", data.availability.toString());
    formData.append("stock", JSON.stringify(stockData)); // Convertir stockData a string antes de enviarlo

    // Si hay imagen seleccionada, agregarla a FormData
    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]); // Solo se envía la primera imagen
    }

    // Agregar campos opcionales al FormData si están presentes
    if (data.barcode) formData.append("barcode", data.barcode);
    if (data.expirationDate)
      formData.append("expirationDate", data.expirationDate);
    if (data.supplier) formData.append("supplier", data.supplier);
    if (data.color) formData.append("color", data.color);
    if (data.size) formData.append("size", JSON.stringify(data.size));
    if (data.model) formData.append("model", data.model);
    if (data.stockAlert)
      formData.append("stockAlert", data.stockAlert.toString());
    if (data.capacity) formData.append("capacity", data.capacity);
    if (data.purchasePrice)
      formData.append("purchasePrice", data.purchasePrice.toString());
    if (data.description) formData.append("description", data.description);
    if (data.discount) formData.append("discount", data.discount.toString());
    if (data.manufactureDate)
      formData.append("manufactureDate", data.manufactureDate);

    // Verificar el contenido de FormData antes de enviarlo
    console.log("Contenido de FormData antes de enviar:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value); // Esto debería imprimir cada clave y valor
    }

    // Enviar los datos al servidor
    fetch("http://10.0.2.2:8086/create", {
      method: "POST",
      body: formData, // Enviamos FormData
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Respuesta del servidor:", result);
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
  };

  return (
    <ScrollView>
      <View>
        <Text variant="headlineLarge">Formulario registro de stock</Text>
        <Required
          control={control}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />

        <Text variant="headlineLarge">Campos opcionales</Text>
        <OptionalForm errors={errors} control={control} setValue={setValue} />

        <Button
          mode="contained"
          onPress={() => {
            console.log("Errores actuales:", errors);
            handleSubmit(onSubmit)();
          }}
        >
          Enviar
        </Button>
      </View>
    </ScrollView>
  );
};

export default CreateStock;
