<script>
import { RouterLink, RouterView } from 'vue-router';
import axios from 'axios';

export default {
  components: {},
  data() {
    return {
      NEWS: ``,
      admin: false,
    };
  },
  methods: {
    async loadNews() {
      await axios
        .get(`/news`, {
          headers: {
            "Authorization": document.cookie.replace('token=', ``),
          },
        })
        .then((e) => {
          this.NEWS = e.data.news;
          this.admin = e.data.admin;
        });
    },
  },
  mounted() {
    this.loadNews();
  },
};
</script>

<template>
  <RouterLink v-if="admin" to="/create-news">Создать новость</RouterLink>
  <div class="wrapperNews">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item" v-for="(news, i) in NEWS">
        <h2 class="accordion-header" :id="'heading' + i">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + i"
            aria-expanded="true"
            :aria-controls="'collapseOne' + i"
          >
            {{ news.title }}
            <button class="delete">Удалить</button>
          </button>
        </h2>
        <div
          :id="'collapse' + i"
          class="accordion-collapse collapse show"
          :aria-labelledby="'heading' + i"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            {{ news.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delete{
  margin-left: 80% ;
  background: rgba(230, 86, 86, 0.992);
  color: #fff;
  border: none;
  padding: 5px 10px;
}
a{
  width: fit-content;
  padding: 5px 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 1px solid var(--mainColor);
  color: var(--mainColor);
}
.wrapperNews {
  width: 80%;
  height: 100%;
  overflow-y: scroll;
}
.accordion-body {
  color: var(--mainColor);
}
.wrapperNews::-webkit-scrollbar {
  width: 0;
}

.accordion-item {
  background: transparent;
  border: 1px solid var(--mainColor);
}
.accordion-button {
  border: none;
  padding: 10px !important;
  background: transparent;
  color: var(--mainColor);
}
.accordion-button:focus {
  box-shadow: none;
  border: none;
}
.accordion-button:not(.collapsed)::after {
  background-image: url('/src/assets/img/arrow-down-sign-to-navigate.png');
}
.accordion-button::after {
  background-image: url('/src/assets/img/arrow-down-sign-to-navigate.png');
}
</style>
