<template>
  <div>
    <el-container>
      <el-main>
        <el-button @click="dialogFormVisible = true" type="primary" plain style="float: left;margin: 10px 0px;">新增请假单</el-button>
        <el-table
          :data="tableData"
          border
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            prop="id"
            label="编号"
          >
          </el-table-column>
          <el-table-column
            prop="leaveDate"
            label="请假日期"
          >
          </el-table-column>
          <el-table-column
            prop="leaveDays"
            label="请假时长"
          >
          </el-table-column>
          <el-table-column
            prop="leaveReason"
            label="请假原因"
          >
          </el-table-column>
          <el-table-column
            prop="leaveState"
            label="审核状态"
          >
          </el-table-column>
          <el-table-column
            label="操作"
            width="360px"
          >
            <template slot-scope="scope">
              <el-button type="primary" @click="startLeave(scope.row)" v-if="scope.row.state == '0'" size="mini">提交申请</el-button>
              <el-button type="info" @click="handleViewHisComment(scope.row)" size="mini">查看历史批注</el-button>
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

    <el-dialog title="新增请假申请单" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="请假天数" :label-width="formLabelWidth">
          <el-input v-model="form.leaveDays" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="请假缘由" :label-width="formLabelWidth">
          <el-input v-model="form.leaveReason" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="历史批注" :visible.sync="dialogTableVisible" width="30%">
      <el-table :data="gridData">
        <el-table-column property="userId" label="批注人" width="150"></el-table-column>
        <el-table-column property="message" label="批注信息" width="200"></el-table-column>
        <el-table-column property="time" label="批注时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
    export default {
      name: "Leave",
      data() {
        return {
          tableData: [],
          pageSizes: [10, 20, 50, 100],
          pageSize: 10,
          pageNumber: 1,
          tatals: 0,
          dialogFormVisible: false,
          form: {
            leaveDays: '',
            leaveReason: ''
          },
          formLabelWidth: '120px',
          gridData: [],
          dialogTableVisible: false,
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
          axios.get(this.GLOBAL.ProviderUrl + '/processLeave/page',{params:{"pageSize":pageSize,"pageNumber":pageNumber}})
            .then(res => {
              this.tatals = res.data.data.totalElements;
              this.tableData = res.data.data.content;
            })
            .catch(error=> {
              console.log(error.response.data);
            });
        },
        //新增申请单
        add(){
          //发送post请求
          axios.post(this.GLOBAL.ProviderUrl + "/processLeave/newProcessLeave",this.form,{emulateJSON:true})
            .then(res => {
              this.dialogFormVisible = false;
              this.loadData(this.pageNumber,this.pageSize);
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        //提交申请单
        startLeave(row){
          var leaveId = row.id;
          var params = new URLSearchParams();
          params.append("leaveId",leaveId);
          axios.post(this.GLOBAL.ProviderUrl + "/processLeave/start",params,{emulateJSON:true})
            .then(res => {
              if(res.data.success){
                this.loadData(this.pageNumber,this.pageSize);
              }else{
                this.GLOBAL.laymsg(res.data.message);
              }
            })
            .catch(error => {
                console.log(error.response.data);
            });
        },
        //查看历史流程批注
        handleViewHisComment(row){
          this.dialogTableVisible = true;
          axios.get(this.GLOBAL.ProviderUrl + '/processLeave/showHisComment',{params:{"processInstanceId":row.processInstanceId}})
            .then(res => {
            if(res.data.success){
              this.gridData = res.data.data;
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
