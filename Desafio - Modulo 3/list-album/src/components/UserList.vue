<template>
  <h1 class="title">Usuários</h1>
  <table class="user-list-table">
    <thead>
      <tr>
        <th class="user-list-table__th">ID</th>
        <th class="user-list-table__th">Usuário</th>
        <th class="user-list-table__th">Email</th>
      </tr>
    </thead>
    <tr
      v-for="user in users"
      :key="user.id"
      v-on:click="selectAlbumList(user.id)"
    >
      <td class="user-list-table__td">{{ user.id }}</td>
      <td class="user-list-table__td">{{ user.name }}</td>
      <td class="user-list-table__td">{{ user.email }}</td>
    </tr>
    <tbody></tbody>
  </table>
</template>

<script>
import { ref, onMounted } from "vue";
import { getUsers } from "../services/user-service.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const users = ref([]);
    const router = useRouter();
    onMounted(() => {
      getUsers().then((resp) => {
        users.value = resp;
      });
    });

    const selectAlbumList = (id) =>
      router.push({ name: "UserAlbumList", params: { id } });

    return { users, selectAlbumList };
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}

.user-list-table {
  border-collapse: collapse;
  width: 100%;
}

.user-list-table__th {
  padding: 8px;
  font-weight: 800;
  color: white;
  background-color: #363b80;
  text-align: left;
  border: 1px solid #363b80;
}

.user-list-table__td {
  border: 1px solid #ddd;
  padding: 4px;
  cursor: pointer;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.user-list-table tr:hover {
  background-color: #ddd;
}
</style>