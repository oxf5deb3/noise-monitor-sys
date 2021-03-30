<template>
       
    <div> {{msg}}</div>
</template>

<script>
    export default {
        data() {
            return {msg: 'vue模板页'}
        },
      computed:{
          sum(){
            return this.msg;
          }
      }
    }
</script>
<style scoped>

</style>
