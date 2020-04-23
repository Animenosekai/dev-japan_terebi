console.log("[Getting the token]")
const hash = window.location.hash
const newHash = hash.substring(0, hash.indexOf('&'))
const token = newHash.substring(14)
window.localStorage.setItem('vkAPIToken_accessToken', token)

console.log("[Getting the expiration date]")
window.localStorage.setItem('vkAPIToken_expiration', 86400)

console.log("[Getting the current date]")
const askedDate = new Date()
window.localStorage.setItem('vkAPIToken_tokenCreationDate', askedDate)

if(window.localStorage.getItem('vkAPIToken_accessToken') !== null){
    console.log('Successfull!')
    console.log("Redirecting...")
    window.open('/devtools/sources-check', '_self')
}else{
    console.error("There was an error while getting the token!")
}