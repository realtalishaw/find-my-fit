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
export declare type SizeChartUpdateFormInputValues = {
    brand?: string;
    category?: string;
    sub_category?: string;
};
export declare type SizeChartUpdateFormValidationValues = {
    brand?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    sub_category?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SizeChartUpdateFormOverridesProps = {
    SizeChartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    brand?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    sub_category?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SizeChartUpdateFormProps = React.PropsWithChildren<{
    overrides?: SizeChartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sizeChart?: any;
    onSubmit?: (fields: SizeChartUpdateFormInputValues) => SizeChartUpdateFormInputValues;
    onSuccess?: (fields: SizeChartUpdateFormInputValues) => void;
    onError?: (fields: SizeChartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SizeChartUpdateFormInputValues) => SizeChartUpdateFormInputValues;
    onValidate?: SizeChartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SizeChartUpdateForm(props: SizeChartUpdateFormProps): React.ReactElement;
