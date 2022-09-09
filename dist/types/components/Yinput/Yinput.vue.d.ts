import type { HTMLInputTypeAttribute } from '~/components/Yinput/input.types';
declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    inputType: {
        type: () => HTMLInputTypeAttribute;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    isError: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    hint: {
        type: StringConstructor;
        default: null;
    };
    inputIcon: {
        type: StringConstructor;
        default: null;
    };
    canReset: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reset" | "update:modelValue")[], "reset" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: StringConstructor;
    inputType: {
        type: () => HTMLInputTypeAttribute;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: null;
    };
    isError: {
        type: BooleanConstructor;
        default: boolean;
    };
    label: {
        type: StringConstructor;
        default: null;
    };
    hint: {
        type: StringConstructor;
        default: null;
    };
    inputIcon: {
        type: StringConstructor;
        default: null;
    };
    canReset: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onReset?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    inputType: HTMLInputTypeAttribute;
    placeholder: string;
    isError: boolean;
    hint: string;
    inputIcon: string;
    canReset: boolean;
}>;
export default _default;
