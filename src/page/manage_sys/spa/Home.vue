<template>
  <div id="yBodyBox" ref="yBodyBox">
    <LeftNav/>
    <div id="yBody" ref="yBody">
      <router-view/>
      <!-- <div class="y-body-footer">Copyright DAB</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexHome",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted: function() {
    // 内容部分
    // this.$refs.yBodyBody.style.height = Number(document.documentElement.clientHeight) - 176 + "px";
    this.$refs.yBodyBox.style.height =
      Number(document.documentElement.clientHeight) - 60 + "px";
  }
};
</script>

<style>
/* 自定义样式 */

#yBody {
  flex: auto;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  height: 100%;
  background-color: #fafafc;
}

#yBodyBox {
  flex: auto;
  position: relative;
  display: flex;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
}

.y-body-title {
  flex: none;
  padding-left: 30px;
  height: 58px;
  line-height: 58px;
  border-top: 1px solid #dcdceb;
  border-bottom: 1px solid #dcdceb;
}

.y-body-title div {
  line-height: 58px;
}

.y-body-body {
  flex: auto;
  padding: 20px 30px;
  overflow: auto;
}

.y-body-footer {
  flex: none;
  padding-left: 20px;
  height: 58px;
  line-height: 58px;
  background-color: #e6ebec;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

/*滚动条样式*/

#yLeftNav::-webkit-scrollbar,
.y-body-body::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 10px;
}
#yLeftNav::-webkit-scrollbar-thumb,
.y-body-body::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 0, 0, 0.2);
}
#yLeftNav::-webkit-scrollbar-track,
.y-body-body::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

/*滚动条样式*/
/* 自定义样式 */
</style>

