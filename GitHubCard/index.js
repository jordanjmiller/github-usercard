/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/jordanjmiller')
//   .then(response => {console.log(response.data)})
//   .catch(error => {console.log('Error! : ' + error)})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['bigknell', 'belzy', 'tetondan', 'jordanjmiller', 'dswhitely1'];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
const cardsDiv = document.querySelector('.cards');

function newCard(data){
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('card');
  let image = document.createElement('img');
  image.src= data.avatar_url;
  mainDiv.appendChild(image);

  let infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');

  let h3Name = document.createElement('h3');
  h3Name.classList.add('name');
  h3Name.textContent = data.name;
  let userName = document.createElement('p');
  userName.classList.add('username');
  userName.textContent = data.login;

  let location = document.createElement('p');
  location.textContent = data.location;
  let profile = document.createElement('p');
  profile.textContent = 'Profile: ';
  let profileA = document.createElement('a');
  profileA.href = data.html_url;
  profileA.textContent = data.html_url;
  let followers = document.createElement('p');
  followers.textContent = `Followers: ${data.followers}`;
  let following = document.createElement('p');
  following.textContent = `Following: ${data.following}`;
  let bio = document.createElement('p');
  bio.textContent = data.bio;

  infoDiv.appendChild(h3Name);
  infoDiv.appendChild(userName);
  infoDiv.appendChild(location);
  profile.appendChild(profileA);
  infoDiv.appendChild(profile);
  infoDiv.appendChild(followers);
  infoDiv.appendChild(following);
  infoDiv.appendChild(bio);

  mainDiv.appendChild(infoDiv);

  cardsDiv.appendChild(mainDiv);
  console.log(mainDiv);
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
  dswhitely1
*/

let apiUrl = 'https://api.github.com/users/';

followersArray.forEach((string) => {
  axios.get(apiUrl+string)
  .then(response => {newCard(response.data)})
  .catch(error => {console.log('Error! : ' + error)});
})

