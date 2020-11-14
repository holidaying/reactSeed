(function (fn) {
    if (typeof exports != 'object' && typeof module !== 'undefined') {
        module.exports = fn();
    } else if (typeof define === 'function' && define.amd) {
        define(fn)
    } else {
        window.$loader = fn();
    }

})(() => {
    var syncLoadModuels = {}, loadedModules = {};
    /**
     * 递归获取对象内属性
     */
    function getSyncModule(path) {
        var namePaths = path.split("/"), cacheModule = null;
        for (var i = 0; i < namePaths.length; i++) {
            if (cacheModule = syncLoadModuels[namePaths.slice(0, i + 1).join("/")]) {
                var value = cacheModule;
                for (var j = i + 1; j < namePaths.length; j++) {
                    try {
                        value = value[namePaths[j]];
                    } catch (e) {
                        value = {};
                    }
                }
                return value;
            }
        }
        if (!cacheModule) return null
    }
    //加载模块
    function loadModule(moduleName, version) {
        return Promise.resolve().then(() => {
            if (loadedModules[moduleName]) {
                return loadedModules[moduleName];
            }
            console.log("远程加载：", moduleName);
            return (loadedModules[moduleName] = fetch(
                `${baseConfig.base}/${moduleName}/${version || "lastest"}/index.js`,
                {}
            ).then((res) => { return res.text() }).then((sourceCode) => {
                var m = {
                    exports: {},
                };
                try {
                    Function(`
                        return function(module, exports, require) {
                          ${sourceCode}
                        }
                  `)()(m, m.exports);
                } catch (e) {
                    console.error(`【${moduleName}】模块加载解析异常：${e.message}`);
                }
                return m.exports;
            }));
        });
    }

    /**
     * 全局配置
     */
    var baseConfig = {
        base: "/remote"
    }
    /**
     * 加载器
     */
    var loader = {
        /**
         * 设置环境变量
         * @param {*} options 
         */
        setConfig(options) {
            baseConfig = Object.assign(baseConfig, options)
        },
        /**
         * 注册模块
         * @param {*} path 
         * @param {*} module 
         */
        regist(path, module) {
            loadedModules[path] = Promise.resolve(module)
        },
        /**
         * 同步注册模块
         * @param {*} path 
         * @param {*} path 
         */
        registSync(path, module) {
            loadedModules[path] = Promise.resolve(module);
            syncLoadModuels[path] = module;
        },
        /**
         * 同步加载
         * @param {*} path 
         */
        sync(path) {
            if (syncLoadModuels[path]) return Promise.resolve(syncLoadModuels[path])
            loader.loader(path).then(res => {
                syncLoadModuels[path] = res.default || res;
            })
        },
        /**
         * 异步加载
         * @param {*} path 
         */
        loader(path) {
            if (!path) {
                throw Error("找不到响应路径")
            }
            var syncModule = getSyncModule(path);
            if (syncModule) return syncModule;
            var module = loadModule(path)
        }
    };
    return loader;
})