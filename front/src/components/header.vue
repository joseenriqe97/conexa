<template>
  <el-header style="box-shadow: 0 1px 4px rgb(0 21 41 / 8%); z-index: 11">
    <el-row
      :gutter="20"
      justify="space-between"
      style="margin: 10px padding: 10px"
    >
      <el-col :span="4" style="padding: 25px">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item href="#">Login</el-breadcrumb-item>
          <el-breadcrumb-item>Listado</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col :span="4">
        <div>
          <el-row :gutter="20" justify="space-around">
            <el-col :span="6">
              <el-icon :size="20">
                <edit />
              </el-icon>
            </el-col>
            <el-col :span="6" style="margin-top: 10px">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <el-Avatar :src="urlImages"> user </el-Avatar>
                  <el-icon class="el-icon--right">
                    <arrow-down />
                  </el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="closeSession"
                      >Cerrar sesion
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { URL_IMAGES } from "../lib/client";

export default defineComponent({
  emits: ["closeSession"],

  setup(_, { emit }) {
    //VARIABLES
    const urlImages = ref<String>(URL_IMAGES);
    //METHODS
    const closeSession = () => {
      emit("closeSession");
    };
    return {
      closeSession,
      urlImages,
    };
  },
});
</script>

<style>
</style>