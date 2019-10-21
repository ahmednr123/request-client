const logs = {

    container: null,

    init: function (container) {
        this.container = container;
        this.render();
    },
    
    render: function () {
        this.container.innerHTML = "logs";
    }
}