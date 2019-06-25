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
    }
  }
</script>
<style>
.layout-default {
  background-color: #F8F8F8;
}
</style>