class User{
    constructor(name: string, isMale: string) {
        this.name = name;
        this.isMale = isMale;
    }

    name:string;
    isMale:string;
}

const user1 = new User("Salohiddin", "male");
const user2 = new User("Malika", "female");
const user3 = new User("Jasur", "male");
const user4 = new User("Oydin", "female");

const userList: User[] = [user1, user2, user3, user4];

function getUsers(){
    var gender = document.getElementById("myValue").value
    let txt = "";
    userList.forEach(element => {
        if(element.isMale == gender){
            txt += element.name + "<br>";
        }
    });
    document.getElementById("lists").innerHTML = txt;
}