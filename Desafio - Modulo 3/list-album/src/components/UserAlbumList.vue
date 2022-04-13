<template>
  <h1>Lista</h1>
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
</template>

<script>
import { getAlbumList } from "../services/album-service.js";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "UserAlbumList",
  setup() {
    const list = ref([]);
    const router = useRouter();
    onMounted(() => {
      getAlbumList().then((resp) => {
        list.value = resp;
      });
    });

    const selectAlbumDetail = (id) =>
      router.push({ name: "album", params: { id } });

    return { list, selectAlbumDetail };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
