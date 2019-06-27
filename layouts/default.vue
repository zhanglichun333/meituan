<template>
  <div class="layout-default">
    <header>
      <myHeader />
    </header>
    <section>
      <nuxt/>
    </section>
    <footer>
      <myFooter />
    </footer>
  </div>
</template>
<script>
  import MyHeader from "@/components/public/header/index.vue"
  import MyFooter from "@/components/public/footer/index.vue"
  export default {
    components: {
      MyHeader,
      MyFooter
    },
    mounted () {
      //在页面加载时读取sessionStorage里的状态信息
      if (window.sessionStorage.getItem("store") ) {
          this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
      } 

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
          window.sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    }
  }
</script>
<style>
.layout-default {
  background-color: #F8F8F8;
}
</style>