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
        total: 25
      },
      tableData: [
        {
          unitName: "河北华友古建筑",
          address: "深圳南山区",
          createUser: "admin",
          updateTime: "2020-07-14 01:52:38",
          statue: true,
          id: 1,
          children: []
        },
        {
          unitName: "轻喜到家",
          address: "深圳桃园区",
          createUser: "superadmin",
          updateTime: "2020-08-12 01:52:38",
          statue: true,
          id: 2,
          children: [
            {
              unitName: "成都轻喜",
              address: "成都",
              createUser: "admin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 3,
              children: [
                {
                  unitName: "成都子机构",
                  address: "成都",
                  createUser: "admin",
                  updateTime: "2020-05-14 01:52:38",
                  statue: true,
                  id: 4
                }
              ]
            },
            {
              unitName: "上海轻喜",
              address: "上海",
              createUser: "superadmin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 5
            }
          ]
        },
        {
          unitName: "河北华友古建筑",
          address: "深圳南山区",
          createUser: "admin",
          updateTime: "2020-07-14 01:52:38",
          statue: true,
          id: 6,
          children: []
        },
        {
          unitName: "轻喜到家",
          address: "深圳桃园区",
          createUser: "superadmin",
          updateTime: "2020-08-12 01:52:38",
          statue: true,
          id: 7,
          children: [
            {
              unitName: "成都轻喜",
              address: "成都",
              createUser: "admin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 8,
              children: [
                {
                  unitName: "成都子机构",
                  address: "成都",
                  createUser: "admin",
                  updateTime: "2020-05-14 01:52:38",
                  statue: true,
                  id: 9
                }
              ]
            },
            {
              unitName: "上海轻喜",
              address: "上海",
              createUser: "superadmin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 10
            }
          ]
        },
        {
          unitName: "河北华友古建筑",
          address: "深圳南山区",
          createUser: "admin",
          updateTime: "2020-07-14 01:52:38",
          statue: true,
          id: 11,
          children: []
        },
        {
          unitName: "轻喜到家",
          address: "深圳桃园区",
          createUser: "superadmin",
          updateTime: "2020-08-12 01:52:38",
          statue: true,
          id: 12,
          children: [
            {
              unitName: "成都轻喜",
              address: "成都",
              createUser: "admin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 13,
              children: [
                {
                  unitName: "成都子机构",
                  address: "成都",
                  createUser: "admin",
                  updateTime: "2020-05-14 01:52:38",
                  statue: true,
                  id: 14
                }
              ]
            },
            {
              unitName: "上海轻喜",
              address: "上海",
              createUser: "superadmin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 15
            }
          ]
        },
        {
          unitName: "河北华友古建筑",
          address: "深圳南山区",
          createUser: "admin",
          updateTime: "2020-07-14 01:52:38",
          statue: true,
          id: 16,
          children: []
        },
        {
          unitName: "轻喜到家",
          address: "深圳桃园区",
          createUser: "superadmin",
          updateTime: "2020-08-12 01:52:38",
          statue: true,
          id: 17,
          children: [
            {
              unitName: "成都轻喜",
              address: "成都",
              createUser: "admin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 18,
              children: [
                {
                  unitName: "成都子机构",
                  address: "成都",
                  createUser: "admin",
                  updateTime: "2020-05-14 01:52:38",
                  statue: true,
                  id: 19
                }
              ]
            },
            {
              unitName: "上海轻喜",
              address: "上海",
              createUser: "superadmin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 20
            }
          ]
        },
        {
          unitName: "河北华友古建筑",
          address: "深圳南山区",
          createUser: "admin",
          updateTime: "2020-07-14 01:52:38",
          statue: true,
          id: 21,
          children: []
        },
        {
          unitName: "轻喜到家",
          address: "深圳桃园区",
          createUser: "superadmin",
          updateTime: "2020-08-12 01:52:38",
          statue: true,
          id: 22,
          children: [
            {
              unitName: "成都轻喜",
              address: "成都",
              createUser: "admin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 23,
              children: [
                {
                  unitName: "成都子机构",
                  address: "成都",
                  createUser: "admin",
                  updateTime: "2020-05-14 01:52:38",
                  statue: true,
                  id: 24
                }
              ]
            },
            {
              unitName: "上海轻喜",
              address: "上海",
              createUser: "superadmin",
              updateTime: "2020-05-14 01:52:38",
              statue: true,
              id: 25
            }
          ]
        }
      ],
      tabColumn: [
        {
          type: "selection",
          width: "55"
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
          cate: "input",
          prop: "address"
        },
        {
          label: "登记人",
          width: "180",
          cate: "link",
          prop: "createUser",
          linkType: "success"
        },
        {
          label: "登记时间",
          width: "210",
          cate: "date",
          prop: "updateTime"
        },
        {
          label: "使用状态",
          width: "",
          cate: "switch",
          prop: "statue"
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

<style scoped lang="scss"></style>
