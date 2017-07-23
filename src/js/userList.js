import _ from 'lodash';
import defaultLogo from '../../images/logo.png';
import defaultAvatar from '../../images/avatar.jpg';


//function userList sorts and shows all users by adding them into DOM 
function userList(users){
    const container = document.getElementById('root');
    const sortedUsers = _.sortBy(users, 'age');
    var num = 0;
    this.showList = () => {
        sortedUsers.forEach((user) => {
        	const tr = document.createElement("tr");
        	container.appendChild(tr);

        	const td_num = document.createElement("td");
        	tr.appendChild(td_num);
        	td_num.innerHTML = num;
        	num++;

        	const td_avatar = document.createElement("td");
        	tr.appendChild(td_avatar);
        	const img = document.createElement('img');
            img.src = defaultAvatar;
            td_avatar.appendChild(img);

        	const td_name = document.createElement("td");
        	tr.appendChild(td_name);
        	td_name.innerHTML = user.name;

        	const td_age = document.createElement("td");
        	tr.appendChild(td_age);
        	td_age.innerHTML = user.age;
        });
    }
}

export default userList;