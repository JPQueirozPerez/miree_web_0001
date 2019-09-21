const pagination = Vue.component('pagination-control', {
  template: '#pagination',
  data() {
    return {};
  },
  props: {
    currentPage: {
      default: 1,
      required: true,
    },
    maxPages: {
      type: Number,
      default: 1,
      required: true,
    },
  },
});

const userTable = Vue.component('user-table', {
  template: '#user-table',
  components: { 'pagination-control': pagination },
  data() {
    return {
      baseUrl: 'https://api.myjson.com/bins/1ee8d3',
      page: 1,
      perPage: 4,
      totalPages: 0,
      users: [],
      userCols: ['Event', 'Year', 'City', 'Country']
    };
  },
  computed: {
    resultIndexBeg() {
      // return this.users[0].id || 0;
      return this.users.length > 0 ? this.users[0].id : 0;
      // return 1;
    },
    resultIndexEnd() {
      // return this.users[4].id || 0;
      return this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
    },
  },
  methods: {
    getData() {
      try {
        let response = fetch(`${this.baseUrl}?page=${this.page}&per_page=${this.perPage}`)
                          .then((response) => response.json())
                          .then((json) => {
                            this.totalPages = json.total_pages;
                            this.totalData = json.total;
                            this.users = json.data;
                          });

      }
      catch(err) {
        
      }

    },
    changePage(page) {
      this.page = page;
    },
  },
  watch: {
    page: {
      immediate: true,
      handler(newVal, oldVal) {
        this.getData();
      },
    },
  },
});


new Vue({
  el: '#app',
});