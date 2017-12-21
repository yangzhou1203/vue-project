<template>
  <div>
        <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item , i) in lunbotu" :key="i">
      <img :src="item.img" alt="">
  </mt-swipe-item>
        </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunbotu: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    async getlunbotu() {
      const { data } = await this.$http.get("/api/getlunbo");
      console.log(data);
      if (data.status === 0) this.lunbotu = data.message;
      
      //  console.log(await this.$http.get("/api/getlunbo"))
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 180px;
}
img{
    width: 100%;
    height: 100%;
}
</style>


