<template>
  <div>
    <el-container>
      <el-main>
        <el-button @click="dialogFormVisible = true" type="primary" plain style="float: left;margin: 10px 0px;">新增流程</el-button>
        <el-table
          :data="tableData"
          border
          :row-class-name="tableRowClassName"
        >
          <el-table-column
            prop="modelName"
            label="模型名称"
          >
          </el-table-column>
          <el-table-column
            prop="modelCode"
            label="模型编码"
          >
          </el-table-column>
          <el-table-column
            prop="modelTypeName"
            label="类型名称"
          >
          </el-table-column>
          <el-table-column
            prop="modelTypeCode"
            label="类型编码"
          >
          </el-table-column>
          <el-table-column
            prop="modelDesc"
            label="流程描述"
          >
          </el-table-column>
          <!--<el-table-column
                  prop="modelOrgName"
                  label="组织名称"
                  width="120"
          >
          </el-table-column>
          <el-table-column
                  prop="modelOrgCode"
                  label="组织编码"
                  width="120"
          >-->
          </el-table-column>
          <el-table-column
            prop="modelCorpName"
            label="企业名称"
          >
          </el-table-column>
          <el-table-column
            prop="modelCorpCode"
            label="企业编码"
          >
          </el-table-column>
          <el-table-column
            prop="modelVersion"
            label="版本"
          >
          </el-table-column>
          <el-table-column
            prop="modelStatesName"
            label="状态"
          >
          </el-table-column>
          <el-table-column
            label="创建时间"
            width="200px"
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.creationDate }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="360px"
          >
            <template slot-scope="scope">
              <el-button type="warning" @click="" size="mini">编辑</el-button>
              <el-button type="primary" @click="handleDesign(scope.row)" size="mini">设计</el-button>
              <el-button type="info" @click="handleDeployment(scope.row)" size="mini">发布</el-button>
              <el-button type="warning" @click="" size="mini"><span v-if="scope.row.modelStates == '1'">停用</span><span v-else>启用</span></el-button>
              <el-button type="danger" @click="handelDel(scope.row)" size="mini">删除</el-button>
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

    <el-dialog title="新增流程" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item label="流程名称" :label-width="formLabelWidth">
        <el-input v-model="form.modelName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="流程编码" :label-width="formLabelWidth">
        <el-input v-model="form.modelCode" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="流程描述" :label-width="formLabelWidth">
        <el-input v-model="form.modelDesc" autocomplete="off"></el-input>
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
      name: "Activiti",
      data: function() {
        return {
          visible: false ,
          tableData: [],
          isCollapse: false,
          pageSizes: [10, 20, 50, 100],
          pageSize: 10,
          pageNumber: 1,
          tatals: 0,
          dialogFormVisible: false,
          form: {
            modelName: '',
            modelCode: '',
            modelDesc: ''
          },
          formLabelWidth: '120px',
        }
      },
      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex%2 === 0) {
            return 'warning-row';
          } else if (rowIndex%2 === 1) {
            return 'success-row';
          }
          return '';
        },
        handleClick(row) {
          console.log(row);
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
        loadData(pageNumber, pageSize){
          //发送get请求
          axios.get(this.GLOBAL.ProviderUrl + '/models/getModelLists',{params:{"pageSize":pageSize,"pageNumber":pageNumber}})
            .then(res => {
              this.tatals = res.data.data.totalElements;
              this.tableData = res.data.data.content;
            })
            .catch(error=> {
              console.log(error);
            });
        },
        // 新增流程
        add(){
          this.dialogFormVisible = false;
          //发送post请求
          axios.post(this.GLOBAL.ProviderUrl + "/models/newModel",this.form,{emulateJSON:true})
            .then(res => {
              this.loadData(this.pageNumber,this.pageSize);
            })
            .catch(error => {
              console.log(error);
            });
        },
        //删除流程
        handelDel(row){
          layer.confirm('删除就抹得了啊！！！', {icon: 2, title:'警告'}, index => {
            var index2 = layer.load(0);
            //do something
            var id = row.id;
            //发送delete请求
            axios.delete(this.GLOBAL.ProviderUrl + "/models/del/" + id)
              .then(res => {
                layer.close(index2);
                this.GLOBAL.laymsg('删除好了啊');
                this.loadData(this.pageNumber,this.pageSize);
              })
              .catch(error => {
                layer.close(index2);
                console.log(error);
              });
            layer.close(index);
          });
        },
        //分页参数变化，重新加载数据
        handlePaginationChange(){
          this.loadData(this.pageNumber,this.pageSize);
        },
        //设计流程
        handleDesign(row){
          var modelId = row.activiModelId;
          var frameSrc = this.GLOBAL.ProviderUrl + "/index?modelId=" + modelId + "&t=" + new Date();
          var index = layer.open({
            type: 2,
            title: '流程定义设计',
            maxmin: false,
            shadeClose: true, //点击遮罩关闭层
            area : ['100%' , '100%'],
            content: frameSrc

          });
        },
        //发布
        handleDeployment(row){
          var modelId = row.activiModelId;
          var index2 = layer.load(0);
          axios.post(this.GLOBAL.ProviderUrl + '/models/deployment/'+modelId,{emulateJSON:true})
            .then(res => {
              layer.close(index2);
              if(res.data.success) {
                this.GLOBAL.laymsg('发布成功');
              }else{
                this.GLOBAL.laymsg(res.data.message);
              }
            })
            .catch(error => {
              layer.close(index2);
              console.log(error.response.data);
            });
        }
      },
      created: function () {
        this.loadData(this.pageNumber,this.pageSize);
      }
    }
</script>

<style>
  /**{
    border: null;
    margin: 0;
    padding: 0;
  }*/
  /*table css*/
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  /*container css*/
  .el-header, .el-footer ,.el-menu-demo{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header{
    padding-left: 200px;
  }

  .el-aside {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
    line-height: 200px;
    position: fixed;
    left: 0;
    bottom: 0;
    top: 60px;
  }

  .el-footer{
    position: fixed;
    left: 200px;
    bottom: 0;
    right: 0;
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: center;
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-container .is-vertical{
    margin-left: 200px;
  }

  /*aside css*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    /*width: 200px;*/
    min-height: 100%;
  }

  .block{
    text-align: left;
    margin: 15px 0px;
  }
</style>
