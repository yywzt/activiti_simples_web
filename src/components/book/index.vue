<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true">
      <el-tab-pane label="首页" name="first">首页</el-tab-pane>
      <el-tab-pane label="新书上架" name="second">新书上架</el-tab-pane>
      <el-tab-pane label="图书库存" name="third">图书库存</el-tab-pane>
      <el-tab-pane label="借阅图书" name="fourth">借阅图书</el-tab-pane>
      <el-tab-pane label="归还图书" name="fiveth">归还图书</el-tab-pane>
      <el-tab-pane label="记录查询" name="sixth">记录查询</el-tab-pane>
      <el-tab-pane label="配置管理" name="seventh">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
      name: "index",
      data(){
          return {
            activeName: 'second'
          };
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>

</style>
