vumodule.exports = {
  "configureWebpack": {
    "resolve": {
      "alias": {
        "assets": "/home/maxim/WebstormProjects/todo_list/src/assets",
        "@modules": "/home/maxim/WebstormProjects/todo_list/src/AppComponents",
        "@images": "/home/maxim/WebstormProjects/todo_list/src/assets/images",
        "@": "/home/maxim/WebstormProjects/todo_list/src/"
      }
    }
  },
  "css": {
    "loaderOptions": {
      "stylus": {
        "import": "~assets/styl/_global.styl"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
