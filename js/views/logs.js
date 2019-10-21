const logs = {

    container: null,
    data: 
    [
        {method:"GET", url:"http://localhost:8080/news", logs:["[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd"]},
        {method:"POST", url:"http://localhost:8080/login", logs:["[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd"]},
        {method:"GET", url:"http://localhost:8080/news/sports", logs:["[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd"]},
        {method:"GET", url:"http://localhost:8080/users/all", logs:["[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd", "[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd"]}
    ],

    html: {
        log_card: (id, method, name) => `
            <div class="request-card vertical" log-id=${id}>
                <div class="horizontal justify-between">
                    <span class="name">${name}</span>
                    <span class="method">${method}</span>
                </div>
                <section class="output vertical">
                    <label>Output</label>
                    <section id="log-slate"></section>
                </section>
            </div>
        `
    },

    init: function (container) {
        this.container = container;
        this.render();
    },

    onclick: function (ev) {
        $forEach(".request-card", function (el) {
            el.querySelector(".output").style.display = "none";
        })

        const el = this;
        const id = el.getAttribute("log-id");
        el.querySelector(".output").style.display = "flex";
        
        const logs_container = Object.assign({}, log_slate)
        logs_container.init(el.querySelector("#log-slate"))

        for (let str of logs.data[id].logs) {
            logs_container.insert(str);
        }
    },
    
    render: function () {
        app.innerHTML = "";
        for (let i = 0; i < this.data.length; i++) {
            let json = this.data[i];
            app.innerHTML += this.html.log_card(i, json.method, json.url);
        }

        $forEach(".request-card", function (el) {
            el.addEventListener("click", logs.onclick);
        })
    }
}