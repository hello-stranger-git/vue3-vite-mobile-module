<template>
  <router-view/>
  <p>123</p>
  <div>456</div>
  <span class="yellow">789</span>
  <svgIcon customClass="customClass" name="svgTest"></svgIcon>
  <!-- 中文显示姓名,英文显示name -->
  <p>多语言:{{ $t("test") }}</p>
  <p @click="changgeLanguageEn">切为英文</p>
  <p @click="changgeLanguageZh">切为中文</p>
  <hr>
  <p>{{ user.count }}</p>
  <span @click="user.increment">+</span><span @click="user.decrement">-</span>

</template>
<script setup>
import { useI18n } from "vue-i18n";
import { ref } from 'vue'
import { useUserStore } from '@/store/index'
const { t, locale } = useI18n();
const changgeLanguageEn = ()=>{
  locale.value = 'en'; // 切换为英文
}
const changgeLanguageZh = ()=>{
  locale.value = 'zh'; // 切换为英文
}

const user = useUserStore();
</script>

<style lang="scss" scoped>
p{
  font-size: 12px;
  color: $primary-color;
}
.customClass{
  color: pink;
}
</style>
