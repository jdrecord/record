var app = new Vue({
  el: '#app',
  data: {
    params: {},
    data: []
  },
  methods: {
    demo() {
      $.ajax({
        url: 'http://localhost:3666/api/add',
        method: 'post',
        data: this.params,
        success: (res) => {
          if (res.code == 0) {
            this.getList()
          }
        }
      })
    },
    getList() {
      $.ajax({
        url: 'http://localhost:3666/api/getList',
        method: 'get',
        success: (res) => {
          console.log(res.data);
          this.data = res.data
        }
      })
    },
    del(id) {
      $.ajax({
        url: 'http://localhost:3666/api/del/' + id,
        method: 'delete',
        success: (res) => {
          if (res.code == 0) {
            this.getList()
          }
        }
      })
    }
  },
  created() {
    this.getList()
  },
})