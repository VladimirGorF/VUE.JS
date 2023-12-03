<template>
  <div>
    <div>{{ userData.name }}</div>
    <label for="name">Name: <input id="name" v-model="name" /></label>
    <label for="surname"
      >Name: <input id="surname" v-model="surname"
    /></label>

    <div>мэйл: {{ userData.email }}</div>
    <button @click="toggleInfo">Show More Details</button>
    <div v-if="showMore">
      <div>телефон: {{ userData.phone }}</div>
      <div>адрес: {{ userData.address }}</div>
    </div>
    <button @click="saveData">SAVE</button>
  </div>
</template>

<script>
export default {
  name: "MyUser",
  props: ["userData"],

  data() {
    return {
      showMore: false,
      name: "",
      surname: "",
    };
  },

  mounted() {},
  created(){
    this.name = this.userData.name;
    this.surname = this.userData.surname;
  },
  methods: {
    toggleInfo() {
      this.showMore = !this.showMore;
    },
    saveData(){
        const updatedUser = {
            user: this.userData,
            name: this.name,
            surname: this.surname,
        }
        this.$emit('upDateUser', updatedUser);
    }
   
  },
};
</script>

<style lang="scss" scoped></style>
