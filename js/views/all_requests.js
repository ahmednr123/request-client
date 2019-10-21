const all_requests = {

    container: null,

    init: function (container) {
        this.container = container;
        this.render();
    },

    render: function () {
        this.container.innerHTML = "all requests";
    }
}