<template>
    <div class="contain">
        <p>
            <!-- <el-button  @click="setLngLat">绘制地图范围</el-button> -->
            <el-button  @click="setMark" type="primary" plain>获取标记点</el-button>
        </p>
        <p v-if="lng && lat">获取位置信息为：经度：{{lng}},纬度：{{lat}}</p>
    
        <choose-area
        ref="baidu"
        @getMarkPosition="getMarkPosition"
        :unitArea="unitArea"
        ></choose-area>
    </div>
</template>

<script>
import ChooseArea from "@/components/ChooseArea/index";
export default {
  name: "BaiDuMap",
  components: { ChooseArea },  
  data(){
      return {
        rangeFlag:true,
        markFlag:false,
        lng:'',
        lat:'',
        unitArea:[
            { lng: 116.68298986843669, lat: 23.379192973160286 },
            { lng: 116.76261566881485, lat: 23.366454492098992 },
            { lng: 116.7393315900039, lat: 23.340442917395244 },
            { lng: 116.66430511383533, lat: 23.34867162618872 },
            { lng: 116.6832773261998, lat: 23.37945834501746 }
        ]
      }
  },
  methods:{
    setMark(){
         this.$refs.baidu.baiDuDialog = true;
    },
    getMarkPosition(markPos) {  
      this.lng=markPos.lng;
    this.lat=markPos.lat;
    },
  }
}
</script>

<style scoped lang="scss">
.contain{
    width: 100%;
    height: 100%;
}
</style>