console.log("[Setting the url parameters]")
const urlParams = new URLSearchParams(window.location.search)

console.log("[Getting the token]")
const token = urlParams.get('access_token');
window.localStorage.setItem('vkAPIToken_accessToken', token)

console.log("[Getting the expiration date]")
const expirationDate = urlParams.get('expires_in')
window.localStorage.setItem('vkAPIToken_expiration', expirationDate)

console.log("[Getting the current date]")
const askedDate = new Date()
window.localStorage.setItem('vkAPIToken_tokenCreationDate', askedDate)

if(window.localStorage.getItem('vkAPIToken_accessToken') !== null){
    document.getElementById('status').innerHTML = "Redirecting to the sources check page..."
    console.log('Successfull!')
    console.log("Redirecting...")
    window.open('/devtools/sources-check', '_self')
}else{
    document.getElementById('status').innerHTML = "There was an error while getting the token"
    console.error("There was an error while getting the token!")
}