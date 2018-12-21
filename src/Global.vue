<template>
    
</template>

<script>
    import { Message } from 'element-ui';
    const ProviderUrl = 'http://localhost:18082';
    function laymsg(msg){
      layer.msg(msg, {
        icon: 1,
        time: 2000 //2秒关闭（如果不配置，默认是3秒）
      }, function () {
        //do something
      });
    }
    function openMsg(msg,typeCode){
      var type;
      if(typeCode===0){
        type='info';
      }else if(typeCode===1){
        type='success';
      }else if(typeCode===2){
        type='warning';
      }else if(typeCode===3){
        type='error';
      }
      Message({
        type: type,
        message: msg,
        showClose: true
      });
    }
    export default {
      name: "Global",
      ProviderUrl,
      laymsg,
      openMsg
    }
</script>

<style scoped>

</style>
