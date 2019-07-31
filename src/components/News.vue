<template>
    <div id="news">
       我是新闻组件
      <MyButton>添加</MyButton>
    </div>

</template>


<script>
  import MyButton from './son/mybutton'
    export default{
        data(){
            return {
               msg:'我是一个新闻组件'

            }
        },
      components:{
        MyButton
      }
    }

</script>





<style lang="scss" scoped>

    .list{

        li{
            height:3.4rem;

            line-height:3.4rem;

            boder-bottom:1px solid #eee;

            font-size:1.6rem;

            a{

                color:#666;


            }
        }
    }

</style>
