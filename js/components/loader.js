const loader = {
    percentage: 0,
    el: null,
    complete: false,
    interval: null,

    init: function (el) {
        el.style.height = "10px";
        el.style.background = "lightgray"
        el.style.overflow = "hidden"
        el.style.borderRadius = "5px"

        el.innerHTML = '<div style="background:limegreen;height:10px;width:0px"></div>'

        this.el = el;
    },

    set: function (percentage) {
        this.percentage = percentage;
        if (this.percentage >= 100) {
            this.complete = true;
        }
        this.render();
    },

    add: function (percentage) {
        this.set(this.percentage + percentage);
    },

    render: function () {
        this.el.querySelector("div").style.width = this.percentage + "%"
    }
}