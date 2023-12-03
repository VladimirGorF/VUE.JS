<template>
  <div class="hello">
    <h1>Страница продукты</h1>
    <p>
      продуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродуктыпродукты
    </p>
  </div>
</template>

<script>
export default {
  name: "PageProduct",
  mounted() {
    console.log(this.$route);
    console.log(this.$route.params.page);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
