new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    created() {
        this.getListData()
    },
    methods: {
        getListData: function() {
            var root = 'https://api.myjson.com';
            var vm = this;

            $.ajax({
                url: root + '/bins/1cxmx7',
                method: 'GET'
            }).then(function(data) {
                vm.items = data;
            });

        },
        addItems() {
            this.initialConcerts = this.events.slice()
        },
        appendItems() {
            this.initialConcerts = this.initialConcerts.concat(this.events)
        },
        nextPage() {
            if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage() {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage(number) {
            this.itemsPerPage = number
        }
    },
    data() {
        return {
            itemsPerPageArray: [4, 8, 12, -1],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 4,
            sortBy: 'event',
            keys: [
                'Evento',
                'Año',
                'Ciudad',
                'País',
            ],
            items: [],
        }
    },
    computed: {
        numberOfPages() {
            return Math.ceil(this.items.length / this.itemsPerPage)
        },
        filteredKeys() {
            return this.keys.filter(key => key !== 'Evento')
        },
    },
    watch: {
        initialConcerts() {
            this.$nextTick(() => {
                this.items = response.data['items']
                this.pagination.totalItems = this.items.length
            })
        }
    }
})