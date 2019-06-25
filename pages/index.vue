<template>
  <div class="page-index">
    <el-row>
      <emenu />
      <banner/>
    </el-row>
    <el-row>
      <container/>
    </el-row>
  </div>
</template>

<script>
  import Emenu from "@/components/index/menu.vue"
  import banner from "@/components/index/banner.vue"
  import container from "@/components/index/container.vue"
  export default {
    components: {
      Emenu,
      banner,
      container
    }
  }
</script>

<style lang="scss">
  .page-index {
    width: 1190px;
    margin: 0 auto;
  }
</style>


