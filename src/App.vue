<template>
  <div id="app" class="wrapper">
    <header class="main-header">
      <!-- Logo -->
      <router-link to="/index1" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini"><b>A</b>LT</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>Admin</b>LTE</span>
      </router-link>
      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
          <span class="sr-only">切换导航</span>
        </a>

        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- Messages: style can be found in dropdown.less-->
            <li class="dropdown messages-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-envelope-o"></i>
                <span class="label label-success">4</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有 4 条消息</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li><!-- start message -->
                      <a href="#">
                        <div class="pull-left">
                          <img src="../static/images/user2-160x160.jpg" class="img-circle" alt="用户图像">
                        </div>
                        <h4>
                          支持团队
                          <small><i class="fa fa-clock-o"></i> 5 分钟前</small>
                        </h4>
                        <p>为什么不购买一个高级模板主题？</p>
                      </a>
                    </li>
                    <!-- end message -->
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../static/images/user3-128x128.jpg" class="img-circle" alt="用户图像">
                        </div>
                        <h4>
                          AdminLTE 设计团队
                          <small><i class="fa fa-clock-o"></i> 2 小时前</small>
                        </h4>
                        <p>为什么不购买一个高级模板主题？</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../static/images/user4-128x128.jpg" class="img-circle" alt="用户图像">
                        </div>
                        <h4>
                          Developers
                          <small><i class="fa fa-clock-o"></i> 今天</small>
                        </h4>
                        <p>为什么不购买一个高级模板主题？</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div class="pull-left">
                          <img src="../static/images/user3-128x128.jpg" class="img-circle" alt="用户图像">
                        </div>
                        <h4>
                          销售部门
                          <small><i class="fa fa-clock-o"></i> 昨天</small>
                        </h4>
                        <p>为什么不购买一个高级模板主题？</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">

                        <div class="pull-left">
                          <img src="../static/images/user4-128x128.jpg" class="img-circle" alt="用户图像">
                        </div>
                        <h4>评估人员
                          <small><i class="fa fa-clock-o"></i> 2 天前</small>
                        </h4>
                        <p>为什么不购买一个高级模板主题？</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer"><a href="#">查看所有消息</a></li>
              </ul>
            </li>
            <!-- Notifications: style can be found in dropdown.less -->
            <li class="dropdown notifications-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-bell-o"></i>
                <span class="label label-warning">10</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有 10 条通知</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-aqua"></i> 今日 5 名新进会员加入
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-warning text-yellow"></i> 很长描述可能不适用于页面，可能会导致设计问题
                        ，可能会导致设计问题
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-users text-red"></i> 5 名新成员加入
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-shopping-cart text-green"></i> 25 条销售记录
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-user text-red"></i> 你修改了用户名
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="footer"><a href="#">查看所有</a></li>
              </ul>
            </li>
            <!-- Tasks: style can be found in dropdown.less -->
            <li class="dropdown tasks-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <i class="fa fa-flag-o"></i>
                <span class="label label-danger">9</span>
              </a>
              <ul class="dropdown-menu">
                <li class="header">你有 9 项任务</li>
                <li>
                  <!-- inner menu: contains the actual data -->
                  <ul class="menu">
                    <li><!-- Task item -->
                      <a href="#">
                        <h3>
                          设计一些按钮
                          <small class="pull-right">20%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar"
                               aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">20% 完成</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                    <li><!-- Task item -->
                      <a href="#">
                        <h3>
                          创建一个漂亮的主题
                          <small class="pull-right">40%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-green" style="width: 40%" role="progressbar"
                               aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">40% 完成</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                    <li><!-- Task item -->
                      <a href="#">
                        <h3>
                          我需要做的一些任务
                          <small class="pull-right">60%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-red" style="width: 60%" role="progressbar"
                               aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">60% 完成</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                    <li><!-- Task item -->
                      <a href="#">
                        <h3>
                          制作漂亮的过度效果
                          <small class="pull-right">80%</small>
                        </h3>
                        <div class="progress xs">
                          <div class="progress-bar progress-bar-yellow" style="width: 80%" role="progressbar"
                               aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                            <span class="sr-only">80% 完成</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <!-- end task item -->
                  </ul>
                </li>
                <li class="footer">
                  <a href="#">查看所有任务</a>
                </li>
              </ul>
            </li>
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="../static/images/user2-160x160.jpg" class="user-image" alt="用户图像">
                <span class="hidden-xs">Alexander Pierce</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="../static/images/user2-160x160.jpg" class="img-circle" alt="用户图像">

                  <p>
                    Alexander Pierce - Web 开发人员
                    <small>注册于2012年11月</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <li class="user-body">
                  <div class="row">
                    <div class="col-xs-4 text-center">
                      <a href="#">关注</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">销售</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">好友</a>
                    </div>
                  </div>
                  <!-- /.row -->
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">资料</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat" @click="logout()">退出</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <li>
              <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../static/images/user2-160x160.jpg" class="img-circle" alt="用户图像">
          </div>
          <div class="pull-left info">
            <p>Alexander Pierce</p>
            <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
          </div>
        </div>
        <!-- search form -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="搜索...">
            <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
          </div>
        </form>
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu" data-widget="tree">
          <li class="header">主导航</li>
          <li class="treeview" v-for="(menu,index) in menus" @click="addMainClass(index)" :class="{active:index==currentIndex}">
            <a href="#">
              <i :class="menu.icon"></i> <span>{{ menu.title }}</span>
              <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
            </a>
            <ul class="treeview-menu">
              <li v-for="(submenu,subIndex) in menu.submenu" @click="addSubClass(subIndex)" :class="{active: subIndex==subCurrentIndex&&index==currentIndex}">
                <router-link :to="submenu.url"><i class="fa fa-circle-o"></i>{{submenu.name}}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (页眉) -->
      <section class="content-header">
        <h1>仪表盘
          <small>控制面板</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
          <li class="active">仪表盘</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <router-view/>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <footer class="main-footer">
      <div class="pull-right hidden-xs">
        <b>Version</b> 2.4.0
      </div>
      <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights
      reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">近期活动</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's 生日</h4>

                  <p>23岁生日，在4月24日</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-user bg-yellow"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Frodo 更新了个人资料</h4>

                  <p>新电话 +1(800)555-1234</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Nora 加入邮件列表</h4>

                  <p>nora@example.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-file-code-o bg-green"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">254 计划任务执行</h4>

                  <p>执行时间5秒</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">任务进度</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  自定义模板设计
                  <span class="label label-danger pull-right">70%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  更新简历
                  <span class="label label-success pull-right">95%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Laravel积分
                  <span class="label label-warning pull-right">50%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  后端框架
                  <span class="label label-primary pull-right">68%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->
        <!-- 统计标签内容 -->
        <div class="tab-pane" id="control-sidebar-stats-tab">统计标签内容</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">常规设置</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                报告面板使用
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                有关此常规设置选项信息
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                允许邮件重定向
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                其他选项是可用的
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                在帖子中显示作者姓名
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                允许用户在博客帖子中显示自己的名字
              </p>
            </div>
            <!-- /.form-group -->

            <h3 class="control-sidebar-heading">聊天设置</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                显示我在线
                <input type="checkbox" class="pull-right" checked>
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                关闭通知
                <input type="checkbox" class="pull-right">
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                删除聊天记录
                <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
              </label>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- 添加侧边栏的背景。
         这个 div必须放在 control-sidebar 之后 -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
  import {setCookie,getCookie,delCookie} from './assets/js/cookie'
  export default {
    name: 'App',
    data() {
      return {
        currentIndex: -1,
        subCurrentIndex: -1,
        menus: [
          {
            title: "仪表盘",
            icon: "fa fa-dashboard",
            submenu: [
              {
                name: "仪表盘V1",
                url: "/index1"
              },
              {
                name: "仪表盘V2",
                url: "/index2"
              }
            ]
          },
          {
            title: "流程中心",
            icon: "fa fa-dashboard",
            submenu: [
              {
                name: "流程定义",
                url: "/activiti"
              },
              {
                name: "流程监控",
                url: "/monitor"
              }
            ]
          },
          {
            title: "业务中心",
            icon: "fa fa-dashboard",
            submenu: [
              {
                name: "请假申请",
                url: "/leave"
              }
            ]
          },
          {
            title: "任务管理",
            icon: "fa fa-dashboard",
            submenu: [
              {
                name: "待办任务",
                url: "/complete"
              },
              {
                name: "已办任务",
                url: "/todo"
              }
            ]
          },
          {
            title: "图书",
            icon: "fa fa-book",
            submenu: [
              {
                name: "图书首页",
                url: "/book/index"
              }
            ]
          },
          {
            title: "布局设置",
            icon: "fa fa-files-o",
            submenu: [
              {
                name: "顶部导航",
                url: "pages/layout/top-nav.html"
              },
              {
                name: "盒子",
                url: "pages/layout/boxed.html"
              },
              {
                name: "固定侧边栏",
                url: "pages/layout/fixed.html"
              },
              {
                name: "折叠侧边栏",
                url: "pages/layout/collapsed-sidebar.html"
              }
            ]
          },
          {
            title: "图表",
            icon: "fa fa-pie-chart",
            submenu: [
              {
                name: "ChartJS",
                url: "pages/charts/chartjs.html"
              },
              {
                name: "Morris",
                url: "pages/charts/morris.html"
              },
              {
                name: "Flot",
                url: "pages/charts/flot.html"
              },
              {
                name: "内嵌式图表",
                url: "pages/charts/inline.html"
              }
            ]
          },
          {
            title: "UI元素",
            icon: "fa fa-laptop",
            submenu: [
              {
                name: "常规",
                url: "pages/UI/general.html"
              },
              {
                name: "图标",
                url: "pages/UI/icons.html"
              },
              {
                name: "按钮",
                url: "pages/UI/buttons.html"
              },
              {
                name: "滑块",
                url: "pages/UI/sliders.html"
              },
              {
                name: "时间线",
                url: "pages/UI/timeline.html"
              },
              {
                name: "弹框",
                url: "pages/UI/modals.html"
              }
            ]
          },
          {
            title: "表单",
            icon: "fa fa-edit",
            submenu: [
              {
                name: "常规元素",
                url: "pages/forms/general.html"
              },
              {
                name: "高级元素",
                url: "pages/forms/advanced.html"
              },
              {
                name: "编辑器",
                url: "pages/forms/editors.html"
              }
            ]
          },
          {
            title: "表格",
            icon: "fa fa-table",
            submenu: [
              {
                name: "表格",
                url: "pages/tables/simple.html"
              },
              {
                name: "数据表格",
                url: "pages/tables/data.html"
              }
            ]
          },
          {
            title: "示例",
            icon: "fa fa-folder",
            submenu: [
              {
                name: "单据",
                url: "pages/examples/invoice.html"
              },
              {
                name: "资料",
                url: "pages/examples/profile.html"
              },
              {
                name: "登录",
                url: "pages/examples/login.html"
              },
              {
                name: "注册",
                url: "pages/examples/register.html"
              },
              {
                name: "锁屏",
                url: "pages/examples/lockscreen.html"
              },
              {
                name: "404 错误",
                url: "pages/examples/404.html"
              },
              {
                name: "500 错误",
                url: "pages/examples/500.html"
              },
              {
                name: "空白页",
                url: "pages/examples/blank.html"
              },
              {
                name: "页面加载进度",
                url: "pages/examples/pace.html"
              }
            ]
          },
        ]
      }
    },
    methods: {
      logout(){
        /*删除cookie*/
        delCookie('username');
        axios.post(this.GLOBAL.ProviderUrl + "/logout",this.ruleForm,{emulateJSON:true})
          .then(res => {
          if(res.data.success){
          this.$router.push('/login');
        }else{
          layer.msg(res.data.message, {
            icon: 1,
            time: 2000 //2秒关闭（如果不配置，默认是3秒）
          }, function () {
            //do something
          });
        }
      })
      .catch(error => {
        layer.msg(error.message, {
          icon: 1,
          time: 2000 //2秒关闭（如果不配置，默认是3秒）
        }, function () {
          //do something
        });
      });
      },
      addMainClass(index){
        console.log(index)
        this.currentIndex = index;
      },
      addSubClass(index){
        console.log(index)
        this.subCurrentIndex = index;
      },
    }
  }
