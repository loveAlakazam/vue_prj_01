<template>
  <div id="app">
    <!--component에 등록된 Header을 참조하여-->
    <!--Header.vue의 template코드를 불러와서 코드를 넣어준다.-->
    <Header />

    <!--자주바뀌는 컨텐츠 영역을 불러와서 router-view에 넣는다-->
    <div id="content" class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
</style>
