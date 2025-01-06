<template>
  <svg :class="`icon ${customClass}`" aria-hidden="true" :style="{ width: size, height: size }">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true, // 图标名称（不带 "icon-" 前缀）
    },
    size: {
      type: String,
      default: '24px', // 默认图标尺寸
    },
    customClass: {
      type: String,
      default: '', // 自定义类名
    },
  },
};
</script>

<style scoped>
.icon {
  fill: currentColor; /* 默认颜色可继承 */
  display: inline-block;
  vertical-align: middle;
}
</style>