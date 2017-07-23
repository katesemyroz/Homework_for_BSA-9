import _ from 'lodash';
import defaultLogo from '../../images/logo.png';
import defaultAvatar from '../../images/avatar.jpg';


//function userList sorts and shows all users by adding them into DOM 
function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    this.showList = () => {
        sortedUsers.forEach((user) => {
            const div = document.createElement("div");
            const img = document.createElement('img');
            img.src = defaultAvatar;
            div.appendChild(img);
            div.append(user.name + ' ' + user.age);
            container.appendChild(div);
        });
    }
}

export default userList;