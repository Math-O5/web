<template>
     <div>
        <div v-if="sucess === true">
            <p><strong>id: </strong> {{ id }}</p>
            <p>Olá <strong>{{ username }}</strong>. Isso é tudo.</p>
            <p><strong>email: </strong> {{ email }}</p>
            <p><strong>address: </strong> {{ address }}</p>
            <div>
                <h2>My Notes</h2>
                <form>
                    <input type="text" name="title" placeholder='title'v-model="key"/><br>
                    <input type="text" name="note" placeholder='note' v-model="value"/><br> 
                    <button class="safe" @click="addNote">Adicionar</button>
                    <button class="primary" @click="editNote">Editar</button>
                </form> 
                <div class="result-container">
                    <h2>Notes</h2>
                    <ul class="list-group">
                        <li v-for="note in notes" class="list-group-item">
                            <p>{{note[0]}} | {{note[1]}}</p>
                            <button class="dangerous" @click="removeNote(note[0])">Remover</button>
                    </li>
                </ul>
                    </div>
            </div>
            <button @click="deleteUser">Excluir conta</button>
        </div>
        <div v-if="sucess === false">
            <p v-if="sucess === false">
                <span>{{response.msg}}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.getInfo(this.$route.params.username, this.$route.params.token);
        this.getAllNotes();
    },
        
    data() {
        return {
            id: '',
            username: '',
            password: '',
            email: '',
            address: '',
            sucess: undefined,
            response: {
                msg: '',
            },
            key: '',
            value: '',
            notes: [],
        }
    },
    methods: {  
        getAllNotes() {
            axios.get('http://localhost:3001/store?token=' + localStorage.getItem("token"))
            .then(response => {
                this.sucess = true;
                return this.notes = response.data.data;
                // console.log(this.notes)
            })
            .catch(e => {
                this.response.msg = "Error notes";
                this.sucess = false;
                return [];
            });
        },
        /*
            Resgate info of user and save the token
        */ 
        getInfo(username, token) {
            let url = `http://localhost:3001/users/${username}`;
            console.log(token);

            axios
                .get(url + '?token=' + localStorage.getItem("token"))
                .then(response => {
                    this.sucess = true;
                    this.id = response.data.data._id;
                    this.username = response.data.data.username;
                    this.email = response.data.data.email;
                    this.address = response.data.data.address;
                }, error => {
                    this.response.msg = "Falha ao adicionar note";
                    this.sucess = false;
                });
        },
        
        addNote() {
            event.preventDefault();
            let response = axios.post('http://localhost:3001/store', {
                    "token": localStorage.getItem("token"),
                    "id": this.id,
                    "key": this.key,
                    "value": this.value
                }).then(_ => {
                    this.getAllNotes();
                });
            },
            editNote() {
                event.stopPropagation();
                event.preventDefault();
                axios.put('http://localhost:3001/store?token=' + localStorage.getItem("token"), {
                    "id": this.id,
                    "key": this.key,
                    "value": this.value
                }).then(_ => {
                    this.getAllNotes();
                });
                alert(response.message);
            },
            removeNote(key) {
            event.preventDefault();
            event.stopPropagation();
            axios.delete('http://localhost:3001/store', {
                params: {
                    "id": this.id,
                    "key": key,
                    "token": localStorage.getItem("token"),
                }
            }).then(_ => {
                this.getAllNotes();
            })
        },
        // deleta um usuarios
        deleteUser() {
            event.preventDefault();
            let url = `http://localhost:3001/users/delete/${this.id}`; // busca pelo id
            axios
                .delete(url, {
                    params: {
                        "token": localStorage.getItem("token"),
                    }
                }).then(response => {
                    this.sucess = false;
                    this.response.msg = response.data.message;
                    // tempo para o usuário let a mensagem que foi excluido
                    setTimeout(() => {
                        this.$router.push({name: 'singin'});
                    }, 2000);
                }, error => {
                    this.sucess = true;
                });
        }
    }
};
</script>

<style scoped>

</style>

   