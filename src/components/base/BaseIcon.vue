<script setup lang="ts">
const props = defineProps<{
    iconName: string;
    iconSize?: number | string;
    iconColor?: "default" | "primary" | string;
    iconClass?: string;
}>();

const getIconColor = () => {
    switch (props.iconColor) {
        case "default":
            return "#000000";
        case "primary":
            return "#4d6aff";
        default:
            return props.iconColor || '';
    }
};
</script>
<template>
    <span :style="{ color: `${getIconColor()} !important` }" class="flex no-shrink"
        :class="[`i-${iconName}`, `text-${iconSize}`]">

    </span>
</template>

<style lang="scss" scoped></style>
