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
              <el-button type="primary" @click="handleDesign(scope.row)" size="mini">提交申请</el-button>
              <el-button type="info" @click="handleDeployment(scope.row)" size="mini">查看历史批注</el-button>
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
            :total="tatal">
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
          tatal: 0,
          dialogFormVisible: false,
          form: {
            leaveDays: '',
            leaveReason: ''
          },
          formLabelWidth: '120px',
          ProviderUrl: 'http://localhost:18082'
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
          axios.get(this.ProviderUrl + '/leave/page',{params:{"pageSize":pageSize,"pageNumber":pageNumber}})
            .then(res => {
              this.tatal = res.data.data.totalElements;
              this.tableData = res.data.data.content;
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
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
