const main = {
    data: {
        screen: Nav.ALL_REQUESTS
    },

    init: function () {
        nav_bar.init();
    },

    setScreen: function (nav_type) {
        nav_bar.setNav(nav_type);
        this.data.screen = nav_type;
        this.render();
    },

    render: function () {
        console.log("main renderer: " + this.data.screen);
        switch (this.data.screen) {
            
            case Nav.REQUEST:
                request.init(app);
                break;
            
            case Nav.ALL_REQUESTS:
                all_requests.init(app);
                break;
            
            case Nav.LOGS:
                logs.init(app);
                break;
        }
    }
}

main.init();