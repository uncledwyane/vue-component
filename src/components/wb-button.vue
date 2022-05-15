<template>
    <button class="wb-button" :class="[{'is-round': round}, {'is-circle': circle}, type ? 'wb-button-' + type : '']" @click="handleClick" >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
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

<style>
.wb-button{
    outline: none;
    display: inline-block;
    border-radius: 4px;
    padding: 8px 20px;
    font-size: 15px;
    cursor: pointer;
    background: #ffffff;
    color: #000000;
    border: none;
    box-sizing: border-box;
    margin: 0 5px;
}

.wb-button:active{
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}

.wb-button-main{
    color: #ffffff;
    background: #1989fa;
}
.wb-button-main:active{
    color: #ffffff;
    background: #8cc4fc;
}

.wb-button-success{
    color: #ffffff;
    background: #5cb87a ;
}
.wb-button-success:active{
    color: #ffffff;
    background: #addbbc;
}

.wb-button-warning{
    color: #ffffff;
    background: #e6a23c;
}
.wb-button-warning:active{
    color: #ffffff;
    background: #f2d09d;
}

.wb-button-danger{
    color: #ffffff;
    background: #f56c6c;
}
.wb-button-danger:active{
    color: #ffffff;
    background: #fab5b5;
}

.wb-button-default{
    border: 1px solid #eaeaea;
}
.wb-button-default:active{
    border: 1px solid #017aeb;
    background: #ecf5ff;
}

.is-round{
    border-radius: 30px;
}

.is-circle{
    width: 40px;
    height: 40px;
    padding: 12px;
    text-align: center;
    white-space: nowrap;
    line-height: 1;
    border-radius: 50%;
}
</style>