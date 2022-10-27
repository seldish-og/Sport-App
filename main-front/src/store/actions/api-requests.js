import axios from "axios";

export default {
    async REGISTRATION({commit}) {
        var bodyFormData = new FormData();
        bodyFormData.append('method', 'register');
        bodyFormData.append('nick', $store.state.registation.nick);
        bodyFormData.append('mail', $store.state.registation.mail);
        bodyFormData.append('password', $store.state.registation.password);
        try {
            const products = await axios({
                method: "post",
                url: "http://hack.gimly.su/api.php",
                data: bodyFormData,
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then(function(response) {
                commit('SET_HASH', response.hash);
                console.log(response.hash);
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
        bodyFormData.append('mail', $store.state.login.mail);
        bodyFormData.append('password', $store.state.login.password);
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
        bodyFormData.append('hash', $store.state.hash);
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
        bodyFormData.append('hash', $store.state.hash);
        bodyFormData.append('file', $store.state.change_avatar.file);
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
        bodyFormData.append('hash', $store.state.hash);
        bodyFormData.append('password', $store.state.change_password.password);
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
        bodyFormData.append('hash',$store.state.hash);
        bodyFormData.append('id',$store.state.change_avatar.id);
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
        bodyFormData.append('pattern', $store.state.search.pattern);
        bodyFormData.append('sport', $store.state.search.sport);
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
        bodyFormData.append('hash', $store.state.hash);
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
        bodyFormData.append('id', $store.state.command_info.id);
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
        bodyFormData.append('hash', $store.state.hash);
        bodyFormData.append('name', $store.state.create_commands.name);
        bodyFormData.append('sport', $store.state.create_commands.sport);
        bodyFormData.append('description', $store.state.create_commands.description);
        bodyFormData.append('contacts', $store.state.create_commands.contacts);
        bodyFormData.append('avatar_id', $store.state.create_commands.avatar_id);
        bodyFormData.append('background_id', $store.state.create_commands.background_id);
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
        bodyFormData.append('hash', $store.state.hash);
        bodyFormData.append('id', $store.state.command_for_delete.id);
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