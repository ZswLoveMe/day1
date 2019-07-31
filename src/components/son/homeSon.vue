<template>
  <div class="myHome">
   <p @click="changeSon" :style="{fontSize:currentFontSize+'px'}" :size="sonFontSize">    {{msg}}</p>
    <ul>
      <li v-for="(item,index) in myMsg">
        {{item.zsw}}----------{{index}}
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "homeSon",
      data(){
        return{
          currentFontSize : this.sonFontSize,
          myMsg:[{zsw:"我爱你"},{zsw:"我爱你2"}]
        }
      }
      ,props:{
          msg:{
            type:String,
            default:"zsw"
          },
        sonFontSize:{
            type:Number
        }
      },methods:{
        changeSon(){
          this.myMsg[0].zsw="zsw"
          this.currentFontSize += 2;
          this.$emit('changeSon')
        }
      },watch:{
        sonFontSize(now,olad){
            this.currentFontSize =now;
        },
        myMsg:{
          deep:true,//深度监视
          handler:function (newV,oldV) {
            console.log(newV[0].zsw, oldV[0].zsw);
          }
        }
      }
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