</script>

<style>

  /*<!-- Bootstrap 3.3.7 -->*/
  @import '../static/resources/bootstrap/dist/css/bootstrap.min.css';
  /*<!-- Font Awesome -->*/
  @import '../static/resources/font-awesome/css/font-awesome.min.css';
  /*<!-- Ionicons -->*/
  @import '../static/resources/Ionicons/css/ionicons.min.css';
  /*<!-- Theme style -->*/
  @import '../static/css/AdminLTE.min.css';
  /*<!-- AdminLTE 皮肤。从 css/skins 目录下选择一个皮肤，以减少负载，而不是下载所有皮肤。 -->*/
  @import '../static/css/_all-skins.min.css';
  /*<!-- Morris chart -->*/
  @import '../static/css/morris.css';
  /*<!-- jvectormap -->*/
  @import '../static/css/jquery-jvectormap.css';
  /*<!-- Date Picker -->*/
  @import '../static/css/bootstrap-datepicker.min.css';
  /*<!-- Daterange picker -->*/
  @import '../static/css/daterangepicker.css';
  /*<!-- bootstrap wysihtml5 - text editor -->*/
  @import '../static/css/bootstrap3-wysihtml5.min.css';
  /*Google Font*/
  @import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
  }
  .main-footer{
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    margin-top: 20px;
  }
  .el-dialog .el-input,.el-dialog .el-select,.el-dialog .el-textarea{width:300px}
</style>
