import Avatar from './Avatar.js'
import { warnUser } from '../util/misc.js'

export default {
    props: {
        user: Object
    },
    components: {
        Avatar
    },
    methods: {
        click() {
            warnUser("ojoj")
        }
    },
    template: `<div :class="{'user-item': true, 'user-item-offline': !user.online}">
                    <Avatar :online="user.online" :name="user.name" @click="click"></Avatar>
                    <div>{{user.name}}</div>
                </div>`
}