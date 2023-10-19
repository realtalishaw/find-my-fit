/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getFabricProperties } from "../graphql/queries";
import { updateFabricProperties } from "../graphql/mutations";
export default function FabricPropertiesUpdateForm(props) {
  const {
    id: idProp,
    fabricProperties: fabricPropertiesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fabricName: "",
    elasticity: "",
    bounce: "",
  };
  const [fabricName, setFabricName] = React.useState(initialValues.fabricName);
  const [elasticity, setElasticity] = React.useState(initialValues.elasticity);
  const [bounce, setBounce] = React.useState(initialValues.bounce);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fabricPropertiesRecord
      ? { ...initialValues, ...fabricPropertiesRecord }
      : initialValues;
    setFabricName(cleanValues.fabricName);
    setElasticity(cleanValues.elasticity);
    setBounce(cleanValues.bounce);
    setErrors({});
  };
  const [fabricPropertiesRecord, setFabricPropertiesRecord] = React.useState(
    fabricPropertiesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getFabricProperties.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getFabricProperties
        : fabricPropertiesModelProp;
      setFabricPropertiesRecord(record);
    };
    queryData();
  }, [idProp, fabricPropertiesModelProp]);
  React.useEffect(resetStateValues, [fabricPropertiesRecord]);
  const validations = {
    fabricName: [{ type: "Required" }],
    elasticity: [],
    bounce: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          fabricName,
          elasticity: elasticity ?? null,
          bounce: bounce ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateFabricProperties.replaceAll("__typename", ""),
            variables: {
              input: {
                id: fabricPropertiesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "FabricPropertiesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fabric name"
        isRequired={true}
        isReadOnly={false}
        value={fabricName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fabricName: value,
              elasticity,
              bounce,
            };
            const result = onChange(modelFields);
            value = result?.fabricName ?? value;
          }
          if (errors.fabricName?.hasError) {
            runValidationTasks("fabricName", value);
          }
          setFabricName(value);
        }}
        onBlur={() => runValidationTasks("fabricName", fabricName)}
        errorMessage={errors.fabricName?.errorMessage}
        hasError={errors.fabricName?.hasError}
        {...getOverrideProps(overrides, "fabricName")}
      ></TextField>
      <TextField
        label="Elasticity"
        isRequired={false}
        isReadOnly={false}
        value={elasticity}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fabricName,
              elasticity: value,
              bounce,
            };
            const result = onChange(modelFields);
            value = result?.elasticity ?? value;
          }
          if (errors.elasticity?.hasError) {
            runValidationTasks("elasticity", value);
          }
          setElasticity(value);
        }}
        onBlur={() => runValidationTasks("elasticity", elasticity)}
        errorMessage={errors.elasticity?.errorMessage}
        hasError={errors.elasticity?.hasError}
        {...getOverrideProps(overrides, "elasticity")}
      ></TextField>
      <TextField
        label="Bounce"
        isRequired={false}
        isReadOnly={false}
        value={bounce}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fabricName,
              elasticity,
              bounce: value,
            };
            const result = onChange(modelFields);
            value = result?.bounce ?? value;
          }
          if (errors.bounce?.hasError) {
            runValidationTasks("bounce", value);
          }
          setBounce(value);
        }}
        onBlur={() => runValidationTasks("bounce", bounce)}
        errorMessage={errors.bounce?.errorMessage}
        hasError={errors.bounce?.hasError}
        {...getOverrideProps(overrides, "bounce")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fabricPropertiesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fabricPropertiesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
