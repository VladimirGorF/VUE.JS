<!-- Создайте компонент "Список пользователей" (UserList), который
будет отображать список пользователей из переданного массива.
Каждый пользователь должен быть представлен в виде отдельного
компонента "Пользователь" (User), принимающего пропсы с данными
о пользователе (например, имя, фамилия и электронная почта). -->
<template>
  <div>
    <MyUser
      v-for="user in listUsers"
      :key="user.email"
      :user-data="user"
      @upDateUser="upDateUser"
    />
  </div>
</template>

<script>
import MyUser from "./My-User.vue";

export default {
  name: "MyListUsers",
  data() {
    return {
      listUsers: [
        {
          name: "Lyle",
          surname: "Kidd",
          phone: "(389) 304-6169",
          email: "amet@outlook.org",
          address: "944-2260 Ullamcorper Rd.",
        },
        {
          name: "May",
          surname: "Powers",
          phone: "(340) 800-4569",
          email: "leo.in@icloud.couk",
          address: "973-5364 Proin Av.",
        },
        {
          name: "Kirby",
          surname: "Steele",
          phone: "(332) 695-5529",
          email: "dolor.nulla.semper@yahoo.ca",
          address: "602-6256 Enim Street",
        },
        {
          name: "Edward",
          surname: "Lara",
          phone: "(493) 363-1411",
          email: "leo.elementum@protonmail.net",
          address: "Ap #845-8065 Tincidunt Street",
        },
        {
          name: "Cherokee",
          surname: "Bishop",
          phone: "(965) 277-4967",
          email: "vel.nisl@aol.com",
          address: "P.O. Box 881, 1850 Augue Street",
        },
        {
          name: "Alvin",
          surname: "Schneider",
          phone: "(120) 842-4127",
          email: "eros@hotmail.edu",
          address: "Ap #471-9986 Quisque Ave",
        },
        {
          name: "Allegra",
          surname: "Wallace",
          phone: "(332) 499-6306",
          email: "nibh.phasellus@hotmail.com",
          address: "Ap #428-3604 Et Ave",
        },
        {
          name: "Signe",
          surname: "Clements",
          phone: "(285) 742-3654",
          email: "sit@aol.couk",
          address: "P.O. Box 718, 2240 Sed Ave",
        },
        {
          name: "Cooper",
          surname: "Olsen",
          phone: "(224) 634-4595",
          email: "felis.ullamcorper.viverra@icloud.org",
          address: "5008 Molestie St.",
        },
        {
          name: "Bruce",
          surname: "Rich",
          phone: "(773) 706-8496",
          email: "pharetra.nibh@icloud.edu",
          address: "Ap #732-4066 Sed Rd.",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    upDateUser(userData) {
      const user = this.listUsers.find((user) => user === userData.user);
      if (user) {
        user.name = userData.name;
        user.surname = userData.surname;
      } else {
        alert("user not found");
      }
    },
  },
  components: { MyUser },
};
</script>

<style lang="scss" scoped></style>
