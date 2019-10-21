const log_slate = {

    el: null,
    data: "",

    init: function (el) {
        el.classList.add("vertical")
        el.classList.add("boxed")
        el.classList.add("code")

        el.style.color = "white"
        el.style.background = "slategray"

        this.el = el;
    }, 

    insert: function (str) {
        this.data += "<span style='margin-bottom:10px'>" + str + "</span>";
        this.el.innerHTML = this.data;
        this.el.scrollTo(0, this.el.scrollHeight)
    }
}