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
import { getRecommendationRequest } from "../graphql/queries";
import { updateRecommendationRequest } from "../graphql/mutations";
export default function RecommendationRequestUpdateForm(props) {
  const {
    id: idProp,
    recommendationRequest: recommendationRequestModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userID: "",
    fit_preference: "",
    product_url: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [fit_preference, setFit_preference] = React.useState(
    initialValues.fit_preference
  );
  const [product_url, setProduct_url] = React.useState(
    initialValues.product_url
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recommendationRequestRecord
      ? { ...initialValues, ...recommendationRequestRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setFit_preference(cleanValues.fit_preference);
    setProduct_url(cleanValues.product_url);
    setErrors({});
  };
  const [recommendationRequestRecord, setRecommendationRequestRecord] =
    React.useState(recommendationRequestModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getRecommendationRequest.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRecommendationRequest
        : recommendationRequestModelProp;
      setRecommendationRequestRecord(record);
    };
    queryData();
  }, [idProp, recommendationRequestModelProp]);
  React.useEffect(resetStateValues, [recommendationRequestRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    fit_preference: [],
    product_url: [],
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
          userID,
          fit_preference: fit_preference ?? null,
          product_url: product_url ?? null,
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
            query: updateRecommendationRequest.replaceAll("__typename", ""),
            variables: {
              input: {
                id: recommendationRequestRecord.id,
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
      {...getOverrideProps(overrides, "RecommendationRequestUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID: value,
              fit_preference,
              product_url,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <TextField
        label="Fit preference"
        isRequired={false}
        isReadOnly={false}
        value={fit_preference}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fit_preference: value,
              product_url,
            };
            const result = onChange(modelFields);
            value = result?.fit_preference ?? value;
          }
          if (errors.fit_preference?.hasError) {
            runValidationTasks("fit_preference", value);
          }
          setFit_preference(value);
        }}
        onBlur={() => runValidationTasks("fit_preference", fit_preference)}
        errorMessage={errors.fit_preference?.errorMessage}
        hasError={errors.fit_preference?.hasError}
        {...getOverrideProps(overrides, "fit_preference")}
      ></TextField>
      <TextField
        label="Product url"
        isRequired={false}
        isReadOnly={false}
        value={product_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              fit_preference,
              product_url: value,
            };
            const result = onChange(modelFields);
            value = result?.product_url ?? value;
          }
          if (errors.product_url?.hasError) {
            runValidationTasks("product_url", value);
          }
          setProduct_url(value);
        }}
        onBlur={() => runValidationTasks("product_url", product_url)}
        errorMessage={errors.product_url?.errorMessage}
        hasError={errors.product_url?.hasError}
        {...getOverrideProps(overrides, "product_url")}
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
          isDisabled={!(idProp || recommendationRequestModelProp)}
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
              !(idProp || recommendationRequestModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
