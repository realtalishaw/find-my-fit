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
export declare type MeasurementsUpdateFormInputValues = {
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
export declare type MeasurementsUpdateFormValidationValues = {
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
export declare type MeasurementsUpdateFormOverridesProps = {
    MeasurementsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type MeasurementsUpdateFormProps = React.PropsWithChildren<{
    overrides?: MeasurementsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    measurements?: any;
    onSubmit?: (fields: MeasurementsUpdateFormInputValues) => MeasurementsUpdateFormInputValues;
    onSuccess?: (fields: MeasurementsUpdateFormInputValues) => void;
    onError?: (fields: MeasurementsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeasurementsUpdateFormInputValues) => MeasurementsUpdateFormInputValues;
    onValidate?: MeasurementsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MeasurementsUpdateForm(props: MeasurementsUpdateFormProps): React.ReactElement;
