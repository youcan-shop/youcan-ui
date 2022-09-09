import { type GroupSelectItem } from '~/components/YGroupSelect/groupSelect.types';
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    selectedItem: GroupSelectItem | null;
    items: GroupSelectItem[];
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectOption"[], "selectOption", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    selectedItem: GroupSelectItem | null;
    items: GroupSelectItem[];
}>>> & {
    onSelectOption?: ((...args: any[]) => any) | undefined;
}, {}>;
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
