const request = {

    container: null,
    execute_loader: null,
    log_slate: null,
    executing: false,

    html: {
        base: `
            <section class="vertical">
                <label>Name</label>
                <input type="text" class="full-text" placeholder="eg. Login Request">

                <section class="horizontal justify-between" style="width:100%">

                    <section class="vertical" style="width:100px">
                        <label>Method</label>
                        <select>
                            <option>GET</option>
                            <option>POST</option>
                        </select>
                    </section>

                    <section class="vertical" style="width:calc(100% - 110px)">
                        <label>Request</label>
                        <input type="text" class="full-text" placeholder="eg. http://localhost:8080/endpoint">
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
                <input type="button" class="btn orange" id="execute-btn" value="Execute">
                <input type="button" class="btn steel" id="save-btn" value="Save">
            </section>

            <section class="vertical">
                
            </section>
            
            <section>
                
            </section>
        `,

        execution_details: `
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
        `,

        execution_logs: `
            <label>Output</label>
            <section id="log-slate"></section>
        `,

        execution_end: `
            <input type="button" class="btn red" id="end-btn" value="End">
        `
    },

    init: function (container) {
        this.container = container;
        this.render();

        $("#execute-btn").addEventListener("click", this.onExecute);
    },

    onExecute: function () {
        if (request.executing) return;

        request.executing = true;

        const execution_info = document.createElement("section");
        execution_info.id = "exec-info";
        execution_info.classList.add("vertical");
        execution_info.innerHTML = request.html.execution_details;

        const execution_out = document.createElement("section");
        execution_out.id = "exec-out";
        execution_out.innerHTML = request.html.execution_logs;

        const execution_end = document.createElement("section");
        execution_end.id = "exec-end";
        execution_end.classList.add("horizontal-reverse");
        execution_end.innerHTML = request.html.execution_end;

        app.appendChild(execution_info);
        app.appendChild(execution_out);
        app.appendChild(execution_end);

        if (request.execute_loader) {
            clearInterval(request.execute_loader.interval)
        }

        request.execute_loader = Object.assign({}, loader)
        request.execute_loader.init($("#execute-loader"))

        request.log_slate = Object.assign({}, log_slate)
        request.log_slate.init($("#log-slate"))

        request.execute_loader.interval = setInterval(function () {
            request.execute_loader.add(1);
            request.log_slate.insert("[first] sdiha dja dsiah  aosdfalndfaskd fkas dfkajs dfka sdfakj sdflkajs dfo asdfkj asdfjk askdljf aksjd faksd sida jsdkasd")
            if (request.execute_loader.complete) {
                console.log("execution complete!");
                clearInterval(request.execute_loader.interval);
            }
        }, 60)

        $("#end-btn").addEventListener("click", request.onEndExecute)
    },

    onEndExecute: function () {
        if (request.execute_loader) {
            clearInterval(request.execute_loader.interval)
        }

        app.removeChild($("#exec-info"))
        app.removeChild($("#exec-out"))
        app.removeChild($("#exec-end"))

        request.executing = false;
    },

    render: function () {
        this.container.innerHTML = this.html.base;
    }
}