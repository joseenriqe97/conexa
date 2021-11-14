
<template>
  <h1>Crear Factura</h1>
  <!-- <el-row :gutter="15">
    <el-col :span="18">
      <el-card shadow="always" style="height: 450px">
        <el-row :gutter="20" justify="space-between">
          <el-col :span="2">
            <span style="font-size: 16px; font-weight: 700">Cliente</span>
          </el-col>
          <el-col :span="6">
            <span style="font-weight: 500; font-size: 16px"
              >Nro Factura: 000000000</span
            >
          </el-col>
        </el-row>
        <div style="padding-top: 50px">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-select
                style="width: 95%"
                size="small"
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="Razon Social"
                :remote-method="remoteMethod"
                :loading="loading"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="3">
              <el-date-picker
                style="width: 100%"
                size="small"
                v-model="value1"
                type="date"
                placeholder="Fecha"
              >
              </el-date-picker>
            </el-col>
            <el-col :span="4">
              <el-date-picker
                style="width: 100%"
                size="small"
                v-model="value1"
                type="date"
                placeholder="Vencimiento"
              >
              </el-date-picker
            ></el-col>
          </el-row>
        </div>
        <div style="padding-top:20px">
          <InputArticle></InputArticle>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card shadow="always" style="height: 350px"> </el-card>
    </el-col>
  </el-row> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import InputArticle from "../../components/objects/InputArticle.vue";

export default defineComponent({
  components: {
    // InputArticle,
  },
  setup() {},
});
</script>

<style>
/* .el-select-dropdown__empty {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
} */
</style>

