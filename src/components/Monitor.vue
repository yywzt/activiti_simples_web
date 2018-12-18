<template>
    <div>
      <el-container>
        <el-main>
          <el-table
            :data="tableData"
            border
            :row-class-name="tableRowClassName"
          >
            <el-table-column
              prop="instanceName"
              label="流程实例"
            >
            </el-table-column>
            <el-table-column
              prop="currentNode"
              label="当前节点"
            >
            </el-table-column>
            <el-table-column
              prop="assigneeName"
              label="当前处理人"
            >
            </el-table-column>
            <el-table-column
              prop="processDefinitionName"
              label="流程名称"
            >
            </el-table-column>
            <el-table-column
              prop="processDefinitionVersion"
              label="流程版本"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="360px"
            >
              <template slot-scope="scope">
                <el-button type="warning" @click="changeAssignee(scope.row.taskId)" size="mini">移交</el-button>
                <el-button type="warning" @click="flowJumpTaskDialog(scope.row.taskId,scope.row.processDefinitionId,scope.row.currentNodeId)" size="mini">跳转</el-button>
                <el-button type="danger" @click="flowEndTaskDialog(scope.row.taskId)" size="mini">终止</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="handlePaginationChange"
              @current-change="handlePaginationChange"
              @prev-click="handlePaginationChange"
              @next-click="handlePaginationChange"
              :current-page="pageNumber"
              :page-sizes="pageSizes"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tatals">
            </el-pagination>
          </div>
        </el-main>
      </el-container>
    </div>
</template>

<script>
    export default {
        name: "Monitor",
      data() {
        return {
          tableData: [],
          pageSizes: [10, 20, 50, 100],
          pageSize: 10,
          pageNumber: 1,
          tatals: 0,
          formLabelWidth: '120px',
        }
      },
      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        //分页参数变化，重新加载数据
        handlePaginationChange(){
          this.loadData(this.pageNumber,this.pageSize);
        },
        loadData(pageNumber, pageSize){
          //发送get请求
          axios.get(this.GLOBAL.ProviderUrl + '/processInstance/getInstancePage',{params:{"pageSize":pageSize,"pageNumber":pageNumber}})
            .then(res => {
              this.tatals = res.data.data.rowTotal;
              this.tableData = res.data.data.rows;
            })
            .catch(error=> {
              console.log(error.response.data);
            });
        },
        changeAssignee(taskId){
          console.log("移交：" + taskId);
        },
        flowJumpTaskDialog(taskId,processDefinitionId,currentNodeId){
          console.log("跳转：" + taskId);
          console.log("跳转：" + processDefinitionId);
          console.log("跳转：" + currentNodeId);
        },
        flowEndTaskDialog(taskId){
          console.log("终止：" + taskId);
        },
      },
      created: function () {
        this.loadData(this.pageNumber,this.pageSize);
      }
    }
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
