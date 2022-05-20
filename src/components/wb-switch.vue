<template>
    <div class="wb-switch" @click="handleClick">
        <div class="wb-switch-btn-bg" :class="[enable ? 'wb-switch-btn-bg-active': 'wb-switch-btn-bg-inactive']">
            <div class="wb-switch-btn" :class="[enable ? 'wb-switch-btn-active': 'wb-switch-btn-inactive']"></div>
        </div>
    </div>
</template>

<script>
import 'static/styles/wb-switch.css';
/**
 * mode为按钮状态 on | off
 */
export default {
    props: [],
    data() {
        return {
            enable: false,
            mode: 'on', // on | off |disabled
        }
    },
    methods: {
        handleClick(evt) {
            const self = this
            self.enable = !self.enable;
            self.$emit('click', evt)
        }
    }
}
</script>