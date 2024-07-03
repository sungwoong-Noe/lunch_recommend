import {createVuetify} from "vuetify";
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {aliases, mdi} from "vuetify/iconsets/mdi";
import {mdiAccount} from "@mdi/js";

const vuetify = createVuetify({
    components,
    directives,
    iconfont: 'mdi'
})


export default vuetify;