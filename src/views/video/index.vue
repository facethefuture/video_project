<template>
    <div :class="$style.box">
      sssss
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10"
        infinite-scroll-immediate-check>
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
      loading: false,
      currentPage: 1
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList (){
      this.$axios.get("/api/web01/queryStudent",{
        params: {
          page: this.currentPage
        }
      }).then((res) => {
        console.log(res)
        res.data.forEach((item) => {
          this.videoList.push(item)
        })
      })
    },
    loadMore () {
      this.currentPage++
      this.getList()
    }
  }
}
</script>

<style lang="scss" module>
.box{
  ul{
    height: 100vh;
  }
  min-height: 100vh;
  font-size: 20px;
}
</style>
