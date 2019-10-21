const Nav = { ALL_REQUESTS:0, REQUEST:1, LOGS:2 }

const nav_bar = {
    data: {
        selected: Nav.REQUEST
    },

    init: function () {
        console.log("initialized");

        const Tabs = $('.tab-btn', 'all')
        for (let i = 0; i < Tabs.length; i++) {
            Tabs[i].id = `nav-${i}`
            Tabs[i].setAttribute("nav-type", i);
            Tabs[i].addEventListener("click", nav_bar.onclick);
        }

        main.setScreen(nav_bar.data.selected);

        this.render();
    },

    onclick: function (ev) {
        nav_bar.data.selected = parseInt(ev.target.getAttribute("nav-type"));
        nav_bar.render();

        main.setScreen(nav_bar.data.selected);
    },

    render: function () {

        $forEach (".tab-btn", (el) => {
            el.classList.remove("selected")
        })

        console.log(`#nav-${this.data.selected}`)
        $(`#nav-${this.data.selected}`).classList.add("selected");
    }
}