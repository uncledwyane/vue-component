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

        <wb-divider></wb-divider>

        <wb-switch @change="handleSwitchChange"></wb-switch>
        <wb-switch></wb-switch>
        <wb-switch></wb-switch>
        <wb-switch></wb-switch>
        <wb-switch></wb-switch>

        <Verify :type="1"></Verify>
    </div>
</template>

<script>
import wbButton from 'components/wb-button.vue';
import wbProgress from 'components/wb-progress.vue';
import wbDivider from 'components/wb-divider.vue';
import wbSwitch from 'components/wb-switch.vue';
// import Verify from 'vue2-verify';

export default {
    components: {
        wbButton,
        wbProgress,
        wbDivider,
        wbSwitch,
        Verify
    },
    data () {
        return {
            btnEnable: true
        }
    },
    methods: {
        handleSwitchChange(e) {
            console.log('change: ', e)
        }
    }
}
</script>

<style>

</style>