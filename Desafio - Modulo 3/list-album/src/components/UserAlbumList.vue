<template>
  <h1 class="title">Lista</h1>
  <table class="album-list-table">
    <thead>
      <tr>
        <th class="album-list-table__th">ID</th>
        <th class="album-list-table__th">Título</th>
      </tr>
    </thead>
    <tr
      v-for="item in list"
      :key="item.id"
      v-on:click="selectAlbumDetail(item.id)"
    >
      <td class="album-list-table__td">{{ item.id }}</td>
      <td class="album-list-table__td">{{ item.title }}</td>
    </tr>
    <tbody></tbody>
  </table>
  <footer class="footer">
    <button class="btn-back" v-on:click="backPage">Voltar</button>
  </footer>
</template>

<script>
import { getAlbumList } from "../services/album-service.js";
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "UserAlbumList",
  setup() {
    const list = ref([]);
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      getAlbumList(route.params.id).then((resp) => {
        list.value = resp;
      });
    });

    const backPage = () => router.replace("/");

    const selectAlbumDetail = (id) =>
      router.push({ name: "album", params: { id } });

    return { list, selectAlbumDetail, backPage };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  text-align: center;
}
.album-list-table {
  border-collapse: collapse;
  width: 100%;
}

.album-list-table__th {
  padding: 8px;
  font-weight: 800;
  color: white;
  background-color: #363b80;
  text-align: left;
  border: 1px solid #363b80;
}

.album-list-table__td {
  border: 1px solid #ddd;
  padding: 4px;
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.album-list-table tr:hover {
  background-color: #ddd;
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
</style>
