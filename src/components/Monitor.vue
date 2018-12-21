<template>
    <div>
      <el-container>
        <el-main>
          <el-table
            :data="tableData"
            border
            stripe
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
                <el-button type="warning" @click="JumpTaskDialog(scope.row.taskId,scope.row.processDefinitionId,scope.row.currentNodeId)" size="mini">跳转</el-button>
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
              :current-page.sync="pageNumber"
              :page-sizes="pageSizes"
              :page-size.sync="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="tatals">
            </el-pagination>
          </div>
        </el-main>
      </el-container>

      <el-dialog title="跳转流程" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="form">
          <el-form-item label="流程节点" :label-width="formLabelWidth">
            <el-select v-model="form.targetNodeId" placeholder="请选择流程节点">
              <el-option v-for="(item,index) in activitiList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="操作意见" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="form.message"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="JumpTask()">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="终止流程" :visible.sync="endDialogFormVisible" width="30%">
        <el-form :model="endForm">
          <el-form-item label="操作意见" :label-width="formLabelWidth">
            <el-input type="textarea" v-model="endForm.message"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="endDialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="EndTask()">确 定</el-button>
        </div>
      </el-dialog>
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
          dialogFormVisible: false,
          form: {
            taskId: '',
            targetNodeId: '',
            message: '',
            currentNodeId: ''
          },
          activitiList: [],
          endDialogFormVisible: false,
          endForm: {
            taskId: '',
            message: ''
          },
        }
      },
      methods: {
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
              console.log(error);
            });
        },
        /**
         * 移交
         * */
        changeAssignee(taskId){
          console.log("移交：" + taskId);
        },
        /**
         * 跳转流程dialog
         * */
        JumpTaskDialog(taskId,processDefinitionId,currentNodeId){
          this.dialogFormVisible = true;
          //发送get请求
          axios.get(this.GLOBAL.ProviderUrl + '/processActiviti/getActivitiListNotMe',{params:{"processDefinitionId":processDefinitionId,"currentNodeId":currentNodeId}})
            .then(res => {
              this.activitiList = res.data.data;
              this.form.taskId=taskId;
              this.form.currentNodeId=currentNodeId;
          })
          .catch(error=> {
              console.log(error);
          });
        },
        /**
         * 跳转流程
         * */
        JumpTask(){
          this.dialogFormVisible = false;
          this.GLOBAL.openMsg("流程开始跳转",0);
          //发送post请求
          axios.post(this.GLOBAL.ProviderUrl + '/task/jumpTask',this.form,{emulateJSON:true})
            .then(res => {
              this.loadData(this.pageNumber,this.pageSize);
              if(res.data.success){
                this.GLOBAL.openMsg("流程跳转成功",1);
              }else{
                this.GLOBAL.openMsg(res.data.message,3);
              }
          })
          .catch(error=> {
              console.log(error);
          });
        },
        /**
         * 终止
         * */
        flowEndTaskDialog(taskId){
          this.endDialogFormVisible = true;
          this.endForm.taskId=taskId;
        },
        EndTask(){
          this.endDialogFormVisible = false;
          this.GLOBAL.openMsg("流程开始终止",0);
          //发送post请求
          axios.post(this.GLOBAL.ProviderUrl + '/task/endTask',this.endForm,{emulateJSON:true})
            .then(res => {
            this.loadData(this.pageNumber,this.pageSize);
            if(res.data.success){
              this.GLOBAL.openMsg("流程终止成功",1);
            }else{
              this.GLOBAL.openMsg(res.data.message,3);
            }
          })
          .catch(error=> {
              console.log(error);
          });
        },
      },
      created: function () {
        this.loadData(this.pageNumber,this.pageSize);
      }
    }
</script>

<style>
  .el-container {
    margin-bottom: 40px;
  }
</style>
