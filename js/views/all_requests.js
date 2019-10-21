const all_requests = {

    container: null,
    data: 
    [
        {method:"GET", name:"News data", url:"http://localhost:8080/news"},
        {method:"POST", name:"Login", url:"http://localhost:8080/login"},
        {method:"GET", name:"Sports news", url:"http://localhost:8080/news/sports"},
        {method:"GET", name:"Users", url:"http://localhost:8080/users/all"}
    ],

    html: {
        request_card: (method, name, url) => `
            <div class="request-card vertical">
                <div class="horizontal justify-between">
                    <span class="name">${name}</span>
                    <span class="method">${method}</span>
                </div>
                <div class="url">${url}</div>
            </div>
        `
    },

    init: function (container) {
        this.container = container;
        this.render();
    },

    render: function () {
        app.innerHTML = "";
        for (let json of this.data) {
            app.innerHTML += this.html.request_card(json.method, json.name, json.url)
        }

        $forEach(".request-card", function (el) {
            el.addEventListener("click", function () {
                main.setScreen(Nav.REQUEST)
            })
        })
    }
}