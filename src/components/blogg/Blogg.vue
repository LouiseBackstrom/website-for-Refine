<template>
  <article class="blogg">
        <div class="card2" id="item1">
            <h2>{{post.headline}}</h2>
            <p>{{date}}</p>
            <p>{{post.text}}</p>
        </div>
        <div class="picture3" id="item2">
            <img :src="post.photo.fields.file.url" alt="" /> 
        </div>
  </article>
</template>

<script>
import moment from 'moment';
moment.locale('sv');
export default {
    props: ['post'],
    name: 'Entry',
    computed: {
        date() {
            return moment(this.post.date).format("MMM ddd YYYY");
        }
    }
}
</script>

<style lang="scss">
@import './_blogg.scss';
</style>