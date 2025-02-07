import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StockFormData, schema } from "../../schema/zod";
import RequiredForm from "@/components/create_stock/Required";

import { View, ScrollView } from "react-native";
import { Button, Text } from "react-native-paper";
import OptionalForm from "@/components/create_stock/optional/Optional";

const CreateStock = () => {
  const [stockType, setStockType] = useState("");

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Datos recibidos del formulario:", data);

    let stockData;

    if (stockType === "packs") {
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

    const formData = new FormData();
    formData.append("uniqueCode", data.uniqueCode);
    formData.append("name", data.name);
    formData.append("salePrice", data.salePrice.toString());
    formData.append("category", data.category);
    formData.append("availability", data.availability.toString());
    formData.append("stock", JSON.stringify(stockData));

    if (data.image && data.image.length > 0) {
      formData.append("image", data.image[0]);
    }

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

    fetch("http://localhost:8086/create", {
      method: "POST",
      body: formData,
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
        <RequiredForm
          control={control}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />

        <Text variant="headlineLarge">Campos opcionales</Text>
        <OptionalForm />

        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
          Enviar
        </Button>
      </View>
    </ScrollView>
  );
};

export default CreateStock;
