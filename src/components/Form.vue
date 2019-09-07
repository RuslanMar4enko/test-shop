<template>
  <section class="form__wrapper">
    <div class="container">
      <div class="row form">
        <div class="col-5 d-flex flex-column left">
          <div class="form__input-group">
            <label for="name">Имя <span>*</span></label>
            <input type="text"
                   id="name"
                   v-model="name"
                   name="name"
                   :data-vv-as="'Имя'"
                   v-validate="'required|min:3|max:16'">
            <small class="form-text text-danger" v-if="errors.has('name')">
              {{ errors.first('name') }}
            </small>
          </div>
          <div class="form__input-group">
            <label for="email">E-Mail <span>*</span></label>
            <input type="email"
                   id="email"
                   v-model="email"
                   name="email"
                   :data-vv-as="'E-Mail'"
                   v-validate="'email|required'">
            <small class="form-text text-danger" v-if="errors.has('email')">
              {{ errors.first('email') }}
            </small>
          </div>
        </div>
        <div class="col-1"></div>
        <div class="col-6 right">
          <div class="form__input-group">
            <label for="comment">Комментарий <span>*</span></label>
            <textarea
              id="comment"
              v-model="comment"
              name="comment"
              :data-vv-as="'Комментарий'"
              v-validate="'required|min:30'"></textarea>
            <small class="form-text text-danger" v-if="errors.has('comment')">
              {{ errors.first('comment') }}
            </small>
          </div>
        </div>
        <div class="col-12 d-flex justify-content-end">
          <button :disabled="errors.any()" @click="addComment()">Записать</button>
        </div>
      </div>
    </div>
  </section>
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
    components: {},
    methods: {
      async addComment() {
        try {
          const isValid = await this.$validator.validateAll();
          if (isValid) {
            const {name, email, comment} = this;
            this.$store.commit('COMMENT', {name, email, comment});
            this.resetForms();
          }
        } catch (e) {
          alert(e)
        }
      },
      resetForms() {
        this.name = null;
        this.email = null;
        this.comment = null;
        this.$validator.reset()
      }
    },
  };
</script>
