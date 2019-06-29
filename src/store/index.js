import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);       //此為建立完成的Vuex用法 最後 在main js載入整個資料夾 然後 放在 new vue的應用程式下

export default new Vuex.Store({
    state: {
        isLoading: false,
    }
})