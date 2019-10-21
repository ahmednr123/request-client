const request = {

    container: null,
    execute_loader: null,
    log_slate: null,

    html: {
        base: `
            <section class="vertical">
                <label>Execution status: </label>
                <div id="execute-loader" style="width: 100%"></div>
                <section class="horizontal justify-between" style="width:100%">

                    <section class="vertical" style="width:calc(50% - 10px)">
                        <label>Execution time (ms)</label>
                        <span style="color:gray">1200ms</span>
                    </section>

                    <section class="vertical" style="width:calc(50% - 10px)">
                        <label>Max request time (ms)</label>
                        <span style="color:gray">200ms</span>
                    </section>

                </section>
            </section>
            <section class="vertical">
                <label>Name</label>
                <input type="text" class="full-text" placeholder="Enter name">

                <section class="horizontal justify-between" style="width:100%">

                    <section class="vertical" style="width:100px">
                        <label>Method</label>
                        <!--<input type="text" placeholder="Enter number of requests">-->
                        <select>
                            <option>GET</option>
                            <option>POST</option>
                        </select>
                    </section>

                    <section class="vertical" style="width:calc(100% - 110px)">
                        <label>Request</label>
                        <input type="text" class="full-text" placeholder="Enter route (eg. http://localhost:8080/endpoint)">
                    </section>

                </section>

                <section class="horizontal justify-between" style="width:100%">

                    <section class="vertical" style="width:calc(50% - 10px)">
                        <label>Burst number</label>
                        <input type="text" placeholder="Enter number of requests">
                    </section>

                    <section class="vertical" style="width:calc(50% - 10px)">
                        <label>Burst time (ms)</label>
                        <input type="text" placeholder="Enter time between requests">
                    </section>

                </section>
            </section>
            <section class="horizontal-reverse">
                <input type="button" class="btn orange" value="Execute">
                <input type="button" class="btn steel" value="Save">
            </section>
            <section id="log-slate"></section>
        `
    },

    init: function (container) {
        this.container = container;
        this.render();

        if (this.execute_loader) {
            clearInterval(this.execute_loader.interval)
        }

        this.execute_loader = Object.assign({}, loader)
        this.execute_loader.init($("#execute-loader"))
        this.execute_loader.interval = setInterval(function () {
            request.execute_loader.add(1);
            if (request.execute_loader.complete) {
                console.log("execution complete!");
                clearInterval(request.execute_loader.interval);
            }
        }, 60)

        this.log_slate = Object.assign({}, log_slate)
        this.log_slate.init($("#log-slate"))
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
        this.log_slate.insert("[first] sdiha dja dsiah sida jsdkasd")
    
    },

    render: function () {
        this.container.innerHTML = this.html.base;
    }
}