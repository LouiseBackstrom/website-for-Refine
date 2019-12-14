<template>
  <article class="blogg">
    <h1>{{post.headline}}</h1>
    <p>{{post.text}}</p>
    <img :src="post.photo.fields.file.url" :alt="camilla" /> 
  </article>
</template>

<script>

export default {
    props: ['post'],
    name: 'Entry'
}
</script>

<style lang="scss">
@import './_blogg.scss';
</style>