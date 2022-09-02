declare const _default: {
    new (...args: any[]): {
        $: import("vue-demi").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
            name: String;
        }>>> & import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue-demi").Slot | undefined;
        }>;
        $root: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue-demi").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
            name: String;
        }>>>, {}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue-demi").DebuggerEvent) => void) | ((e: import("vue-demi").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue-demi").DebuggerEvent) => void) | ((e: import("vue-demi").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue-demi").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue-demi").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue-demi").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue-demi").WatchOptions<boolean> | undefined): import("vue-demi").WatchStopHandle;
    } & Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
        name: String;
    }>>> & import("vue-demi").ShallowUnwrapRef<{}> & {} & import("vue-demi").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue-demi").ComponentOptionsBase<Readonly<import("vue-demi").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    name: String;
}>>>, {}, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {}, string, {}> & import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps & (new () => {
    $slots: typeof import('./Test.vue.__VLS_template').default;
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
