<template>
  <div id="app">
    <hot-key-input
      :hotkey.sync="hotKeyObj.keys"
      :verify="handleHotkeyVerify"
      :max="2"
      type="lowser"
      :reset="true"
      :shake="true"
      :range="null"
      placeholder="请按需要绑定的按键，支持组合按键"></hot-key-input>

  <div style="margin: 20px;">
    <button @click="getCurrentHotkeys">获取当前</button>
  </div>      
  </div>
</template>

<script>
// https://stackoverflow.com/questions/40434142/javascript-event-preventdefault-is-useless-for-alttab-in-windows/40434403#40434403
// 'ctrl+a',
const disallowed_hotkeys = ['shift+a','ctrl+a','ctrl+w', 'ctrl+shift+w', 'ctrl+shift+n', 'ctrl+t', 'ctrl+n', 'ctrl+shift+t', 'ctrl+tab', 'ctrl+pagedown', 'ctrl+shift+tab', 'ctrl+pageup', 'alt+f4', 'cmd+q']
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
        // keys: undefined
        keys: ["Ctrl+A", "Alt+D"]
      },
    }
  },
  methods:{
    handleHotkeyVerify(hotkey) {
      console.log('验证：', hotkey, this.hotKeyObj)
      if(disallowed_hotkeys.includes(hotkey.text.toLowerCase())){
        return false
      }
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
