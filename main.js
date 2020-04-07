//https://jsonblob.com/8d462070-78d2-11ea-8599-21f0f9a3ea71
//https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71

window.onload = function(){
    document.getElementById('checkall_btn').onclick = checkAll
    document.getElementById('ntvchecking_btn').onclick = ntvChecking
    document.getElementById('tvtokyochecking_btn').onclick = tvtokyoChecking
    document.getElementById('tvasahichecking_btn').onclick = tvasahiChecking
    document.getElementById('fujitvchecking_btn').onclick = fujitvChecking
    document.getElementById('tokyomxchecking_btn').onclick = tokyomxChecking
    document.getElementById('tbschecking_btn').onclick = tbsChecking
    document.getElementById('nhkchecking_btn').onclick = nhkChecking
}

function checkAll(){
    document.getElementById('checkAllText').style.display = 'none';
    document.getElementById('checkAllLoader').style.display = 'block';
    console.log('Checking everything...')
    ntvChecking();
    tvtokyoChecking();
    tvasahiChecking();
    fujitvChecking();
    tokyomxChecking();
    tbsChecking();
    nhkChecking();
    document.getElementById('checkAllText').style.display = 'block';
    document.getElementById('checkAllLoader').style.display = 'none';
}


function ntvChecking(){
    document.getElementById('ntvchecking_btn').style.display = 'none';
    document.getElementById('ntvchecking_statuscontainer').style.display = 'flex'
    console.log('Checking NTV...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/ntv'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        ntvNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.ntv = ntvNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('ntvLoader').style.display = 'none';
                document.getElementById('ntvChecked').style.display = 'inline-block';
                console.log('NTV has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}

function tvtokyoChecking(){
    document.getElementById('tvtokyochecking_btn').style.display = 'none';
    document.getElementById('tvtokyochecking_statuscontainer').style.display = 'flex'
    console.log('Checking TV Tokyo...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tvtokyo'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        tvtokyoNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.tvtokyo = tvtokyoNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('tvtokyoLoader').style.display = 'none';
                document.getElementById('tvtokyoChecked').style.display = 'inline-block';
                console.log('TV Tokyo has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}

function tvasahiChecking(){
    document.getElementById('tvasahichecking_btn').style.display = 'none';
    document.getElementById('tvasahichecking_statuscontainer').style.display = 'flex'
    console.log('Checking TV Asahi...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tvasahi'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        tvasahiNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.tvasahi = tvasahiNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('tvasahiLoader').style.display = 'none';
                document.getElementById('tvasahiChecked').style.display = 'inline-block';
                console.log('TV Asahi has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}

function fujitvChecking(){
    document.getElementById('fujitvchecking_btn').style.display = 'none';
    document.getElementById('fujitvchecking_statuscontainer').style.display = 'flex'
    console.log('Checking Fuji TV...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/fujitv'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        fujitvNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.fujitv = fujitvNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('fujitvLoader').style.display = 'none';
                document.getElementById('fujitvChecked').style.display = 'inline-block';
                console.log('Fuji TV has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}

function tokyomxChecking(){
    document.getElementById('tokyomxchecking_btn').style.display = 'none';
    document.getElementById('tokyomxchecking_statuscontainer').style.display = 'flex'
    console.log('Checking Tokyo MX...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tokyomx'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        tokyomxNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.tokyomx = tokyomxNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('tokyomxLoader').style.display = 'none';
                document.getElementById('tokyomxChecked').style.display = 'inline-block';
                console.log('Tokyo MX has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}

function tbsChecking(){
    document.getElementById('tbschecking_btn').style.display = 'none';
    document.getElementById('tbschecking_statuscontainer').style.display = 'flex'
    console.log('Checking TBS...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tbs'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        tbsNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.tbs = tbsNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('tbsLoader').style.display = 'none';
                document.getElementById('tbsChecked').style.display = 'inline-block';
                console.log('TBS has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}

function nhkChecking(){
    document.getElementById('nhkchecking_btn').style.display = 'none';
    document.getElementById('nhkchecking_statuscontainer').style.display = 'flex'
    console.log('Checking NHK...')
    var linksStorageURL = 'https://jsonblob.com/api/jsonBlob/8d462070-78d2-11ea-8599-21f0f9a3ea71'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/nhk'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        nhkNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
        axios({
            method: 'get',
            url: linksStorageURL,
            responseType: 'json'
        })
        .then(function(response){
            var links = response.data
            links.nhk = nhkNewLink
            axios({
                method: 'put',
                url: linksStorageURL,
                data: links
            })
            .then(function(){
                document.getElementById('nhkLoader').style.display = 'none';
                document.getElementById('nhkChecked').style.display = 'inline-block';
                console.log('NHK has been checked!')
                document.getElementById('requestResponseContainer').innerHTML = '';
            })
        })
    })
}