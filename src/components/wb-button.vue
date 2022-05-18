<template>
    <button class="wb-button" :class="[{'is-round': round}, {'is-circle': circle}, type ? 'wb-button-' + type : '']" @click="handleClick" >
        <span v-if="$slots.default">
            <slot></slot>
        </span>
    </button>
</template>

<script>
import 'styles/wb-button.css';
export default {
    props: {
        type: {
            type: String,
            default: 'default'
        },
        round: Boolean,
        circle: Boolean
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleClick(evt) {
            const self = this
            self.$emit('click', evt)
        }
    }
}
</script>