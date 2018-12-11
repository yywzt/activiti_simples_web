<template>
    
</template>

<script>
    const ProviderUrl = 'http://localhost:18082';
    function laymsg(msg){
      layer.msg(msg, {
        icon: 1,
        time: 2000 //2秒关闭（如果不配置，默认是3秒）
      }, function () {
        //do something
      });
    }
    export default {
      name: "Global",
      ProviderUrl,
      laymsg,
    }
</script>

<style scoped>

</style>
