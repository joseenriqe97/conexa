<template>
  <div style="padding: 50px">
    <div class="contentEnd" style="margin: 20px">
      <el-button type="primary" @click="isTablePost = true"
        >Listar Post</el-button
      >
      <el-button type="primary" @click="isTablePost = false"
        >Listar Fotos</el-button
      >
    </div>

    <div>
      <div class="contentCenter" v-if="isTablePost">
        <el-table
          v-loading="loading"
          :data="itemsPagerPost"
          border
          style="width: 72%"
        >
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="userId" label="UserID" width="180" />
          <el-table-column prop="title" label="Titulo" width="180" />
          <el-table-column prop="body" label="Cuerpo" width="480" />
        </el-table>
      </div>
      <div class="contentCenter" v-if="!isTablePost">
        <el-table
          v-loading="loading"
          :data="itemsPagerPhotos"
          border
          style="width: 72%"
        >
          <el-table-column prop="id" label="ID" width="180" />
          <el-table-column prop="albumId" label="AlbumID" width="180" />
          <el-table-column prop="url" label="URL" width="180" />
          <el-table-column
            prop="thumbnailUrl"
            label="thumbnailUrl"
            width="480"
          />
        </el-table>
      </div>
      <div class="contentCenter" style="margin-top: 20px">
        <v-pagination
          style=""
          :pages="totalPages"
          :range-size="1"
          active-color="#DCEDFF"
          v-model="pageNum"
          @update:modelValue="updateHandler"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { ResponsePhotos, ResponsePost } from "../../model/viewPlaceHolder";
import { getPhoto, getPost } from "../../services/viePlaceHolder";

//template for message type
type typeMessage = "" | "success" | "warning" | "info" | "error" | undefined;
const ITEMS_PER_PAGE = 10;
export default defineComponent({
  components: {
    VPagination,
  },
  setup() {
    //VARIABLES
    const loading = ref<Boolean>(false);
    const route = useRoute();
    const pageNum = ref<Number>(0);
    const isTablePost = ref<Boolean>(true);
    let posts = ref<ResponsePost>([]);
    let photo = ref<ResponsePhotos>([]);

    //METHODS
    const getItemsPaginations = (): string[] => {
      if (pageNum.value === 1) pageNum.value = 0;

      let result = <string>[];
      result["start"] = pageNum.value * ITEMS_PER_PAGE;
      result["limit"] = result["start"] + ITEMS_PER_PAGE;

      return result;
    };
    const getPostService = () => {
      console.log(localStorage.getItem("_token"));
      loading.value = true;

      getPost().then((res: ResponsePost) => {
        const { data } = res;
        posts.value = data;
        loading.value = false;
      });
    };
    const updateHandler = (event: Event) => {
      pageNum.value = event;
    };

    const getPhotoService = () => {
      loading.value = true;
      const indexPag = getItemsPaginations();
      getPhoto({
        start: indexPag["start"],
        limit: indexPag["limit"],
      }).then((res: ResponsePhotos) => {
        const { data } = res;
        photo.value = data;
        loading.value = false;
      });
    };

    const totalPages = computed(() => {
      if (posts.value.data && posts.value.data?.length > 0) {
        return Math.floor((posts.value.data?.length - 1) / ITEMS_PER_PAGE) + 1;
      }
      return 0;
    });

    const itemsPagerPost = computed(() => {
      const indexPag = getItemsPaginations();
      if (posts.value.data && posts.value.data?.length > 0) {
        return posts.value.data.slice(indexPag["start"], indexPag["limit"]); //paginacion
      }
      return [];
    });

    const itemsPagerPhotos = computed(() => {
      const indexPag = getItemsPaginations();
      if (photo.value.data && photo.value.data?.length > 0) {
        return photo.value.data.slice(indexPag["start"], indexPag["limit"]); //paginacion
      }
      return [];
    });

    //HOOKS
    const isAuthorized = computed(() => route.meta?.noAuth);
    onMounted(() => {
      getPostService();
    });

    watch([isTablePost, pageNum], ([isTablePost, pageNum]) => {
      if (!isTablePost) {
        return getPhotoService();
      }
      if (pageNum && !isTablePost) {
        return getPhotoService();
      }
    });
    return {
      loading,
      isAuthorized,
      posts,
      updateHandler,
      pageNum,
      totalPages,
      itemsPagerPost,
      getPhotoService,
      photo,
      isTablePost,
      itemsPagerPhotos,
    };
  },
});
</script>

<style>
.box-card {
  width: 480px;
}
.contentCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contentEnd {
  padding-right: 190px;
  display: flex;
  justify-content: end;
  align-items: end;
}
body {
  background: rgba(238, 231, 231, 0.274);
}
</style>