import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

export default await (async () => {
const __VLS_Component = (await import('vue')).defineComponent({
setup() {
() => {
// @ts-ignore
[RouterLink, RouterView, HelloWorld,];
// @ts-ignore
[];
};
return {};
},
});
const __VLS_slots = (await import('./App.vue.__VLS_template')).default;
return {} as typeof __VLS_Component & (new () => { $slots: typeof __VLS_slots; });
})();
