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
export declare type FabricPropertiesCreateFormInputValues = {
    fabricName?: string;
    elasticity?: string;
    bounce?: string;
};
export declare type FabricPropertiesCreateFormValidationValues = {
    fabricName?: ValidationFunction<string>;
    elasticity?: ValidationFunction<string>;
    bounce?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FabricPropertiesCreateFormOverridesProps = {
    FabricPropertiesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fabricName?: PrimitiveOverrideProps<TextFieldProps>;
    elasticity?: PrimitiveOverrideProps<TextFieldProps>;
    bounce?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FabricPropertiesCreateFormProps = React.PropsWithChildren<{
    overrides?: FabricPropertiesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FabricPropertiesCreateFormInputValues) => FabricPropertiesCreateFormInputValues;
    onSuccess?: (fields: FabricPropertiesCreateFormInputValues) => void;
    onError?: (fields: FabricPropertiesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FabricPropertiesCreateFormInputValues) => FabricPropertiesCreateFormInputValues;
    onValidate?: FabricPropertiesCreateFormValidationValues;
} & React.CSSProperties>;
export default function FabricPropertiesCreateForm(props: FabricPropertiesCreateFormProps): React.ReactElement;
