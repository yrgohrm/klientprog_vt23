import UserService from '../services/UserService.js'
import UserItem from './UserItem.js'

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        UserService.getUsers().then(users => this.users = users)
    },
    components: {
        UserItem // this is a local component
    },
    template: `<div class="user-list">
                    <UserItem :user="user" v-for="user in users"></UserItem>
               </div>`
}