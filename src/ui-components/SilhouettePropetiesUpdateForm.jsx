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
import { getSilhouettePropeties } from "../graphql/queries";
import { updateSilhouettePropeties } from "../graphql/mutations";
export default function SilhouettePropetiesUpdateForm(props) {
  const {
    id: idProp,
    silhouettePropeties: silhouettePropetiesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    silhouette: "",
  };
  const [silhouette, setSilhouette] = React.useState(initialValues.silhouette);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = silhouettePropetiesRecord
      ? { ...initialValues, ...silhouettePropetiesRecord }
      : initialValues;
    setSilhouette(cleanValues.silhouette);
    setErrors({});
  };
  const [silhouettePropetiesRecord, setSilhouettePropetiesRecord] =
    React.useState(silhouettePropetiesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getSilhouettePropeties.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getSilhouettePropeties
        : silhouettePropetiesModelProp;
      setSilhouettePropetiesRecord(record);
    };
    queryData();
  }, [idProp, silhouettePropetiesModelProp]);
  React.useEffect(resetStateValues, [silhouettePropetiesRecord]);
  const validations = {
    silhouette: [{ type: "Required" }],
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
          silhouette,
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
            query: updateSilhouettePropeties.replaceAll("__typename", ""),
            variables: {
              input: {
                id: silhouettePropetiesRecord.id,
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
      {...getOverrideProps(overrides, "SilhouettePropetiesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Silhouette"
        isRequired={true}
        isReadOnly={false}
        value={silhouette}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              silhouette: value,
            };
            const result = onChange(modelFields);
            value = result?.silhouette ?? value;
          }
          if (errors.silhouette?.hasError) {
            runValidationTasks("silhouette", value);
          }
          setSilhouette(value);
        }}
        onBlur={() => runValidationTasks("silhouette", silhouette)}
        errorMessage={errors.silhouette?.errorMessage}
        hasError={errors.silhouette?.hasError}
        {...getOverrideProps(overrides, "silhouette")}
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
          isDisabled={!(idProp || silhouettePropetiesModelProp)}
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
              !(idProp || silhouettePropetiesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
