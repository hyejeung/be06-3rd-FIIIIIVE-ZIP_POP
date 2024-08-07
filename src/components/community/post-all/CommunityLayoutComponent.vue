<template>
  <div id="app-body">
    <div class="community-container container" data-v-c05eb1ae="">
      <div class="soomgo-life-container" data-v-0352d1b6="" data-v-c05eb1ae="">
        <section id="community" class="community" data-v-4b40be3a="" data-v-0352d1b6="">
          <CommunityHeaderComponent></CommunityHeaderComponent>
          <CommunityPostListCoponent></CommunityPostListCoponent>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityHeaderComponent from './CommunityHeaderComponent.vue';
import CommunityPostListCoponent from './CommunityPostItemComponet.vue';
export default {
  name: "CommunityLayoutComponent",
  components: { CommunityHeaderComponent, CommunityPostListCoponent }
}
</script>

<style></style>