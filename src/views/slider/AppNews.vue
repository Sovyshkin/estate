<script>
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {},
  data() {},
  methods() {},
  mounted() {},
};
</script>

<template>
  <div class="wrapperNews">
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Новость #1
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">

          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Новость #2
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">

          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Новость #3
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapperNews{
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.accordion-body{
color: var(--mainColor);
}
.wrapperNews::-webkit-scrollbar {
  width: 0;
}

.accordion-item{
  background: transparent;
  border: 1px solid var(--mainColor);
}
.accordion-button{
  border: none;
  padding: 10px !important;
  background: transparent;
  color: var(--mainColor);
}
.accordion-button:focus{
  box-shadow: none;
  border: none;
}
.accordion-button:not(.collapsed)::after{
  background-image: url("/src/assets/img/arrow-down-sign-to-navigate.png")
}
.accordion-button::after{
  background-image: url("/src/assets/img/arrow-down-sign-to-navigate.png")
}
</style>
