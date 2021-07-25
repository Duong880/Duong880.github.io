window.onload = init 

function init() {
	firebase.auth ().onAuthStateChanged( function (user) {
		if (user && user.emailVerified){
			loadConversations(user.email)
		}
		else
		console.log("bbbb");
	})
}

let loadConversations = async (email)=>{
    let currentEmail = email

    let result = await firebase.firestore()
    .collection('chat')
    .where('user','array-contains',currentEmail)
    .get()

    let Conversations = getDataFromDocs(result.docs)
    console.log(Conversations);
    renderChat(Conversations[0], )
    renderListFriends(Conversations)
}

let signOut = ()=>{
	firebase.auth().signOut().then( function() {
		window.open('./signIn.html','_self')
	}, function(error) {
		alert('Sign Out Error', error)
	})
}

let getDataFromDoc = (doc)=>{
    let data = doc.data()
    data.id = doc.id
    return data

}

let getDataFromDocs = (docs)=>{
   let result =[]
   for(let doc of docs){
       let data = getDataFromDoc(doc)
       result.push(data)
    }
   return result
}

let renderChat = (data,email)=>{
    let dom = document.querySelector('chat-content-container')
    let chat_name = document.querySelector('chat_name')
    chat_name.innerHTML = data.friendName
    dom.innerHTML = ''

    for(let i = 0; i<data.messages.length; i++){
        let chat_class = "chat-content"
        if(data.messages[i].sentAt == email){
            chat_class = "chat-content-owner"
        }
        let html = `<div class="${chat_class}">
        <span>${data.messages[i].content}</span>  
      </div>`

      dom.innerHTML += html
    }
}

let renderListFriends = (data)=>{
    let dom = document.querySelector("#list_friends")
    dom.innerHTML = ''
    for(let i =0; i<data.length; i++){
        let html = `<div class="list-group-item list-group-item-action lh-tight">
        <div>
          <img src="https://img.icons8.com/material-outlined/48/000000/user-male-circle.png" />
          <span>${data[i].friendName}</span>
        </div>

        <div class="time">
          <span>${data[i].creatAt}</span>
        </div>
      </div>`
    }
}


let clockChat = ()=>{

    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let d = date.getDay()

    if(m < 10){
        m = "0" + m
    }
    if(h < 10){
        h = "0" + h
    }
    if(s < 10){
        s = "0" + s
    }
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d]

    document.querySelector("#duong_clock").innerHTML = `${h}:${m}:${s}     ${d}`

}
clockChat()

setInterval(()=>{
    clockChat()
},1000)