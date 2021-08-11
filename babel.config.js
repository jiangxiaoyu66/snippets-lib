module.exports = {
  "presets": [
    "@vue/cli-plugin-babel/preset"
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-plus",
        "styleLibraryName": "theme-chalk",
        // customStyleName: (name) => {
        //   name = name.slice(3)
        //   return `element-plus/packages/theme-chalk/src/${name}.scss`;
        // },
      }
    ]
  ]
}