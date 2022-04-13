<template>
  <h1 class="title">Fotos</h1>
  <div class="body">
    <div class="card" v-for="item in album" :key="item.id">
      <div>
        <img class="img-card" :src="item.url" alt="" />
      </div>
      <a class="a-card" v-bind:href="item.thumbnailUrl" target="_blank">{{
        item.title
      }}</a>
    </div>
  </div>
  <footer class="footer">
    <button class="btn-back" v-on:click="backPage">Voltar</button>
  </footer>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAlbum } from "../services/album-service.js";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const album = ref([]);

    onMounted(() => {
      getAlbum(route.params.id).then((resp) => {
        album.value = resp;
      });
    });

    const backPage = () => router.replace("/");

    return { album, backPage };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

.body {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.card {
  width: 200px;
  padding: 10px;
}
.img-card {
  width: 200px;
  height: auto;
}
.a-card {
  text-decoration: none;
  font-size: 1em;
  font-weight: 700;
  color: black;
}

.footer {
  bottom: 0;
  position: sticky;
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
  background-color: white;
  box-shadow: 0px 0px 3px #979191;
}
.btn-back {
  width: 200px;
  padding: 10px;
  margin: auto;
  border-radius: 10px;
  background-color: white;
  color: black;
  border: 2px solid #969696;
}

@media (max-width: 700px) {
  .card {
    width: 250px;
    padding: 10px;
  }
  .img-card {
    width: 250px;
    height: auto;
  }
}
@media (max-width: 580px) {
  .card {
    width: 350px;
    padding: 10px;
  }
  .img-card {
    width: 350px;
    height: auto;
  }
}
</style>