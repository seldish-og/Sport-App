import axios from "axios";

export default {
    async REGISTRATION({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'register');
        bodyFormData.append('nick', state.registation.nick);
        bodyFormData.append('mail', state.registation.mail);
        bodyFormData.append('password', state.registation.password);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_HASH', response.hash);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async LOGIN({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'login');
        bodyFormData.append('mail', state.login.mail);
        bodyFormData.append('password', state.login.password);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_HASH', response.hash);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async ACCOUNT({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'account');
        bodyFormData.append('hash', state.hash);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_USER', response.user);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async UPLOAD({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'upload');
        bodyFormData.append('hash', state.hash);
        bodyFormData.append('file', state.change_avatar.file);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_IMG_INFO', response);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async CHANGE_PASSWORD({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'change_password');
        bodyFormData.append('hash', state.hash);
        bodyFormData.append('password', state.change_password.password);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_HASH', response.hash);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async CHANGE_AVATAR({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'avatar');
        bodyFormData.append('hash', state.hash);
        bodyFormData.append('id', state.change_avatar.id);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async COMMANDS({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'commands');
        bodyFormData.append('pattern', state.search.pattern);
        bodyFormData.append('sport', state.search.sport);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('RETURN_COMMANDS', response)
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async GET_SPORTS({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'get_sports');
        try {
            const products = await axios({
                method: "get",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_DROPDOWN_MENU', response)
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async MY_COMMANDS({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'my_commands');
        bodyFormData.append('hash', state.hash);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_USER_COMMANDS', response)
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async GET_COMMANDS({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'get_commands');
        bodyFormData.append('id', state.command_info.id);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_COMMAND_INFO', response)
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },   
    async CREATE_COMMANDS({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'create_commands');
        bodyFormData.append('hash', state.hash);
        bodyFormData.append('name', state.create_commands.name);
        bodyFormData.append('sport', state.create_commands.sport);
        bodyFormData.append('description', state.create_commands.description);
        bodyFormData.append('contacts', state.create_commands.contacts);
        bodyFormData.append('avatar_id', state.create_commands.avatar_id);
        bodyFormData.append('background_id', state.create_commands.background_id);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_COMMAND_ID', response)
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    async DELETE_COMMANDS({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'delete_commands');
        bodyFormData.append('hash', state.hash);
        bodyFormData.append('id', state.command_for_delete.id);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}