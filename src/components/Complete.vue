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
            prop="id"
            label="任务编号"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务名称"
          >
          </el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
          >
          </el-table-column>
          <el-table-column
            prop="endTime"
            label="结束时间"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            width="360px"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="handleGetLeave(scope.row)" size="mini">办理</el-button>
              <el-button type="info" @click="handleViewHisComment(scope.row)" size="mini">查看历史批注</el-button>
              <el-button type="info" @click="handleListAction(scope.row)" size="mini">流程执行过程</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="block">
          <el-pagination
            @size-change="handlePaginationChange"
            @current-change="handlePaginationChange"
            @prev-click="handlePaginationChange"
            @next-click="handlePaginationChange"
            :current-page="pageForm.pageNumber"
            :page-sizes="pageSizes"
            :page-size="pageForm.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tatals">
          </el-pagination>
        </div>
      </el-main>
    </el-container>

    <el-dialog title="历史批注" :visible.sync="dialogTableVisible" width="30%">
      <el-table :data="gridData">
        <el-table-column property="userId" label="批注人" width="150"></el-table-column>
        <el-table-column property="message" label="批注信息" width="200"></el-table-column>
        <el-table-column property="time" label="批注时间"></el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog title="流程执行过程" :visible.sync="dialogTableVisible2">
      <el-table :data="instData">
        <el-table-column property="activitiId" label="任务节点ID" width="300"></el-table-column>
        <el-table-column property="activitiName" label="任务节点名称" width="200"></el-table-column>
        <el-table-column property="startTime" label="开始时间"></el-table-column>
        <el-table-column property="endTime" label="结束时间"></el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="leaveForm">
        <el-input v-model="leaveForm.id" autocomplete="off" type="hidden"></el-input>
        <el-form-item label="请假人" :label-width="formLabelWidth">
          <el-input v-model="leaveForm.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请假时间" :label-width="formLabelWidth">
          <el-input v-model="leaveForm.leaveDate" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请假天数" :label-width="formLabelWidth">
          <el-input v-model="leaveForm.leaveDays" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请假原因" :label-width="formLabelWidth">
          <el-input v-model="leaveForm.leaveReason" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="批注" :label-width="formLabelWidth">
          <el-input type="textarea" placeholder="批注" v-model="leaveForm.comment" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="info" @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="warning" @click="handleComplete(0)">驳回</el-button>
        <el-button type="primary" @click="handleComplete(1)">批准</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      name: "Complete",
      data() {
        return {
          tableData: [],
          pageSizes: [10, 20, 50, 100],
          tatals: 0,
          form: {
            leaveDays: '',
            leaveReason: ''
          },
          pageForm: {
            pageSize: 10,
            pageNumber: 1
          },
          formLabelWidth: '120px',
          gridData: [],
          dialogTableVisible: false,
          instData: [],
          dialogTableVisible2: false,
          dialogFormVisible: false,
          leaveForm: {
            id: '',
            userId: '',
            leaveDate: '',
            leaveDays: '',
            leaveReason: '',
            comment: ''
          },
          completeForm: {
            id: '',
            comment: '',
            state: 0
          },
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
          axios.post(this.GLOBAL.ProviderUrl + '/task/taskPage',this.pageForm,{emulateJSON:true})
            .then(res => {
            this.tatals = res.data.data.rowTotal;
            this.tableData = res.data.data.rows;
          })
          .catch(error=> {
              console.log(error.response.data);
          });
        },
        //查询代办请假单详情
        handleGetLeave(row){
          this.dialogFormVisible = true;
          this.leaveForm.id = row.id;
          axios.get(this.GLOBAL.ProviderUrl + '/task/getLeave',{params:{"taskId":row.id}})
            .then(res => {
              if(res.data.success){
                var data = res.data.data;
                this.leaveForm.userId = data.userId;
                this.leaveForm.leaveDate = data.leaveDate;
                this.leaveForm.leaveDays = data.leaveDays;
                this.leaveForm.leaveReason = data.leaveReason;
              }
          })
          .catch(error=> {
              console.log(error.response.data);
          });
        },
        //办理待办任务
        handleComplete(state){
          this.dialogFormVisible = false;
          this.completeForm.id = this.leaveForm.id;
          this.completeForm.state = state;
          this.completeForm.comment = this.leaveForm.comment;
          axios.post(this.GLOBAL.ProviderUrl + '/task/complete',this.completeForm,{emulateJSON:true})
            .then(res => {
              if(res.data.success){
                this.GLOBAL.laymsg('审批完成');
              }else{
                this.GLOBAL.laymsg(res.data.message);
              }
              this.loadData(this.pageNumber,this.pageSize);
          })
          .catch(error=> {
              console.log(error.response.data);
          });
        },
        //查看历史批注
        handleViewHisComment(row){
          this.dialogTableVisible = true;
          axios.get(this.GLOBAL.ProviderUrl + '/task/showHisComment',{params:{"taskId":row.id}})
            .then(res => {
              if(res.data.success){
                this.gridData = res.data.data;
              }
            })
            .catch(error=> {
                console.log(error.response.data);
            });
        },
        //查看流程实例执行过程
        handleListAction(row){
          this.dialogTableVisible2 = true;
          axios.get(this.GLOBAL.ProviderUrl + '/task/listAction',{params:{"taskId":row.id}})
            .then(res => {
              if(res.data.success){
                this.instData = res.data.data;
              }
            })
            .catch(error=> {
                console.log(error.response.data);
            });
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
