(function(h,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(h=typeof globalThis<"u"?globalThis:h||self,e(h["youcan-ui"]={},h.Vue))})(this,function(h,e){"use strict";var S=document.createElement("style");S.textContent=`@import"https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap";.input[data-v-ef8f9c89]{width:100%;border:1px solid var(--border-color);height:48px;border-radius:8px;padding:0 16px;color:var(--gray-400);font-weight:400;letter-spacing:2%;font-size:14px;line-height:19.2px;outline:none}.input[data-v-ef8f9c89]:hover{border:1px solid var(--gray-200);box-shadow:0 4px 4px var(--black-700)}.input[data-v-ef8f9c89]:focus{border:1px solid var(--primary-color);color:var(--gray-400);box-shadow:0 4px 4px var(--black-700)}.input[data-v-ef8f9c89]::placeholder{color:var(--placeholder-color)}.store-slug-input[data-v-87bfb4e9]{--store-slug-title: var(--gray-900);--store-slug-description: var(--gray-500);--store-slug-box-input: var(--gray-100);--store-slug-box-icon: var(--primary-400);--store-slug-note: var(--gray-600);--store-slug-note-content: var(--gray-20);display:flex;align-items:flex-start;gap:10px;position:relative}.input-container[data-v-87bfb4e9]{position:relative;display:flex;align-items:center;width:100%}[dir=rtl] .input-container[data-v-87bfb4e9]{direction:ltr}.slug-suffix[data-v-87bfb4e9]{position:absolute;right:20px;color:var(--primary-400);font-weight:400;font-size:15px;line-height:19px;letter-spacing:.04em}.popover[data-v-87bfb4e9]{width:332px;background-color:#fff;transform:translate(calc(100% + 1rem));border:1px solid var(--gray-50);top:0;box-shadow:0 4px 12px var(--black-800);border-radius:12px;position:absolute;right:0}[dir=rtl] .popover[data-v-87bfb4e9]{right:auto;left:0px;transform:translate(calc(-100% - 1rem))}.box-description[data-v-87bfb4e9]{padding-left:20px;padding-right:28px}.store-slug-title[data-v-87bfb4e9]{font-weight:500;color:var(--store-slug-title);font-size:16px;line-height:19px;letter-spacing:.02em}.store-slug-description[data-v-87bfb4e9]{color:var(--store-slug-description);font-weight:400;font-size:13px;margin-top:-5px;line-height:20px;letter-spacing:.02em}.border-example[data-v-87bfb4e9]{display:flex;align-items:center;gap:8px;border:1px solid var(--store-slug-box-input);padding:12px 16px;box-shadow:0 1px 8px var(--black-800);border-radius:8px;margin-bottom:14px}.border-icon-example[data-v-87bfb4e9]{color:var(--store-slug-box-icon)}.input-border-example[data-v-87bfb4e9]{font-weight:400;font-size:14px;line-height:19px;letter-spacing:.02em;color:var(--store-slug-description)}.note[data-v-87bfb4e9]{display:flex;align-items:center;gap:9px;background-color:var(--store-slug-note-content);border-bottom-left-radius:12px;border-bottom-right-radius:12px;padding:8px 10px 12px 20px}.icon-note[data-v-87bfb4e9]{color:var(--store-slug-note)}.note-description[data-v-87bfb4e9]{font-weight:400;font-size:13px;line-height:21px;letter-spacing:.02em;color:var(--store-slug-note)}.fade-enter-active[data-v-87bfb4e9],.fade-leave-active[data-v-87bfb4e9]{transition:opacity .5s ease}.fade-enter-from[data-v-87bfb4e9],.fade-leave-to[data-v-87bfb4e9]{opacity:0}.dropdown-input[data-v-adc57234]{display:flex;justify-content:space-between;align-items:center;background:var(--base-white);color:var(--gray-400);width:100%;height:48px;border:1px solid var(--border-color);border-radius:8px;padding:10px;text-align:start;font-weight:400;font-size:15px;line-height:18px;letter-spacing:.02em}.dropdown-input[data-v-adc57234]:hover{border:1px solid var(--gray-200);box-shadow:0 4px 4px var(--black-700)}.dropdown-input[data-v-adc57234]:focus{border:1px solid var(--primary-color);color:var(--placeholder-color);box-shadow:0 4px 4px var(--black-700)}.dropdown-input .icon[data-v-adc57234]{color:var(--gray-400)}.dropdown-input .label-item[data-v-adc57234]{display:flex;gap:10px}.dropdown-content[data-v-c0ef81fc]{background-color:var(--base-white);width:100%;height:max-content;max-height:191px;border:1px solid var(--border-color);border-radius:8px;overflow:auto;padding:16px 0;z-index:1}.dropdown-content .dropdown-item[data-v-c0ef81fc]{display:flex;align-items:center;gap:7px;color:var(--gray-400);font-weight:400;font-size:16px;line-height:19px;letter-spacing:.02em;padding:8px 16px;cursor:pointer}.dropdown-content .dropdown-item[data-v-c0ef81fc]:hover{--hover-color: #f7faff;background-color:var(--hover-color)}.dropdown-content .dropdown-item .image[data-v-c0ef81fc]{height:20px}.no-results[data-v-c0ef81fc]{display:flex;flex-direction:column;align-items:center;font-size:16px;color:var(--gray-800)}.icon[data-v-c0ef81fc]{margin-left:auto;color:var(--primary-color)}.dropdown[data-v-a4109ef5]{display:flex;flex-direction:column;gap:7px}.password-input[data-v-1f342af8]{position:relative}.password-input input[data-v-1f342af8]{width:100%;border:1px solid var(--border-color);height:48px;border-radius:8px;color:var(--placeholder-color);font-size:14px;color:var(--gray-400);padding:0 16px;font-weight:400}.password-input input[data-v-1f342af8]:hover{border:1px solid var(--gray-200);box-shadow:0 4px 4px var(--black-700)}.password-input input[data-v-1f342af8]:focus{border:1px solid var(--primary-color);color:var(--gray-400);box-shadow:0 4px 4px var(--black-700)}.password-icon[data-v-1f342af8]{position:absolute;height:100%;background:none;right:12px;border:none;outline:none;cursor:pointer;color:var(--placeholder-color)}.password-icon[data-v-1f342af8]:hover{color:var(--primary-color);transition:all .2s ease}[dir=rtl] .password-icon[data-v-1f342af8]{right:auto;left:20px}.note[data-v-b82d0345]{--note-background: var(--white);--note-border-color: var(--gray-25);--note-icon-color: var(--primary-400);--note-text-color: var(--gray-700);display:flex;align-items:center;max-width:540px;background:var(--note-background);border:1px solid var(--note-border-color);border-radius:8px;padding:2px 25px;gap:32px}[dir=rtl] .note[data-v-b82d0345]{flex-direction:row-reverse}.icon[data-v-b82d0345]{color:var(--note-icon-color)}.content[data-v-b82d0345]{color:var(--note-text-color);line-height:22px;font-weight:400;font-size:15px}.loading[data-v-dbbecf04]{--loading-stroke-color: var(--gray-10);position:relative;width:120px;height:120px}.loading-svg[data-v-dbbecf04]{width:100%;height:100%;transform:rotate(-90deg)}.loading-circle[data-v-dbbecf04]{fill:none;stroke:var(--loading-stroke-color);stroke-width:4}.loading-circle-progress[data-v-dbbecf04]{fill:none;stroke:var(--primary-color);stroke-width:4;stroke-dasharray:284;stroke-linecap:round}.loading-value[data-v-dbbecf04]{position:absolute;font-weight:500;line-height:36px;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;color:var(--primary-color)}.checkbox-container[data-v-d2726505]{display:inline-block;position:relative;cursor:pointer;width:20px;height:20px}.checkbox-container:hover .checkbox-input~.checkmark[data-v-d2726505]{background-color:var(--stormGray-100)}.checkbox-container .checkbox-input[data-v-d2726505]{position:absolute;opacity:0;cursor:pointer;background-color:var(--primary-color);border:1px solid var(--gray-200);height:0;width:0}.checkbox-container .checkmark[data-v-d2726505]{position:absolute;top:0;left:0;height:100%;width:100%;color:var(--white);background-color:var(--white);border:1px solid var(--gray-200);border-radius:4px}[dir=rtl] .checkbox-container .checkmark[data-v-d2726505]{left:unset;right:0}.checkbox-container .checkmark[data-v-d2726505]:after{content:"";position:absolute;display:none}.checkbox-container .checkbox-input:checked~.checkmark[data-v-d2726505]:after{display:block}.checkbox-container .checkmark[data-v-d2726505]:after{left:6px;top:1.5px;width:5px;height:10px;border:solid var(--white);border-width:0 1.6px 1.6px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.checkbox-container .checkbox-input:checked~.checkmark[data-v-d2726505]{background-color:var(--base-White);background-color:var(--primary-color)}.checkbox-container .checkbox-input:checked~.checkmark[data-v-d2726505]:hover{background-color:var(--primary-500);box-shadow:0 4px 4px var(--black-700)}.button[data-v-18d5b861]{--button-bg-color: var(--stormGray-100);--button-color: var(--base-black);background:var(--button-bg-color);color:var(--button-color);display:flex;align-items:center;justify-content:center;border-radius:8px;padding:16px 32px;height:48px;font-weight:500;font-size:15px;line-height:18px;border:none;outline:none;user-select:none;width:max-content;cursor:pointer}.button.disabled[data-v-18d5b861]{pointer-events:none}.text[data-v-18d5b861]{color:currentColor;font-weight:500;line-height:19px;letter-spacing:.02em}.button.primary[data-v-313a8242]{--button-bg-color: var(--primary-color);--button-color: var(--base-white)}.button.primary[data-v-313a8242]:hover{background:var(--primary-500);transition:all .2s ease}.button.primary[data-v-313a8242]:active{background:var(--primary-600)}.dropdown[data-v-a4c7e0c6]{display:flex;flex-direction:column;gap:7px}.input-container[data-v-a4c7e0c6]{position:relative;box-shadow:0 4px 4px var(--black-700)}.icon-container[data-v-a4c7e0c6]{position:absolute;right:16px;top:0;height:100%;display:flex;align-items:center;justify-content:center;color:var(--gray-400);pointer-events:none}.icon-container .icon[data-v-a4c7e0c6]{pointer-events:all}.items-menu[data-v-a4c7e0c6]{box-shadow:0 4px 4px var(--black-700),0 4px 4px var(--black-700);max-width:unset}.handler[data-v-c0324042]{display:grid;grid-template-columns:auto 1fr;box-shadow:0 4px 4px var(--black-700);border:1px solid var(--border-color);border-radius:8px}.handler[data-v-c0324042]:hover{border:1px solid var(--gray-200)}.handler:hover .trigger[data-v-c0324042]{background-color:var(--gray-20)}.handler[data-v-c0324042]:focus-within{border:1px solid var(--primary-color)}.handler .trigger[data-v-c0324042]{display:flex;align-items:center;gap:4px;background-color:#fff;padding:0 12px;border:1px solid var(--border-color);border-top-left-radius:8px;border-bottom-left-radius:8px;border-width:0 .5px 0 0}.handler .trigger[data-v-c0324042]:hover{border-color:var(--gray-200)}.handler .trigger .text[data-v-c0324042]{font-size:14px;color:var(--gray-700)}.handler .trigger .icon[data-v-c0324042]{color:var(--gray-400)}.handler .input-container .input[data-v-c0324042]{border-width:0 0 0 .5px;border-top-left-radius:0;border-bottom-left-radius:0}.handler .input-container .input[data-v-c0324042]:focus{border-color:var(--border-color)}.dropdown[data-v-c0324042]{display:flex;flex-direction:column;gap:7px}.items-menu[data-v-c0324042]{box-shadow:0 4px 4px var(--black-700),0 4px 4px var(--black-700)}*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}.i-tabler-alert-circle{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'9\'/%3E%3Cpath d=\'M12 8v4m0 4h.01\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-eye{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'12\' cy=\'12\' r=\'2\'/%3E%3Cpath d=\'M22 12c-2.667 4.667-6 7-10 7s-7.333-2.333-10-7c2.667-4.667 6-7 10-7s7.333 2.333 10 7\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-eye-off{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Cpath d=\'m3 3l18 18M10.584 10.587a2 2 0 0 0 2.828 2.83\'/%3E%3Cpath d=\'M9.363 5.365A9.466 9.466 0 0 1 12 5c4 0 7.333 2.333 10 7c-.778 1.361-1.612 2.524-2.503 3.488m-2.14 1.861C15.726 18.449 13.942 19 12 19c-4 0-7.333-2.333-10-7c1.369-2.395 2.913-4.175 4.632-5.341\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler-search{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cg fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'7\'/%3E%3Cpath d=\'m21 21l-6-6\'/%3E%3C/g%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler\:check{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m5 12l5 5L20 7\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler\:chevron-down{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m6 9l6 6l6-6\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.i-tabler\:chevron-up{--un-icon:url(\"data:image/svg+xml;utf8,%3Csvg viewBox=\'0 0 24 24\' width=\'20px\' height=\'20px\' display=\'block\' xmlns=\'http://www.w3.org/2000/svg\' %3E%3Cpath fill=\'none\' stroke=\'currentColor\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'m6 15l6-6l6 6\'/%3E%3C/svg%3E\");mask:var(--un-icon) no-repeat;mask-size:100% 100%;-webkit-mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;background-color:currentColor;width:20px;height:20px;display:block;}.absolute{position:absolute;}.relative{position:relative;}.grid{display:grid;}.block{display:block;}.inline-block{display:inline-block;}.flex,[flex=\"\"]{display:flex;}.px,[px=\"\"]{padding-left:1rem;padding-right:1rem;}.blur{--un-blur:blur(8px);filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}.filter{filter:var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia);}.ease{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);}*{font-family:Inter,sans-serif;box-sizing:border-box}:root{--border-color: #E0E0E0;--placeholder-color: #AAAAAA;--base-white: #fff;--base-black: #000;--stormGray-100: #f4f4f4;--primary-color: #B83375;--primary-600: #66153D;--primary-500: #991F5B;--primary-400: #B83375;--gray-900: #262629;--gray-800: #333333;--gray-700: #444444;--gray-600: #757580;--gray-400: #444444;--gray-500: #4B4C52;--gray-200: #CCCCCC;--gray-100: #EBEBEB;--gray-50: #F0F0FA;--gray-25: #E0E0E0;--gray-20: #FAFAFA;--gray-10: #F0F0F0;--black-700: rgba(0, 0, 0, .02);--black-800: rgba(0, 0, 0, .04);--white: #FFFFFF}
`,document.head.appendChild(S);function ro(o){return o}const q=["value","type","placeholder"],Y=e.defineComponent({__name:"Input",props:{modelValue:null,type:null,placeholder:null},emits:["update:modelValue","focus","blur"],setup(o,{emit:t}){const a=o,n=e.computed(()=>a.modelValue),r=e.computed(()=>a.type),c=({target:d})=>{t("update:modelValue",d.value)},s=()=>t("focus"),l=()=>t("blur");return(d,p)=>(e.openBlock(),e.createElementBlock("input",e.mergeProps({value:e.unref(n),type:e.unref(r),placeholder:o.placeholder,class:"input"},d.$attrs,{onInput:c,onFocus:s,onBlur:l}),null,16,q))}}),lo="",_=(o,t)=>{const a=o.__vccOpts||o;for(const[n,r]of t)a[n]=r;return a},E=_(Y,[["__scopeId","data-v-ef8f9c89"]]),k=e.defineComponent({__name:"TextInput",props:{modelValue:null,placeholder:null},emits:["update:modelValue"],setup(o,{emit:t}){const a=o,n=e.computed(()=>a.modelValue),r=c=>{t("update:modelValue",c)};return(c,s)=>(e.openBlock(),e.createBlock(E,e.mergeProps({"model-value":e.unref(n),type:"text",class:"input",placeholder:o.placeholder},c.$attrs,{"onUpdate:modelValue":r}),null,16,["model-value","placeholder"]))}}),J=o=>(e.pushScopeId("data-v-87bfb4e9"),o=o(),e.popScopeId(),o),X={class:"store-slug-input"},Z={class:"input-container"},ee={class:"popover"},oe=[J(()=>e.createElementVNode("div",{class:"store-slug-box-content"},[e.createElementVNode("div",{class:"box-description"},[e.createElementVNode("p",{class:"store-slug-title"}," Store slug "),e.createElementVNode("p",{class:"store-slug-description"}," The slug you choose will be your store's domain name that your customers will see. "),e.createElementVNode("div",{class:"border-example"},[e.createElementVNode("i",{class:"border-icon-example i-tabler-search"}),e.createElementVNode("span",{class:"input-border-example"},"example.youcan.shop")])]),e.createElementVNode("div",{class:"note"},[e.createElementVNode("div",null,[e.createElementVNode("i",{class:"icon-note i-tabler-alert-circle"})]),e.createElementVNode("span",{class:"note-description"}," You can always replace it with a custom domain name you purchased. ")])],-1))],te={class:"slug-suffix"},ae=e.defineComponent({__name:"StoreSlugInput",props:{modelValue:{type:String,required:!0},slugSuffix:{type:String,default:".youcan.shop"},placeholder:{type:String}},emits:["update:modelValue"],setup(o,{emit:t}){const a=o,n=e.ref(a.modelValue),r=e.ref(!1),c=d=>t("update:modelValue",d),s=()=>r.value=!0,l=()=>r.value=!1;return(d,p)=>(e.openBlock(),e.createElementBlock("div",X,[e.createElementVNode("div",Z,[e.createVNode(e.Transition,{name:"fade"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",ee,oe,512),[[e.vShow,r.value]])]),_:1}),e.createVNode(E,{"model-value":n.value,type:"text",class:"input",placeholder:o.placeholder,"onUpdate:modelValue":c,onFocus:s,onBlur:l},null,8,["model-value","placeholder"]),e.createElementVNode("span",te,e.toDisplayString(o.slugSuffix),1)])]))}}),so="",N=_(ae,[["__scopeId","data-v-87bfb4e9"]]);var $;const y=typeof window<"u",ne=o=>typeof o=="string",I=()=>{};y&&(($=window==null?void 0:window.navigator)==null?void 0:$.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function re(o){return typeof o=="function"?o():e.unref(o)}function le(o){return o}function ce(o){return e.getCurrentScope()?(e.onScopeDispose(o),!0):!1}function w(o){var t;const a=re(o);return(t=a==null?void 0:a.$el)!=null?t:a}const O=y?window:void 0;y&&window.document,y&&window.navigator,y&&window.location;function V(...o){let t,a,n,r;if(ne(o[0])?([a,n,r]=o,t=O):[t,a,n,r]=o,!t)return I;let c=I;const s=e.watch(()=>w(t),d=>{c(),d&&(d.addEventListener(a,n,r),c=()=>{d.removeEventListener(a,n,r),c=I})},{immediate:!0,flush:"post"}),l=()=>{s(),c()};return ce(l),l}function B(o,t,a={}){const{window:n=O,ignore:r,capture:c=!0,detectIframe:s=!1}=a;if(!n)return;const l=e.ref(!0);let d;const p=u=>{n.clearTimeout(d);const i=w(o),f=u.composedPath();!i||i===u.target||f.includes(i)||!l.value||r&&r.length>0&&r.some(x=>{const m=w(x);return m&&(u.target===m||f.includes(m))})||t(u)},b=[V(n,"click",p,{passive:!0,capture:c}),V(n,"pointerdown",u=>{const i=w(o);l.value=!!i&&!u.composedPath().includes(i)},{passive:!0}),V(n,"pointerup",u=>{if(u.button===0){const i=u.composedPath();u.composedPath=()=>i,d=n.setTimeout(()=>p(u),50)}},{passive:!0}),s&&V(n,"blur",u=>{var i;const f=w(o);((i=document.activeElement)==null?void 0:i.tagName)==="IFRAME"&&!(f!=null&&f.contains(document.activeElement))&&t(u)})].filter(Boolean);return()=>b.forEach(u=>u())}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";P[F]=P[F]||{};var z;(function(o){o.UP="UP",o.RIGHT="RIGHT",o.DOWN="DOWN",o.LEFT="LEFT",o.NONE="NONE"})(z||(z={}));var se=Object.defineProperty,T=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,L=(o,t,a)=>t in o?se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[t]=a,pe=(o,t)=>{for(var a in t||(t={}))de.call(t,a)&&L(o,a,t[a]);if(T)for(var a of T(t))ie.call(t,a)&&L(o,a,t[a]);return o};pe({linear:le},{easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]});const ue=o=>(e.pushScopeId("data-v-adc57234"),o=o(),e.popScopeId(),o),fe={class:"label-item"},me=ue(()=>e.createElementVNode("i",{class:"i-tabler:chevron-down icon"},null,-1)),he=e.defineComponent({__name:"SelectButton",props:{item:null,placeholder:null},emits:["click","clickOutside"],setup(o,{emit:t}){const a=o,n=e.computed(()=>a.item),r=e.ref();return B(r,()=>t("clickOutside")),(c,s)=>{var l;return e.openBlock(),e.createElementBlock("button",{ref_key:"_dropdown_trigger",ref:r,class:"dropdown-input",onClick:s[0]||(s[0]=d=>t("click"))},[e.createElementVNode("div",fe,[e.createElementVNode("i",{class:e.normalizeClass([(l=e.unref(n))==null?void 0:l.icon])},null,2),e.createElementVNode("span",null,e.toDisplayString(e.unref(n)?e.unref(n).label:o.placeholder||"Please select an option"),1)]),me],512)}}}),po="",be=_(he,[["__scopeId","data-v-adc57234"]]),_e=o=>(e.pushScopeId("data-v-c0ef81fc"),o=o(),e.popScopeId(),o),ge={class:"dropdown-content"},ve=["onClick"],xe=["src"],ye={key:2,class:"icon i-tabler:check"},we={key:1,class:"no-results"},ke=[_e(()=>e.createElementVNode("span",null,"Your search came up with no results.",-1))],Ve=e.defineComponent({__name:"SelectMenu",props:{items:null,modelValue:null},emits:["update:modelValue"],setup(o,{emit:t}){const a=o,n=e.ref(a.modelValue),r=c=>{n.value=c,t("update:modelValue",n.value)};return(c,s)=>(e.openBlock(),e.createElementBlock("div",ge,[o.items.length>0?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(o.items,l=>(e.openBlock(),e.createElementBlock("div",{key:l.label,class:"dropdown-item",onClick:d=>r(l)},[l.icon?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(l.icon)},null,2)):e.createCommentVNode("",!0),l.image?(e.openBlock(),e.createElementBlock("img",{key:1,src:l.image,class:"image"},null,8,xe)):e.createCommentVNode("",!0),e.createElementVNode("span",null,e.toDisplayString(l.label),1),l&&n.value&&l.value===n.value.value?(e.openBlock(),e.createElementBlock("i",ye)):e.createCommentVNode("",!0)],8,ve))),128)):(e.openBlock(),e.createElementBlock("div",we,ke))]))}}),fo="",C=_(Ve,[["__scopeId","data-v-c0ef81fc"]]),Ee={class:"dropdown"},Ie=e.defineComponent({__name:"Dropdown",props:{items:null,modelValue:null,placeholder:null},emits:["update:modelValue"],setup(o,{emit:t}){const{modelValue:a,items:n,placeholder:r}=o,c=e.computed(()=>a),s=e.ref(),l=e.ref(!1),d=p=>{!p||(s.value=p,t("update:modelValue",s.value.value),l.value=!1)};return e.watchEffect(()=>s.value=n.find(p=>p.value===c.value)),(p,b)=>(e.openBlock(),e.createElementBlock("div",Ee,[e.createVNode(be,{item:s.value,placeholder:o.placeholder,onClick:b[0]||(b[0]=g=>l.value=!l.value),onClickOutside:b[1]||(b[1]=g=>l.value=!1)},null,8,["item","placeholder"]),e.withDirectives(e.createVNode(C,{"model-value":s.value,items:o.items,"onUpdate:modelValue":d},null,8,["model-value","items"]),[[e.vShow,l.value]])]))}}),mo="",D=_(Ie,[["__scopeId","data-v-a4109ef5"]]),Be={class:"password-input"},Ce=e.defineComponent({__name:"PasswordInput",props:{modelValue:null,placeholder:null,passwordHidden:{type:Boolean}},emits:["update:modelValue"],setup(o,{emit:t}){const{modelValue:a,passwordHidden:n=!0}=o,r=e.ref(),c=e.ref(n),s=e.ref(a),l=d=>{s.value=d,t("update:modelValue",d)};return(d,p)=>(e.openBlock(),e.createElementBlock("div",Be,[e.createElementVNode("button",{class:"password-icon",type:"button",onClick:p[0]||(p[0]=b=>c.value=!c.value)},[e.createElementVNode("i",{class:e.normalizeClass(c.value?"i-tabler-eye":"i-tabler-eye-off")},null,2)]),e.createVNode(E,{ref_key:"baseInput",ref:r,type:c.value?"password":"text",placeholder:o.placeholder,"model-value":s.value,class:"input","onUpdate:modelValue":l},null,8,["type","placeholder","model-value"])]))}}),ho="",A=_(Ce,[["__scopeId","data-v-1f342af8"]]),bo="",Se={},Ne={class:"note"},$e={class:"icon"},Oe={class:"content"};function Pe(o,t){return e.openBlock(),e.createElementBlock("div",Ne,[e.createElementVNode("div",$e,[e.renderSlot(o.$slots,"icon",{class:"icon"},void 0,!0)]),e.createElementVNode("div",Oe,[e.renderSlot(o.$slots,"content",{},void 0,!0)])])}const U=_(Se,[["render",Pe],["__scopeId","data-v-b82d0345"]]),Fe=o=>(e.pushScopeId("data-v-dbbecf04"),o=o(),e.popScopeId(),o),ze={class:"loading"},Te={class:"loading-svg",viewBox:"0 0 100 100"},Le=Fe(()=>e.createElementVNode("circle",{class:"loading-circle",cx:"50",cy:"50",r:"45"},null,-1)),De={class:"loading-value"},Ae=e.defineComponent({__name:"Loading",props:{duration:{type:Number,default:12e3}},emits:["complete"],setup(o,{emit:t}){const a=o,n=e.ref(0),r=e.ref(!1),c=e.computed(()=>({strokeDashoffset:`${(100-n.value)*2.64}px`,transition:r.value?"all 0.1s ease":"none"}));return e.watch(a,()=>{n.value=0,r.value=!0}),e.watchEffect(()=>{const s=a.duration,l=s/100,d=100/(s/l);let p=0;r.value=!0;const b=setInterval(()=>{p+=d,n.value=p,p>=100&&(clearInterval(b),r.value=!1,t("complete"))},l);return()=>clearInterval(b)}),(s,l)=>(e.openBlock(),e.createElementBlock("div",ze,[(e.openBlock(),e.createElementBlock("svg",Te,[Le,e.createElementVNode("circle",{class:"loading-circle-progress",style:e.normalizeStyle(e.unref(c)),cx:"50",cy:"50",r:"45"},null,4)])),e.createElementVNode("div",De,e.toDisplayString(`${n.value}%`),1)]))}}),_o="",M=_(Ae,[["__scopeId","data-v-dbbecf04"]]),Ue=o=>(e.pushScopeId("data-v-d2726505"),o=o(),e.popScopeId(),o),Me={class:"checkbox-container"},je=Ue(()=>e.createElementVNode("span",{class:"checkmark"},null,-1)),Qe=e.defineComponent({__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:t}){const a=o,n=e.ref(a.modelValue);return e.watchEffect(()=>{t("update:modelValue",n.value)}),(r,c)=>(e.openBlock(),e.createElementBlock("label",Me,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":c[0]||(c[0]=s=>n.value=s),class:"checkbox-input",type:"checkbox"},null,512),[[e.vModelCheckbox,n.value]]),je]))}}),go="",j=_(Qe,[["__scopeId","data-v-d2726505"]]),Ge=["disabled"],He={class:"text"},We=e.defineComponent({__name:"Button",props:{disabled:{type:Boolean,default:!1}},setup(o){return(t,a)=>(e.openBlock(),e.createElementBlock("button",{ref:"target",class:e.normalizeClass(["button",{disabled:o.disabled}]),disabled:o.disabled},[e.createElementVNode("span",He,[e.renderSlot(t.$slots,"default",{},void 0,!0)])],10,Ge))}}),vo="",Re=_(We,[["__scopeId","data-v-18d5b861"]]),Ke=e.defineComponent({__name:"PrimaryButton",setup(o){return(t,a)=>(e.openBlock(),e.createBlock(Re,e.mergeProps(t.$attrs,{ref:"target",class:"primary"}),{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default",{},void 0,!0)]),_:3},16))}}),xo="",Q=_(Ke,[["__scopeId","data-v-313a8242"]]),qe={class:"dropdown"},Ye={class:"icon-container"},Je=e.defineComponent({__name:"ComboBox",props:{items:null,modelValue:null,placeholder:null},emits:["update:modelValue"],setup(o,{emit:t}){const{modelValue:a="",items:n}=o,r=e.ref(a),c=e.ref(),s=e.ref(!1),l=e.ref(n),d=e.ref(0),p=i=>s.value=i,b=i=>{!i||(c.value=i,r.value=i.label,t("update:modelValue",c.value.value),p(!1))};e.watchEffect(()=>{var i;c.value=n.find(f=>f.value===r.value||f.label===r.value),c.value?r.value=(i=c.value)==null?void 0:i.label:r.value=""});const g=i=>{i=i.toLowerCase(),l.value=n.filter(f=>f.label.toLowerCase().includes(i)||f.value.toLowerCase().includes(i))},u=e.ref();return B(u,()=>{d.value++,l.value=n,p(!1)}),(i,f)=>(e.openBlock(),e.createElementBlock("div",qe,[e.createElementVNode("div",{ref_key:"_dropdown_trigger",ref:u,class:"input-container"},[(e.openBlock(),e.createBlock(k,{key:d.value,"model-value":r.value,class:"input",placeholder:o.placeholder||"Search items","onUpdate:modelValue":g,onFocus:f[0]||(f[0]=x=>p(!0))},null,8,["model-value","placeholder"])),e.createElementVNode("div",Ye,[e.createElementVNode("i",{class:e.normalizeClass(["icon",[s.value?"i-tabler:chevron-up":"i-tabler:chevron-down"]]),onClick:f[1]||(f[1]=x=>p(!s.value))},null,2)])],512),e.withDirectives(e.createVNode(C,{class:"items-menu","model-value":c.value,items:l.value,"onUpdate:modelValue":b},null,8,["model-value","items"]),[[e.vShow,s.value]])]))}}),yo="",G=_(Je,[["__scopeId","data-v-a4c7e0c6"]]),Xe={class:"dropdown"},Ze={class:"text"},eo={class:"input-container"},oo=e.defineComponent({__name:"PhoneNumberInput",props:{items:null,dialCode:null,modelValue:null,placeholder:null},emits:["update:modelValue","update:dialCode"],setup(o,{emit:t}){const{modelValue:a,dialCode:n,items:r,placeholder:c}=o,s=e.ref(a),l=e.computed(()=>n),d=e.ref(),p=e.ref(!1),b=e.ref(r),g=e.ref(0),u=m=>p.value=m,i=m=>{!m||(d.value=m,s.value="",t("update:dialCode",m.value),u(!1))};e.watchEffect(()=>d.value=r.find(m=>m.value===l.value));const f=m=>{m=m.toLowerCase(),b.value=r.filter(v=>v.label.toLowerCase().includes(m)||v.value.toLowerCase().includes(m)),d.value&&t("update:modelValue",m)},x=e.ref();return B(x,()=>{b.value=r,s.value!==""&&g.value++,u(!1)}),(m,v)=>{var R;return e.openBlock(),e.createElementBlock("div",Xe,[e.createElementVNode("div",{ref_key:"_dropdown_trigger",ref:x,class:"handler"},[e.createElementVNode("div",{class:"trigger",onClick:v[0]||(v[0]=no=>u(!p.value))},[e.createElementVNode("span",Ze,e.toDisplayString(((R=d.value)==null?void 0:R.value)||"unknown"),1),e.createElementVNode("i",{class:e.normalizeClass(["icon",[p.value?"i-tabler:chevron-up":"i-tabler:chevron-down"]])},null,2)]),e.createElementVNode("div",eo,[(e.openBlock(),e.createBlock(k,{key:g.value,"model-value":s.value,class:"input",placeholder:o.placeholder||"Search by country or dialing code","onUpdate:modelValue":f,onFocus:v[1]||(v[1]=no=>{var K;return!((K=d.value)!=null&&K.value)&&u(!0)})},null,8,["model-value","placeholder"]))])],512),e.withDirectives(e.createVNode(C,{class:"items-menu","model-value":d.value,items:o.items,"onUpdate:modelValue":i},null,8,["model-value","items"]),[[e.vShow,p.value]])])}}}),wo="",H=_(oo,[["__scopeId","data-v-c0324042"]]),W=Object.freeze(Object.defineProperty({__proto__:null,TextInput:k,StoreSlugInput:N,Dropdown:D,PasswordInput:A,Note:U,Loading:M,Checkbox:j,PrimaryButton:Q,ComboBox:G,PhoneNumberInput:H},Symbol.toStringTag,{value:"Module"})),ko="",Vo="";function to(o){for(const t in W)o.component(t,W[t])}const ao={install:to};h.Checkbox=j,h.ComboBox=G,h.Dropdown=D,h.Loading=M,h.Note=U,h.PasswordInput=A,h.PhoneNumberInput=H,h.PrimaryButton=Q,h.StoreSlugInput=N,h.TextInput=k,h.default=ao,Object.defineProperties(h,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
