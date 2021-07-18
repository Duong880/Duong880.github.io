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
  weekday[6] = "Saturday