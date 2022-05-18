<template>
  <div id="root">
    <wb-button type="success">Success</wb-button>
    <wb-button type="warning">Warning</wb-button>
    <wb-button type="danger">Danger</wb-button>
    <wb-button type="success" round> Success Round</wb-button>

    <wb-divider></wb-divider>

    <div class="progress" style="width: 500px;">
        <wb-progress percentage="33" :color="'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'"></wb-progress>
    </div>
  </div>
</template>

<script>
import wbButton from 'components/wb-button.vue';
import wbProgress from 'components/wb-progress.vue';
import wbDivider from 'components/wb-divider.vue';
export default {
    components: {
        wbButton,
        wbProgress,
        wbDivider
    }
}
</script>

<style>

</style>