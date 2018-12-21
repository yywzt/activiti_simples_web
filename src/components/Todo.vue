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
            :current-page.sync="pageForm.pageNumber"
            :page-sizes="pageSizes"
            :page-size.sync="pageForm.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tatals">
          </el-pagination>
        </div>
      </el-main>
    </el-container>
    <el-dialog title="历史批注" :visible.sync="dialogTableVisible" width="30%">
      <el-table :data="gridData">
        <el-table-column property="userName" label="批注人" width="150"></el-table-column>
        <el-table-column property="message" label="批注信息" width="200"></el-table-column>
        <el-table-column property="time" label="批注时间"></el-table-column>
      </el-table>
    </el-dialog>

    <el-dialog title="流程执行过程" :visible.sync="dialogTableVisible2" width="40%">
      <el-table :data="instData">
        <el-table-column property="activitiId" label="任务节点ID" width="150"></el-table-column>
        <el-table-column property="activitiName" label="任务节点名称" width="200"></el-table-column>
        <el-table-column property="startTime" label="开始时间"></el-table-column>
        <el-table-column property="endTime" label="结束时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Todo",
    data() {
      return {
        tableData: [],
        pageSizes: [10, 20, 50, 100],
        tatals: 0,
        dialogFormVisible: false,
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
      }
    },
    methods: {
      //分页参数变化，重新加载数据
      handlePaginationChange(){
        this.loadData(this.pageForm.pageNumber,this.pageForm.pageSize);
      },
      loadData(pageNumber, pageSize){
        axios.post(this.GLOBAL.ProviderUrl + '/task/finishedList',this.pageForm,{emulateJSON:true})
          .then(res => {
          this.tatals = res.data.data.rowTotal;
        this.tableData = res.data.data.rows;
      })
      .catch(error=> {
          console.log(error);
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
          console.log(error);
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
          console.log(error);
      });
      },
    },
    created: function () {
      this.loadData(this.pageForm.pageNumber,this.pageForm.pageSize);
    }
  }
</script>

<style>
  .el-container {
    margin-bottom: 40px;
  }
</style>
