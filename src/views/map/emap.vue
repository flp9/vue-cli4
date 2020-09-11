<template>
  <emap-main></emap-main>
          <!--        地图不可操作-->
<!--        <emap-main :handelMarkFlag="false"></emap-main>-->
</template>

<script>
import EmapMain from "../../components/EMap/emapMain";
export default {
  components: { EmapMain },
  name: "emap"
};
</script>

<style scoped></style>
