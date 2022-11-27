<template>
    <div class="mytext">
        <slot name="one"></slot>
        <slot name="two"></slot>
        
    </div>
</template>

<script>
export default {
    name:'my-text'
}
</script>

<style>
.mytext {
    width: 500px;
    border: 1px solid #333;
    margin: auto;
}
</style>