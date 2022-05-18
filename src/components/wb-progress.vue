<template>
    <div class="wb-progress-bar">
        <div class="wb-bar-bg">
            <div class="wb-bar-progress" :style="barStyle">
                <span class="wb-bar-progress-spot" :style="barSpotStyle"></span>
            </div>
        </div>
    </div>
</template>

<script>
import 'styles/wb-progress.css';
export default {
    data() {
        return {
            mode: 'unable', // play mode:  pause start
            duration: '3:53', // 音乐时间长度
            durationToSeconds: 0, // 音乐时间长度转化为秒
            barGrowth: 0, // 进度条每秒步进的长度
            growthTimer: null, // 步进的轮训
            dropTimer: null // 步减的轮训
        }
    },
    computed: {
        barStyle() {
            const self = this;
            const style = {};
            style.width = self.percentage + '%';
            style.background = self.color;
            return style;
        },
        barSpotStyle() {
            const self = this;
            const style = {};
            style.background = self.color;
            return style;
        }
    },
    props: ['percentage', 'width', 'color'],
}
</script>

<style>

</style>