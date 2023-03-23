<template>
  <div :class="classObj" class="app=wrapper">
    <!-- TODO 响应式布局 -->
    <!-- <div v-if="classObj.mobile && sidebar.opened" class="drawer-bg" @click="handleClickOutside"></div> -->
    <SideBar class="sidebar-container" />
    <div :class="{ hasTagsView: showTagsView }" class="main-containner">
      <div :class="{'fixed-header': fixedHeader}">
        <NavBar />
        <TagsView v-if="showTagsView" />
      </div>
      <AppMain />
      <RightPanel v-if="showSettings">
        <Settings />
      </RightPanel>
    </div>
  </div>
</template>


<script setup lang="ts">
import {  computed } from 'vue';
import { 
  AppMain, 
  NavBar,
  Settings, 
  SideBar,
  TagsView
} from './components';


const classObj = computed(() => {
  // TODO 响应式布局
  return {
    // hideSidebar: !sidebar.value.opened,
    // openSidebar: sidebar.value.opened,
    // withoutAnimation: sidebar.value.withoutAnimation,
    // mobile: device.value === DeviceType.Mobile
  }
});

// TODO 状态管理补充
const showSettings = computed(() => {
  return  true; // store.state.settings.showSettings
});
const showTagsView = computed(() => {
  return  true; // store.state.settings.showTagsView
});
const fixedHeader = computed(() => {
  return  true; // store.state.settings.fixedHeader
});
</script>

<style lang="scss" scoped></style>
