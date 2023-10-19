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
export declare type SilhouettePropetiesUpdateFormInputValues = {
    silhouette?: string;
};
export declare type SilhouettePropetiesUpdateFormValidationValues = {
    silhouette?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SilhouettePropetiesUpdateFormOverridesProps = {
    SilhouettePropetiesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    silhouette?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SilhouettePropetiesUpdateFormProps = React.PropsWithChildren<{
    overrides?: SilhouettePropetiesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    silhouettePropeties?: any;
    onSubmit?: (fields: SilhouettePropetiesUpdateFormInputValues) => SilhouettePropetiesUpdateFormInputValues;
    onSuccess?: (fields: SilhouettePropetiesUpdateFormInputValues) => void;
    onError?: (fields: SilhouettePropetiesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SilhouettePropetiesUpdateFormInputValues) => SilhouettePropetiesUpdateFormInputValues;
    onValidate?: SilhouettePropetiesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SilhouettePropetiesUpdateForm(props: SilhouettePropetiesUpdateFormProps): React.ReactElement;
