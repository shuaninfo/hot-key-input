<template>
  <div id="app">
    <hot-key-input
      :hotkey.sync="hotKeyObj.keys"
      :verify="handleHotkeyVerify"
      :max="2"
      :reset="true"
      :shake="true"
      placeholder="请按需要绑定的按键，支持组合按键"></hot-key-input>

  <div style="margin: 20px;">
    <button @click="getCurrentHotkeys">获取当前</button>
  </div>      
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      list:[
      {
        tag: 'save',
        keys: ["Ctrl+A", "Alt+D"]
      }
      ],
      hotKeyObj: {
        tab: 'save',
        keys: ["Ctrl+A", "Alt+D"]
      },
    }
  },
  methods:{
    handleHotkeyVerify(hotkey) {
      console.log('验证：', hotkey, this.hotKeyObj)
      // for (const item of this.hotKeyList) {
      // }
      return true;
    },
    getCurrentHotkeys(){
      console.log('获取当前：', this.hotKeyObj)
    }
  }
}
</script>

<style>
  @keyframes hot-key-input-shake {
  0% {transform: scale(1);}
  10%, 20% {transform: scale(0.9) rotate(-3deg);}
  30%, 50%, 70%, 90% {transform: scale(1.1) rotate(3deg);}
  40%, 60%, 80% {transform: scale(1.1) rotate(-3deg);}
  100% {transform: scale(1) rotate(0);}
}
</style>
