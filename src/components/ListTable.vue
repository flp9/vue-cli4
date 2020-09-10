<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    row-key="id"
    :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
  >
    <template v-for="(item, index) in tabColumn">
      <el-table-column
        v-if="item.type"
        :type="item.type"
        :key="index"
        :width="item.width ? item.width : 'auto'"
        :label="item.label"
      ></el-table-column>

      <el-table-column
        v-else
        :key="index"
        :width="item.width ? item.width : 'auto'"
        :label="item.label"
      >
        <template v-if="item.cate" slot-scope="scope">
          <span v-if="item.cate === 'text'">{{ scope.row[item.prop] }}</span>
          <el-link v-if="item.cate === 'link'" :type="item.linkType">{{
            scope.row[item.prop]
          }}</el-link>
          <div v-if="item.cate === 'input'">
            <template>
              <el-input
                v-model="scope.row[item.prop]"
                size="mini"
                placeholder="请输入地址"
                :disabled="true"
                style="padding-right:10px"
              ></el-input>
            </template>
          </div>
          <div v-if="item.cate === 'date'">
            <template>
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
            </template>
          </div>
          <div v-if="item.cate === 'switch'">
            <el-switch
              v-model="scope.row[item.prop]"
              disabled
              active-color="#13ce66"
              inactive-color="#ff4949"
            ></el-switch>
          </div>
          <div v-if="item.cate === 'handle'">
            <el-button
              v-for="(btn, index) in item.btnList"
              :key="index"
              size="mini"
              circle
              :type="btn.type"
              :icon="btn.icon"
              @click="submit(scope.row, btn.action)"
            ></el-button>
          </div>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: "list-table",
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tabColumn: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      // tableData:[{
      //     "unitName": "河北华友古建筑",
      //     "address": "深圳南山区",
      //     "createUser": "admin",
      //     "updateTime": "2020-07-14 01:52:38",
      //     "statue":true,
      //     "id": 1,
      //     "children": [],
      // }, {
      //     "unitName": "轻喜到家",
      //     "address": "深圳桃园区",
      //     "createUser": "superadmin",
      //     "updateTime": "2020-08-12 01:52:38",
      //      "statue":true,
      //     "id": 2,
      //     "children": [{
      //         "unitName": "成都轻喜",
      //         "address": "成都",
      //         "createUser": "admin",
      //         "updateTime": "2020-05-14 01:52:38",
      //          "statue":true,
      //         "id": 3,
      //         "children": [{
      //             "unitName": "成都子机构",
      //             "address": "成都",
      //             "createUser": "admin",
      //             "updateTime": "2020-05-14 01:52:38",
      //              "statue":true,
      //             "id": 4,
      //         }],
      //     }, {
      //         "unitName": "上海轻喜",
      //         "address": "上海",
      //         "createUser": "superadmin",
      //         "updateTime": "2020-05-14 01:52:38",
      //          "statue":true,
      //         "id": 5,
      //     }],
      // }],
      // tabColumn: [{
      //     "type": "index",
      //     "label": "序号",
      //     "width": "50",
      // },{
      //     "type": "selection",
      //     "width": "55",
      // },{
      //     "label": "机构名称",
      //     "width": "180",
      //     "cate": "text",
      //     "prop": "unitName"
      // },{
      //         "label": "地址",
      //         "width": "",
      //         "cate": "input",
      //         "prop": "address"
      //     },
      //     {
      //         "label": "登记人",
      //         "width": "180",
      //         "cate": "link",
      //         "prop": "createUser",
      //         "linkType":"success",
      //     },
      //     {
      //         "label": "登记时间",
      //         "width": "210",
      //         "cate": "date",
      //         "prop": "updateTime"
      //     },{
      //     "label": "使用状态",
      //     "width": "",
      //     "cate": "switch",
      //     "prop": "statue"
      // },
      //     {
      //         "label": "操作",
      //         "width": "",
      //         "cate": "handle",
      //         "prop": "handle",
      //         "btnList": [{
      //             "label": "编辑",
      //             "action": "Edit",
      //             "type": "primary",
      //             "icon":"el-icon-edit",
      //             "title": "编辑机构"
      //         },
      //             {
      //                 "label": "删除",
      //                 "action": "Delete",
      //                 "type": "danger",
      //                 "icon":"el-icon-delete",
      //                 "title": "添加机构"
      //             }
      //         ]
      //     }
      // ],
    };
  },
  methods: {
    submit(form, action) {
      this.$emit(action, form);
    }
  }
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
