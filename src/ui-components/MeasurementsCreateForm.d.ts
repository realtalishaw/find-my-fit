/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MeasurementsCreateFormInputValues = {
    userID?: string;
    bust?: string;
    waist?: string;
    hips?: string;
    shoulder_width?: string;
    left_thigh?: string;
    left_arm?: string;
    right_arm?: string;
    height?: string;
    weight?: string;
};
export declare type MeasurementsCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    bust?: ValidationFunction<string>;
    waist?: ValidationFunction<string>;
    hips?: ValidationFunction<string>;
    shoulder_width?: ValidationFunction<string>;
    left_thigh?: ValidationFunction<string>;
    left_arm?: ValidationFunction<string>;
    right_arm?: ValidationFunction<string>;
    height?: ValidationFunction<string>;
    weight?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeasurementsCreateFormOverridesProps = {
    MeasurementsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    bust?: PrimitiveOverrideProps<TextFieldProps>;
    waist?: PrimitiveOverrideProps<TextFieldProps>;
    hips?: PrimitiveOverrideProps<TextFieldProps>;
    shoulder_width?: PrimitiveOverrideProps<TextFieldProps>;
    left_thigh?: PrimitiveOverrideProps<TextFieldProps>;
    left_arm?: PrimitiveOverrideProps<TextFieldProps>;
    right_arm?: PrimitiveOverrideProps<TextFieldProps>;
    height?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MeasurementsCreateFormProps = React.PropsWithChildren<{
    overrides?: MeasurementsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MeasurementsCreateFormInputValues) => MeasurementsCreateFormInputValues;
    onSuccess?: (fields: MeasurementsCreateFormInputValues) => void;
    onError?: (fields: MeasurementsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeasurementsCreateFormInputValues) => MeasurementsCreateFormInputValues;
    onValidate?: MeasurementsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MeasurementsCreateForm(props: MeasurementsCreateFormProps): React.ReactElement;
