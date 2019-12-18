<template>
  <article class="blogg">
        <div class="item1">
            <h2>{{post.headline}}</h2>
            <p>{{post.text}}</p>
            <p>{{post.date}}</p>
        </div>
        <div class="item2">
            <img :src="post.photo.fields.file.url" /> 
        </div>
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