<template>
    <div :class="$style.box">
      sssss
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="(item,index) in videoList" :key="index">{{item.id}}{{item.name}}</li>
      </ul>
      <!--<ul>-->
        <!--<li v-for="(item,index) in videoList" :key="index">{{item.id}}{{item.name}}</li>-->
      <!--</ul>-->
    </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: "index",
  data () {
    return {
      videoList: [],
      loading: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList (){
      this.$axios.get("api/web01/queryStudent").then((res) => {
        console.log(res)
        res.data.forEach((item) => {
          this.videoList.push(item)
        })
      })
    },
    loadMore () {
      this.getList()
    }
  }
}
</script>

<style lang="scss" module>
.box{
  font-size: 20px;
}
</style>
