<template>
  <div class="container">
    <div class="show-comment"><span>Имя</span> {{name}}</div>
    <div class="show-comment"><span>E-Mail</span> {{email}}</div>
    <div class="show-comment"><span>Комментарий</span> {{comment}}</div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        name: null,
        email: null,
        comment: null,
      };
    },
    mounted() {
      const data  = this.$route.query.data;
      this.name = data.name;
      this.email = data.email;
      this.comment = data.comment;

    },
  }
</script>
