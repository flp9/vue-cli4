<template>
  <div class="mainContain" style="background:none">
    <p class="pHead">首页不知道该放点什么，就来点漂亮的玫瑰花凑凑数吧！！</p>
    <div class="content-block">
        <ul class="row-star">
            <li>分支：fanglp</li>
            <li class="rose" data-order="3" style="position: relative;top:10px;left: 15px;"></li>
            <li class="rose" data-order="2" style="position: relative;top:20px;left: 18px;"></li>
            <li></li>
            <li class="rose" data-order="16" style="position: relative;top:18px;left: -15px;"></li>
            <li class="rose" data-order="15" style="position: relative;top:10px;left: -15px;"></li>
            <li></li>
        </ul>
        <ul class="row-star">
            <li class="rose" data-order="4" style="position: relative;top:-10px;left: 22px;"></li>
            <li class="rose" data-order="17" style="position: relative;top:20px;left: 22px;"></li>
            <li></li>
            <li class="rose" data-order="1" style="position: relative;top:16px;"></li>
            <li></li>
            <li class="rose" data-order="21" style="position: relative;top:20px;left: -12px;"></li>
            <li class="rose" data-order="14" style="position: relative;top:-10px;left: -22px;"></li>
        </ul>
        <ul class="row-star">
            <li class="rose" data-order="5" style="position: relative;top:-15px;left: 2px;"></li>
            <li></li>
            <li class="rose" data-order="18" style="position: relative;top:21px;left:-6px;"></li>
            <li class="rose" data-order="19" style="position: relative;top:45px;"></li>
            <li class="rose" data-order="20" style="position: relative;top:20px;left:-4px;"></li>
            <li></li>
            <li class="rose" data-order="13" style="position: relative;top:-15px;left: -2px;"></li>
        </ul>
        <ul class="row-star">
            <li></li>
            <li class="rose" data-order="6" style="position: relative;top:-15px;left: -20px;"></li>
            <li></li>
            <li class="rose" data-order="10" style="position: relative;top:50px;left:29px;"></li>
            <li></li>
            <li class="rose" data-order="12" style="position: relative;top:-15px;left: 20px;"></li>
            <li></li>
        </ul>
        <ul class="row-star">
            <li></li>
            <li></li>
            <li class="rose" data-order="7" style="position: relative;top:-20px;left: -20px;"></li>
            <li class="rose" data-order="8" style="position: relative;top:10px;left:-29px;"></li>
            <li class="rose" data-order="11" style="position: relative;top:-20px;left: 20px;"></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="row-star">
            <li></li>
            <li></li>
            <li></li>
            <li class="rose" data-order="9"></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "home",
  data() {
    return{
        timer:null,
        num:21,
    }
  },
  mounted() {
    this.init();
  },
  destroyed(){
    clearInterval(this.timer);
  },
  methods:{
    init(){
        const that=this;
        const num=that.num;
        var index=1;
        if (num>0 && num<=21){
            this.timer=setInterval(function () {
                $("li[data-order='"+index+"']").addClass("active");
                $("li[data-order='"+index+"']").css("background-size","42px");
                index++;
                if(index>num){
                  index=1;
                  $("li").removeClass("active")
                    // clearInterval(this.timer);
                }
            },300);
        }
    }
  }
};
</script>

<style scoped lang="scss">
    .pHead{
      text-align: center;
      font-size: 24px;
    }
    .content-block{
        text-align: center;
        padding: 0;
        margin: 0;
        width:700px;
        margin: 20px auto;
        .row-star{
          list-style: none;
          clear:both;
          display: inline-block;
          padding: 0;
          margin-top: -5px;
          >li {
              float:left;
              width:80px;
              height:70px;
              box-sizing:border-box;
          }
          >li.rose{
              background: url("../../assets/img/rose_01.png") no-repeat center;
              background-size:40px;
          }
          >li.rose.active{
              background: url("../../assets/img/rose_02.png") no-repeat center;
              background-size:contain;
          }
        }
    }
</style>
