export default {
    SET_HASH({commit}, hash) {
        commit('HASH', hash)
    },
    SET_LOGIN({commit}, login, password) {
        commit('LOGIN_state', login, password)
        commit('LOGIN', login, password)
    },
    SET_USER({commit}, user) {
        commit('USER', user)
    },
    SET_IMG_INFO({commit}, array_info) {
        commit('IMG_INFO', array_info)
    },
    SET_DROPDOWN_MENU({commit}, array_options) {
        commit('DROPDOWN_MENU', array_options)
    },
    SET_USER_COMMANDS({commit}, commands) {
        commit('USER_COMMANDS', commands)
    },
    SET_COMMAND_INFO({commit}, command_info) {
        commit('COMMAND_INFO', command_info)
    },
    SET_COMMAND_ID({commit}, id) {
        commit('COMMAND_ID', id)
    }
}