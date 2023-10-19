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
export declare type FabricPropertiesUpdateFormInputValues = {
    fabricName?: string;
    elasticity?: string;
    bounce?: string;
};
export declare type FabricPropertiesUpdateFormValidationValues = {
    fabricName?: ValidationFunction<string>;
    elasticity?: ValidationFunction<string>;
    bounce?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FabricPropertiesUpdateFormOverridesProps = {
    FabricPropertiesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fabricName?: PrimitiveOverrideProps<TextFieldProps>;
    elasticity?: PrimitiveOverrideProps<TextFieldProps>;
    bounce?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FabricPropertiesUpdateFormProps = React.PropsWithChildren<{
    overrides?: FabricPropertiesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fabricProperties?: any;
    onSubmit?: (fields: FabricPropertiesUpdateFormInputValues) => FabricPropertiesUpdateFormInputValues;
    onSuccess?: (fields: FabricPropertiesUpdateFormInputValues) => void;
    onError?: (fields: FabricPropertiesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FabricPropertiesUpdateFormInputValues) => FabricPropertiesUpdateFormInputValues;
    onValidate?: FabricPropertiesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FabricPropertiesUpdateForm(props: FabricPropertiesUpdateFormProps): React.ReactElement;
