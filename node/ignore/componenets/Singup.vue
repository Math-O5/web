<template>
    <div>
        <nave-component></nave-component>
        <h2>Junte-se conosco!</h2>
        <div v-if="sucess === false">
            <span>
                {{response.msg}}
            </span>
        </div>
        <form v-on:submit="registerUser">
            <input type="text" name="username" placeholder='username'v-model="username"/><br>
            <input type="text" name="email" placeholder='email' v-model="email"/><br>
            <input type="text" name="address" placeholder='address'v-model="address"/><br>
            <input type="password" name="password" placeholder='password' v-model="password"/><br>
            <input type="password" name="confirm_password" placeholder='confirme password' v-model="confirm_password"/><br>       
            <input type="submit" value="Criar" />    
        </form> 
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
            confirm_password: '',
            address: '',
            email: '',
            permissions: [],
            sucess: undefined,
            response: {
                msg: '',
            }
        }
    },
    methods: {
        registerUser() {
            event.preventDefault();
            
            let url = 'http://localhost:3001/users/newUser/register';
            axios
                .post(url, {
                    "username": this.username,
                    "email": this.email,
                    "password": this.password,
                    "confirm_password": this.confirm_password,
                    "address": this.address,
                    "permissions" : ['r'],
                })
                .then(response => {
                    this.sucess = true;
                    this.$router.push({name: 'singin'});

                }, error => {
                    console.log(error.response.data);
                    this.response.msg = error.response.data.message;
                    this.sucess = false;
                })
        }
    }
};
</script>

<style scoped>

</style>