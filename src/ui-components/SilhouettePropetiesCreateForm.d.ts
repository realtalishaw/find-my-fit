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
export declare type SilhouettePropetiesCreateFormInputValues = {
    silhouette?: string;
};
export declare type SilhouettePropetiesCreateFormValidationValues = {
    silhouette?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SilhouettePropetiesCreateFormOverridesProps = {
    SilhouettePropetiesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    silhouette?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SilhouettePropetiesCreateFormProps = React.PropsWithChildren<{
    overrides?: SilhouettePropetiesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SilhouettePropetiesCreateFormInputValues) => SilhouettePropetiesCreateFormInputValues;
    onSuccess?: (fields: SilhouettePropetiesCreateFormInputValues) => void;
    onError?: (fields: SilhouettePropetiesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SilhouettePropetiesCreateFormInputValues) => SilhouettePropetiesCreateFormInputValues;
    onValidate?: SilhouettePropetiesCreateFormValidationValues;
} & React.CSSProperties>;
export default function SilhouettePropetiesCreateForm(props: SilhouettePropetiesCreateFormProps): React.ReactElement;
