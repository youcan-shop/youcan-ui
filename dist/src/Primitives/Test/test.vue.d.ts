declare const _default: import("vue/types/v3-component-public-instance").ComponentPublicInstanceConstructor<import("vue/types/v3-component-public-instance").Vue3Instance<{}, Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    name: String;
}>>>, Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    name: String;
}>>>, {}, {}, true, import("vue/types/v3-component-options").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>> & Readonly<Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    name: String;
}>>>> & import("vue-demi").ShallowUnwrapRef<{}> & import("vue/types/v3-component-options").ExtractComputedReturns<{}> & import("vue-demi").ComponentCustomProperties & Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    name: String;
}>>>, any, any, any, import("vue-demi").ComponentComputedOptions, import("vue-demi").ComponentMethodOptions> & import("vue/types/v3-component-options").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    name: String;
}>>>, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, {}> & {
    props: __VLS_TypePropsToRuntimeProps<{
        name: String;
    }>;
} & (new () => {
    $slots: typeof import('./test.vue.__VLS_template').default;
});
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
