/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key, value, module_name) {
        //
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val);
        } else {
            let val = this.getStorage();
            val[key] = value;//user同级别
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
        }
    },
    // module_name--->user
    // mall: {"user":{"userName":"jack","age":24,"sex":1}}
    // key: userName, module_name: user
    getItem(key, module_name) {
        if (module_name) {
            // 获取user对象
            let val = this.getItem(module_name);
            if (val) {
                return val[key];
            }
        }
        return this.getStorage()[key];
    },
    getStorage() {
        // 获取信息
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    clear(key, module_name) {
        let val = this.getStorage();
        if (module_name) {
            if(!val[module_name])
                return;
            delete val[module_name][key];
        } else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
}