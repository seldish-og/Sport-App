import Vuex from 'vuex'

import commonActions from "./actions/actions";
import apiRequest from "./actions/api-requests";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {...commonActions, ...apiRequest}

let store = new Vuex.Store({
    state: {
        registation: {
          nick: "",
          mail: "",
          password: ""
        },
        login: {
          mail: "",
          password: ""
        },
        user: {
          id: "",
          mail: "",
          reg_date: "",
          action_date: "",
          nick: "",
          short_nick: "",
          type: "",
          status: "",
          action_status: "",
          cases: "",
          avatar: "",
          commands: []
        },
        hash: "",
        change_password: {
          password: ""
        },
        change_avatar: {
          id: "",
          file: ""
        },
        files_info: {
          id: "", 
          owner: "",
          link: "",
          type: "",
          date: ""
        },
        search: {
          pattern: "",
          sport: "",
          massage: "",
          menu_options: []
        },
        command_info: {
          id: "",
          name: "",
          sport: "",
          description: "",
          contacts: "",
          avatar_id: "",
          background_id: ""
        },
        command_for_delete: {
          id: ""
        }
    },
    actions,
    getters,
    mutations
});

export default store;