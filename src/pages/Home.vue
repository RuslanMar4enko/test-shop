<template>
  <div>
    <Form></Form>
    <section class="comments__wrapper">
      <div class="comments">
        <div class="container">
          <h3>Выводим комментарии</h3>
          <div class="comments-view">
            <div class="row">
              <div class="col-md-4 col-xs"
                   v-for="(comment, index) in comments"
                   v-bind:key="index">
                <router-link :to="{name: 'showComment', query: { data: comment }}">
                  <div class="comments__item"
                       :class="classComment(index)">
                    <div class="comments__item-header">
                      {{ comment.name }}
                    </div>
                    <div class="comments__item-content">
                      <span>{{ comment.email }}</span>
                      <p>{{ comment.comment }}</p>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  import Form from "../components/Form"

  export default {
    data() {
      return {
        comments: null
      };
    },
    components: {
      Form
    },
    mounted() {
      this.comments = this.getComments();
    },
    methods: {
      classComment(index) {
        return index % 2 ? 'comments__item_grey' : 'comments__item_green';
      },
      getComments() {
        return this.$store.getters.comment
      }
    },
    computed: {
      commentsData() {
        return this.getComments();
      },
    },
    watch: {
      commentsData(commentsData) {
        this.comments = commentsData;
      },
    },
  };
</script>

