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
export declare type SizeChartCreateFormInputValues = {
    brand?: string;
    category?: string;
    sub_category?: string;
};
export declare type SizeChartCreateFormValidationValues = {
    brand?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    sub_category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SizeChartCreateFormOverridesProps = {
    SizeChartCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    sub_category?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SizeChartCreateFormProps = React.PropsWithChildren<{
    overrides?: SizeChartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SizeChartCreateFormInputValues) => SizeChartCreateFormInputValues;
    onSuccess?: (fields: SizeChartCreateFormInputValues) => void;
    onError?: (fields: SizeChartCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SizeChartCreateFormInputValues) => SizeChartCreateFormInputValues;
    onValidate?: SizeChartCreateFormValidationValues;
} & React.CSSProperties>;
export default function SizeChartCreateForm(props: SizeChartCreateFormProps): React.ReactElement;
