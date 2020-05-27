<template>
    <div>
        <nave-component></nave-component>
        <h2>Acesse sua conta</h2>
        <div v-if="sucess === false">
            <span>
                {{response.msg}}
            </span>
        </div>
        <form v-on:submit="login">
            <input type="text" name="email" placeholder='email' v-model="email"/><br>
            <input type="password" name="password" placeholder='password' v-model="password"/><br>    
            <input type="submit" value="Entrar" />    
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            password: '',
            email: '',
            sucess: undefined,
            response: {
                msg: '',
            }
        }
    },
    methods: {
        // Login
        login() {
            event.preventDefault();
            let url = 'http://localhost:3001/users/login';
            axios
                .post(url, {
                    "email": this.email,
                    "password": this.password,
                })
                .then(response => {
                    this.sucess = true;
                    localStorage.setItem("token", response.data.token);
                    this.$router.push({name: 'perfil', params: { username: response.data.data.username } });
                }, error => {
                    this.response.msg = error.response.data.message;
                    this.sucess = false;
                })
        }
        // ------- end login -------------
    },
};
</script>
