export default {
    INITALL_WEBSITE: (state) => {
        state.hash = document.cookie("app_cockie_name");
    },
    HASH: (state, hash) => {
        document.cookie = 'app_cockie_name=' + hash;
        state.hash = hash;
    },
    LOGIN_state: (state, mail, password) => {
        state.login.mail = mail;
        state.login.password = password;
    },
    USER: (state, user) => {
        state.user.id = user.id;
        state.user.mail = user.mail;
        state.user.reg_date = user.reg_date;
        state.user.action_date = user.action_date;
        state.user.nick = user.nick;
        state.user.short_nick = user.short_nick;
        state.user.type = user.type;
        state.user.status = user.status;
        state.user.action_status = user.action_status;
        state.user.cases = user.cases;
        state.user.avatar = user.avatar;
    },
    IMG_INFO: (state, img_info) => {
        state.change_avatar.id = img_info.id;
        state.files_info.id = img_info.id;
        state.files_info.owner = img_info.owner;
        state.files_info.link = img_info.link;
        state.files_info.type = img_info.type;
        state.files_info.date = img_info.date;
    },
    DROPDOWN_MENU: (state, menu_options) => {
        state.search.massage = menu_options.massage
        state.search.menu_options = menu_options.sports;
    },
    USER_COMMANDS: (state, commands) => {
        state.user.commands = commands.commands
    },
    COMMAND_INFO: (state, commands) => {
        state.command_info.id = commands.id
        state.command_info.name = commands.name
        state.command_info.sport = commands.sport
        state.command_info.description = commands.description
        state.command_info.contacts = commands.contacts
        state.command_info.avatar_id = commands.avatar_id
        state.command_info.background_id = commands.background_id
    },
    COMMAND_ID: (state, id) => {
        state.command_info.id = id
    }
}