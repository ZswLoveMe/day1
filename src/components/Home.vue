<template>
    <!-- 所有的内容要被根节点包含起来 -->
    <div id="home">
      <homeSon :msg="msg" :sonFontSize="sonFontSize" @changeSon="changeSon"></homeSon>
      <MyButton @click.native="deletes">删除</MyButton>
    </div>
</template>


<script>
  import homeSon from './son/homeSon'
  import MyButton from './son/mybutton'
    export default{
        data(){
            return {
               msg:'我是一个home组件',
              value1: null,
              sonFontSize:11
            }
        },
      methods:{
        changeSon(){
        console.log("出发了")
        },
        deletes(){
          console.log("zsw")
        }
      },
      components:{
        homeSon,
        MyButton
      }
    }

</script>

<style lang="scss" scoped>

</style>
