<template>
  <div class="mainContain">
    <list-table
      :tableData="tableData"
      :tabColumn="tabColumn"
      class="tableContain scrollBox"
    ></list-table>
    <div class="pageBottom">
      <el-pagination
        @size-change="SizeChange"
        @current-change="CurrentChange"
        :current-page="page.current"
        :page-sizes="page.pageSizes"
        :page-size="page.paseSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="page.total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ListTable from "../../components/ListTable";

export default {
  components: { ListTable },
  name: "base-tab",
  data() {
    return {
      page: {
        current: 1,
        pageSizes: [10, 20, 30, 40],
        paseSize: 10,
        total: 2
      },
      tableData: [
        {
          unitName: "河北华友古建筑",
          address: "深圳南山区",
          createUser: "admin",
          updateTime: "2020-07-14 01:52:38",
          statue: true,
          id: 1
        },
        {
          unitName: "成都轻喜",
          address: "成都",
          createUser: "admin",
          updateTime: "2020-05-14 01:52:38",
          statue: true,
          id: 3
        },
        {
          unitName: "上海轻喜",
          address: "上海",
          createUser: "superadmin",
          updateTime: "2020-05-14 01:52:38",
          statue: true,
          id: 5
        },
        {
          unitName: "成都子机构",
          address: "成都",
          createUser: "admin",
          updateTime: "2020-05-14 01:52:38",
          statue: true,
          id: 4
        },
        {
          unitName: "轻喜到家",
          address: "深圳桃园区",
          createUser: "superadmin",
          updateTime: "2020-08-12 01:52:38",
          statue: true
        }
      ],
      tabColumn: [
        {
          type: "index",
          label: "序号",
          width: "50"
        },
        {
          label: "机构名称",
          width: "180",
          cate: "text",
          prop: "unitName"
        },
        {
          label: "地址",
          width: "",
          cate: "text",
          prop: "address"
        },
        {
          label: "登记人",
          width: "180",
          cate: "text",
          prop: "createUser"
        },
        {
          label: "登记时间",
          width: "210",
          cate: "text",
          prop: "updateTime"
        },
        {
          label: "操作",
          width: "",
          cate: "handle",
          prop: "handle",
          btnList: [
            {
              label: "编辑",
              action: "Edit",
              type: "primary",
              icon: "el-icon-edit",
              title: "编辑机构"
            },
            {
              label: "删除",
              action: "Delete",
              type: "danger",
              icon: "el-icon-delete",
              title: "添加机构"
            }
          ]
        }
      ]
    };
  },
  methods: {
    SizeChange(val) {
      this.page.paseSize = val;
      // this.getPageLogList();
    },
    CurrentChange(val) {
      this.page.current = val;
      // this.getPageLogList();
    }
  }
};
</script>

<style scoped lang="scss">
// .mainContain{
//     position: relative;
//     height: 100%;
//     background-color: white;
//     .tableContain{
//         height: calc(100% - 50px);
//         overflow-y: auto;
//     }
//     .pageBottom{
//         position: absolute;
//         bottom: 10px;
//     }
// }
//     .scrollBox::-webkit-scrollbar {
//       border-radius: 2px;
//       width: 4px;   /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
//       background: white;
//     }
//     .scrollBox::-webkit-scrollbar-thumb {
//       height: 20px;    /* 滚动条滑块长度 */
//       background-color: #ccc;
//     }
</style>
