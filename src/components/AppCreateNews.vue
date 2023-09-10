<script>
import { RouterLink, RouterView } from 'vue-router';
import axios from 'axios';

tinymce.init({
  // Select the element(s) to add TinyMCE to using any valid CSS selector
  selector: '#myTextarea',
  plugins:
    'preview powerpaste casechange searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample advtable table charmap pagebreak nonbreaking anchor advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter permanentpen pageembed linkchecker emoticons export',
  height: '700px',
  toolbar_sticky: true,
  icons: 'thin',
  autosave_restore_when_empty: true,
});

export default {};
</script>

<template>
  <div class="wrapperNews">
    <input type="text" class="inputTitle" placeholder="заголовок новости" />
    <textarea id="myTextarea"> </textarea>
  </div>
</template>

<style scoped>
    .wrapperNews{
        display: flex;
        flex-direction: column;
    }
</style>
