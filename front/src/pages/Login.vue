<template>
  <div class="Panel">
    <div class="PanelLogin">
      <div class="PaddingPanel">
        <div class="Column">
          <img :src="urlImages" class="image" />
        </div>

        <div class="Column">
          <el-row>
            <el-col
              ><div>
                <el-input
                  placeholder="Correo Electronico"
                  clearable
                  v-model="data.email"
                >
                </el-input></div
            ></el-col>
          </el-row>
        </div>

        <div class="Column">
          <el-row>
            <el-col
              ><div>
                <el-input
                  placeholder="Contrasena"
                  show-password
                  v-model="data.password"
                >
                </el-input></div
            ></el-col>
          </el-row>
        </div>

        <div
          class="Column"
          style="display: flex; justify-content: center; align-items: center"
        >
          <el-row>
            <!-- <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-button type="text" @click="authenticate">Crear</el-button>
              </div>
            </el-col> -->

            <el-col :span="12">
              <div class="grid-content bg-purple">
                <el-button type="primary" @click="authenticate"
                  >Iniciar Sesion</el-button
                >
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ElMessage } from "element-plus";

import { computed, defineComponent, reactive, ref, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { requestLogin, ResponseLogin } from "../model/user";
import { authUser } from "../services/user";
import { URL_IMAGES } from "../lib/client";

//template for message type
type typeMessage = "" | "success" | "warning" | "info" | "error" | undefined;
export default defineComponent({
  setup() {
    localStorage.removeItem("_token");
    //VARIABLES
    const urlImages = ref<string>(URL_IMAGES);
    const route = useRoute();
    const router = useRouter();
    const data = reactive<requestLogin>({
      email: "",
      password: "",
    });

    //METHODS
    const showMessage = (msg: string, type?: typeMessage) => {
      ElMessage({
        message: msg,
        type: type,
      });
    };

    const authenticate = () => {
      if (!(data.email && data.password)) {
        showMessage("Disculpe, ingrese sus datos", "error");
      } else {
        authUser(data)
          .then((res: ResponseLogin) => {
            const { data } = res.data;
            localStorage.setItem("_token", data.token);
            router.push({
              path: "/view",
            });
          })
          .catch((err) => {
            const { response } = err;
            if (response.status === 403) {
              showMessage("Clave Incorrecta", "warning");
            }
            if (response.status === 401) {
              showMessage(
                "El correo no existe, intente crear un usuario.",
                "error"
              );
            }
          });
      }
    };

    //HOOKS
    const isAuthorized = computed(() => route.meta?.noAuth);

    return {
      data,
      authenticate,
      isAuthorized,
      authUser,
      urlImages,
    };
  },
});
</script>

<style scoped>
.Panel {
  width: 565px;
  height: 410px;
  background-color: #fafafa;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -282px;
  margin-top: -232px;
  padding: 0;
  border-radius: 3px;
  box-shadow: 0 7px 8px -4px rgb(0 0 0 / 20%), 0 5px 22px 4px rgb(0 0 0 / 12%),
    0 12px 17px 2px rgb(0 0 0 / 14%);
}
.PanelLogin {
  padding: 12px 98px;
  position: relative;
  font-family: Roboto, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial,
    Lucida Grande, sans-serif;
  font-size: 14px;
  color: rgba(122, 94, 94, 0.87);
  -webkit-font-smoothing: antialiased;
}

.PaddingPanel {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
}

.Column {
  width: 100%;
  padding: 1em;
}

.welcomText {
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1.3px;
  color: #616161;
  margin-top: 0;
  margin-bottom: 6px;
  text-align: center;
}
.ingresaText {
  font-size: 16px;
  font-weight: normal;
  letter-spacing: 0.5px;
  color: #212121;
  margin-top: 0;
  margin-bottom: 1em;
  margin-top: 20px;
  text-align: center;
}
.Usuario {
  position: relative;
}
.image {
  padding: 0 50px;
}
body {
  background: rgba(2, 1, 1, 0.555);
}
</style>