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
import { getMeasurements } from "../graphql/queries";
import { updateMeasurements } from "../graphql/mutations";
export default function MeasurementsUpdateForm(props) {
  const {
    id: idProp,
    measurements: measurementsModelProp,
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
    bust: "",
    waist: "",
    hips: "",
    shoulder_width: "",
    left_thigh: "",
    left_arm: "",
    right_arm: "",
    height: "",
    weight: "",
  };
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [bust, setBust] = React.useState(initialValues.bust);
  const [waist, setWaist] = React.useState(initialValues.waist);
  const [hips, setHips] = React.useState(initialValues.hips);
  const [shoulder_width, setShoulder_width] = React.useState(
    initialValues.shoulder_width
  );
  const [left_thigh, setLeft_thigh] = React.useState(initialValues.left_thigh);
  const [left_arm, setLeft_arm] = React.useState(initialValues.left_arm);
  const [right_arm, setRight_arm] = React.useState(initialValues.right_arm);
  const [height, setHeight] = React.useState(initialValues.height);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = measurementsRecord
      ? { ...initialValues, ...measurementsRecord }
      : initialValues;
    setUserID(cleanValues.userID);
    setBust(cleanValues.bust);
    setWaist(cleanValues.waist);
    setHips(cleanValues.hips);
    setShoulder_width(cleanValues.shoulder_width);
    setLeft_thigh(cleanValues.left_thigh);
    setLeft_arm(cleanValues.left_arm);
    setRight_arm(cleanValues.right_arm);
    setHeight(cleanValues.height);
    setWeight(cleanValues.weight);
    setErrors({});
  };
  const [measurementsRecord, setMeasurementsRecord] = React.useState(
    measurementsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getMeasurements.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMeasurements
        : measurementsModelProp;
      setMeasurementsRecord(record);
    };
    queryData();
  }, [idProp, measurementsModelProp]);
  React.useEffect(resetStateValues, [measurementsRecord]);
  const validations = {
    userID: [{ type: "Required" }],
    bust: [{ type: "Required" }],
    waist: [{ type: "Required" }],
    hips: [{ type: "Required" }],
    shoulder_width: [],
    left_thigh: [],
    left_arm: [],
    right_arm: [],
    height: [],
    weight: [],
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
          bust,
          waist,
          hips,
          shoulder_width: shoulder_width ?? null,
          left_thigh: left_thigh ?? null,
          left_arm: left_arm ?? null,
          right_arm: right_arm ?? null,
          height: height ?? null,
          weight: weight ?? null,
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
            query: updateMeasurements.replaceAll("__typename", ""),
            variables: {
              input: {
                id: measurementsRecord.id,
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
      {...getOverrideProps(overrides, "MeasurementsUpdateForm")}
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
              bust,
              waist,
              hips,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm,
              height,
              weight,
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
        label="Bust"
        isRequired={true}
        isReadOnly={false}
        value={bust}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust: value,
              waist,
              hips,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.bust ?? value;
          }
          if (errors.bust?.hasError) {
            runValidationTasks("bust", value);
          }
          setBust(value);
        }}
        onBlur={() => runValidationTasks("bust", bust)}
        errorMessage={errors.bust?.errorMessage}
        hasError={errors.bust?.hasError}
        {...getOverrideProps(overrides, "bust")}
      ></TextField>
      <TextField
        label="Waist"
        isRequired={true}
        isReadOnly={false}
        value={waist}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist: value,
              hips,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.waist ?? value;
          }
          if (errors.waist?.hasError) {
            runValidationTasks("waist", value);
          }
          setWaist(value);
        }}
        onBlur={() => runValidationTasks("waist", waist)}
        errorMessage={errors.waist?.errorMessage}
        hasError={errors.waist?.hasError}
        {...getOverrideProps(overrides, "waist")}
      ></TextField>
      <TextField
        label="Hips"
        isRequired={true}
        isReadOnly={false}
        value={hips}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips: value,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.hips ?? value;
          }
          if (errors.hips?.hasError) {
            runValidationTasks("hips", value);
          }
          setHips(value);
        }}
        onBlur={() => runValidationTasks("hips", hips)}
        errorMessage={errors.hips?.errorMessage}
        hasError={errors.hips?.hasError}
        {...getOverrideProps(overrides, "hips")}
      ></TextField>
      <TextField
        label="Shoulder width"
        isRequired={false}
        isReadOnly={false}
        value={shoulder_width}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips,
              shoulder_width: value,
              left_thigh,
              left_arm,
              right_arm,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.shoulder_width ?? value;
          }
          if (errors.shoulder_width?.hasError) {
            runValidationTasks("shoulder_width", value);
          }
          setShoulder_width(value);
        }}
        onBlur={() => runValidationTasks("shoulder_width", shoulder_width)}
        errorMessage={errors.shoulder_width?.errorMessage}
        hasError={errors.shoulder_width?.hasError}
        {...getOverrideProps(overrides, "shoulder_width")}
      ></TextField>
      <TextField
        label="Left thigh"
        isRequired={false}
        isReadOnly={false}
        value={left_thigh}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips,
              shoulder_width,
              left_thigh: value,
              left_arm,
              right_arm,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.left_thigh ?? value;
          }
          if (errors.left_thigh?.hasError) {
            runValidationTasks("left_thigh", value);
          }
          setLeft_thigh(value);
        }}
        onBlur={() => runValidationTasks("left_thigh", left_thigh)}
        errorMessage={errors.left_thigh?.errorMessage}
        hasError={errors.left_thigh?.hasError}
        {...getOverrideProps(overrides, "left_thigh")}
      ></TextField>
      <TextField
        label="Left arm"
        isRequired={false}
        isReadOnly={false}
        value={left_arm}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips,
              shoulder_width,
              left_thigh,
              left_arm: value,
              right_arm,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.left_arm ?? value;
          }
          if (errors.left_arm?.hasError) {
            runValidationTasks("left_arm", value);
          }
          setLeft_arm(value);
        }}
        onBlur={() => runValidationTasks("left_arm", left_arm)}
        errorMessage={errors.left_arm?.errorMessage}
        hasError={errors.left_arm?.hasError}
        {...getOverrideProps(overrides, "left_arm")}
      ></TextField>
      <TextField
        label="Right arm"
        isRequired={false}
        isReadOnly={false}
        value={right_arm}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm: value,
              height,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.right_arm ?? value;
          }
          if (errors.right_arm?.hasError) {
            runValidationTasks("right_arm", value);
          }
          setRight_arm(value);
        }}
        onBlur={() => runValidationTasks("right_arm", right_arm)}
        errorMessage={errors.right_arm?.errorMessage}
        hasError={errors.right_arm?.hasError}
        {...getOverrideProps(overrides, "right_arm")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        value={height}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm,
              height: value,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        value={weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userID,
              bust,
              waist,
              hips,
              shoulder_width,
              left_thigh,
              left_arm,
              right_arm,
              height,
              weight: value,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
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
          isDisabled={!(idProp || measurementsModelProp)}
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
              !(idProp || measurementsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
