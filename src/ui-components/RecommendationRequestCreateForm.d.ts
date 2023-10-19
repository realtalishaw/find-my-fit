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
export declare type RecommendationRequestCreateFormInputValues = {
    userID?: string;
    fit_preference?: string;
    product_url?: string;
};
export declare type RecommendationRequestCreateFormValidationValues = {
    userID?: ValidationFunction<string>;
    fit_preference?: ValidationFunction<string>;
    product_url?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendationRequestCreateFormOverridesProps = {
    RecommendationRequestCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    fit_preference?: PrimitiveOverrideProps<TextFieldProps>;
    product_url?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecommendationRequestCreateFormProps = React.PropsWithChildren<{
    overrides?: RecommendationRequestCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecommendationRequestCreateFormInputValues) => RecommendationRequestCreateFormInputValues;
    onSuccess?: (fields: RecommendationRequestCreateFormInputValues) => void;
    onError?: (fields: RecommendationRequestCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecommendationRequestCreateFormInputValues) => RecommendationRequestCreateFormInputValues;
    onValidate?: RecommendationRequestCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecommendationRequestCreateForm(props: RecommendationRequestCreateFormProps): React.ReactElement;
