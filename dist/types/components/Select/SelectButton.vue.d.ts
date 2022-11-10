import type { SelectItem } from './types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    value?: SelectItem | undefined;
    placeholder?: String | undefined;
}>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, "click"[], string, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    value?: SelectItem | undefined;
    placeholder?: String | undefined;
}>>>, {}>;
export default _default;
declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
