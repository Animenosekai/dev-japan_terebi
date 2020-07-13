//author: Anime no Sekai © - 2020

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
    document.getElementById('atxchecking_btn').onclick = atxChecking
    document.getElementById('tokyomx_vk_checking_btn').onclick = tokyomx_vk_Checking
    document.getElementById('tbs_vk_checking_btn').onclick = tbs_vk_Checking
}

function checkAll(){
    // New CheckAll thanks to the new server
    document.getElementById('checkAllText').style.display = 'none';
    document.getElementById('checkAllLoader').style.display = 'block';
    ntvChecking()
    tvtokyoChecking()
    tvasahiChecking()
    fujitvChecking()
    tokyomxChecking()
    tbsChecking()
    nhkChecking()
    atxChecking()
    tokyomx_vk_Checking()
    tbs_vk_Checking()
}

/*
function checkAll(){
    document.getElementById('checkAllText').style.display = 'none';
    document.getElementById('checkAllLoader').style.display = 'block';

    document.getElementById('ntvchecking_btn').style.display = 'none';
    document.getElementById('ntvchecking_statuscontainer').style.display = 'flex'

    document.getElementById('tvtokyochecking_btn').style.display = 'none';
    document.getElementById('tvtokyochecking_statuscontainer').style.display = 'flex'

    document.getElementById('tvasahichecking_btn').style.display = 'none';
    document.getElementById('tvasahichecking_statuscontainer').style.display = 'flex'

    document.getElementById('fujitvchecking_btn').style.display = 'none';
    document.getElementById('fujitvchecking_statuscontainer').style.display = 'flex'

    document.getElementById('tokyomxchecking_btn').style.display = 'none';
    document.getElementById('tokyomxchecking_statuscontainer').style.display = 'flex'

    document.getElementById('tbschecking_btn').style.display = 'none';
    document.getElementById('tbschecking_statuscontainer').style.display = 'flex'

    document.getElementById('nhkchecking_btn').style.display = 'none';
    document.getElementById('nhkchecking_statuscontainer').style.display = 'flex'
    console.log('Checking everything...')
    console.log('Checking NTV...')
    var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
    axios({
        method: 'get',
        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/ntv'
    })
    .then(function(response){
        document.getElementById('requestResponseContainer').innerHTML = response.data
        ntvNewLink = document.getElementById('su-ivp').src
        ntvNewLink = ntvNewLink.substring(0, 38) + '?autoplay=1'
        links = {'ntv': ntvNewLink}
        axios({
            method: 'post',
            url: linksStorageURL,
            data: links
        })
        .then(function(){
            document.getElementById('ntvLoader').style.display = 'none';
            document.getElementById('ntvChecked').style.display = 'inline-block';
            console.log('NTV has been checked!')
            document.getElementById('requestResponseContainer').innerHTML = '';

            console.log('Checking TV Tokyo...')
            var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
            axios({
                method: 'get',
                url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tvtokyo'
            })
            .then(function(response){
                document.getElementById('requestResponseContainer').innerHTML = response.data
                tvtokyoNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
                tvtokyoNewLink = tvtokyoNewLink.substring(0, 38) + '?autoplay=1'
                links = {'tvtokyo': tvtokyoNewLink} 
                axios({
                    method: 'post',
                    url: linksStorageURL,
                    data: links
                })
                .then(function(){
                    document.getElementById('tvtokyoLoader').style.display = 'none';
                    document.getElementById('tvtokyoChecked').style.display = 'inline-block';
                    console.log('TV Tokyo has been checked!')
                    document.getElementById('requestResponseContainer').innerHTML = '';

                    console.log('Checking TV Asahi...')
                    var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                    axios({
                        method: 'get',
                        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tvasahi'
                    })
                    .then(function(response){
                        document.getElementById('requestResponseContainer').innerHTML = response.data
                        tvasahiNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
                        tvasahiNewLink = tvasahiNewLink.substring(0, 38) + '?autoplay=1'
                        links = {'tvasahi': tvasahiNewLink}
                        axios({
                            method: 'post',
                            url: linksStorageURL,
                            data: links
                        })
                        .then(function(){
                            document.getElementById('tvasahiLoader').style.display = 'none';
                            document.getElementById('tvasahiChecked').style.display = 'inline-block';
                            console.log('TV Asahi has been checked!')
                            document.getElementById('requestResponseContainer').innerHTML = '';

                            console.log('Checking Fuji TV...')
                            var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                            axios({
                                method: 'get',
                                url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/fujitv'
                            })
                            .then(function(response){
                                document.getElementById('requestResponseContainer').innerHTML = response.data
                                fujitvNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
                                fujitvNewLink = fujitvNewLink.substring(0, 38) + '?autoplay=1'
                                links = {'fujitv': fujitvNewLink} 
                                axios({
                                    method: 'post',
                                    url: linksStorageURL,
                                    data: links
                                })
                                .then(function(){
                                    document.getElementById('fujitvLoader').style.display = 'none';
                                    document.getElementById('fujitvChecked').style.display = 'inline-block';
                                    console.log('Fuji TV has been checked!')
                                    document.getElementById('requestResponseContainer').innerHTML = '';

                                    console.log('Checking Tokyo MX...')
                                    var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                                    axios({
                                        method: 'get',
                                        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tokyomx'
                                    })
                                    .then(function(response){
                                        document.getElementById('requestResponseContainer').innerHTML = response.data
                                        tokyomxNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
                                        tokyomxNewLink = tokyomxNewLink.substring(0, 38) + '?autoplay=1'
                                        links = {'tokyomx' : tokyomxNewLink, 'tokyomx_mov3': tokyomxNewLink}
                                        axios({
                                            method: 'post',
                                            url: linksStorageURL,
                                            data: links
                                        })
                                        .then(function(){
                                            document.getElementById('tokyomxLoader').style.display = 'none';
                                            document.getElementById('tokyomxChecked').style.display = 'inline-block';
                                            console.log('Tokyo MX has been checked!')
                                            document.getElementById('requestResponseContainer').innerHTML = '';

                                            console.log('Checking TBS...')
                                            var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                                            axios({
                                                method: 'get',
                                                url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tbs'
                                            })
                                            .then(function(response){
                                                document.getElementById('requestResponseContainer').innerHTML = response.data
                                                tbsNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
                                                tbsNewLink = tbsNewLink.substring(0, 38) + '?autoplay=1'
                                                links = {"tbs": tbsNewLink, 'tbs_mov3': tbsNewLink}
                                                axios({
                                                    method: 'post',
                                                    url: linksStorageURL,
                                                    data: links
                                                })
                                                .then(function(){
                                                    document.getElementById('tbsLoader').style.display = 'none';
                                                    document.getElementById('tbsChecked').style.display = 'inline-block';
                                                    console.log('TBS has been checked!')
                                                    document.getElementById('requestResponseContainer').innerHTML = '';

                                                    console.log('Checking NHK...')
                                                    var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                                                    axios({
                                                        method: 'get',
                                                        url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/nhk'
                                                    })
                                                    .then(function(response){
                                                        document.getElementById('requestResponseContainer').innerHTML = response.data
                                                        nhkNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
                                                        nhkNewLink = nhkNewLink.substring(0, 38) + '?autoplay=1'
                                                        links = {'nhk': nhkNewLink}
                                                        axios({
                                                            method: 'post',
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
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
    document.getElementById('checkAllText').style.display = 'block';
    document.getElementById('checkAllLoader').style.display = 'none';
}
*/

function ntvChecking(){
    try{
        document.getElementById('ntvchecking_btn').style.display = 'none';
        document.getElementById('ntvchecking_statuscontainer').style.display = 'flex'
        console.log('Checking NTV...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/ntv'
        })
        .then(function(response){
            var startIndex = response.data.indexOf('<iframe id="su-ivp" src="') + 25
            var endIndex = response.data.indexOf('" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowtransparency="true" allowfullscreen="true" seamless="" style="border:" none;="" overflow:="" hidden;="" width:="" 70%;="" height:="" 576;')
            source = response.data.substring(startIndex, endIndex) + '?autoplay=1'
            links = {'ntv': source} 
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('ntvchecking_btn').style.display = 'none';
        document.getElementById('ntvchecking_statuscontainer').style.display = 'flex'
        document.getElementById('ntvLoader').style.display = 'none';
        document.getElementById('ntvchecking_text').innerText = 'An error occured while checking NTV ❌'
        console.log('An error occured while trying to check NTV...')
    }
}

function tvtokyoChecking(){
    try{
        document.getElementById('tvtokyochecking_btn').style.display = 'none';
        document.getElementById('tvtokyochecking_statuscontainer').style.display = 'flex'
        console.log('Checking TV Tokyo...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tvtokyo'
        })
        .then(function(response){
            document.getElementById('requestResponseContainer').innerHTML = response.data
            tvtokyoNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
            tvtokyoNewLink = tvtokyoNewLink.substring(0, 38) + '?autoplay=1'
            links = {'tvtokyo': tvtokyoNewLink}
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('tvtokyochecking_btn').style.display = 'none';
        document.getElementById('tvtokyochecking_statuscontainer').style.display = 'flex'
        document.getElementById('tvtokyoLoader').style.display = 'none';
        document.getElementById('tvtokyochecking_text').innerText = 'An error occured while checking TV Tokyo ❌'
        console.log('An error occured while trying to check TV Tokyo...')
    }
}

function tvasahiChecking(){
    try{
        document.getElementById('tvasahichecking_btn').style.display = 'none';
        document.getElementById('tvasahichecking_statuscontainer').style.display = 'flex'
        console.log('Checking TV Asahi...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tvasahi'
        })
        .then(function(response){
            document.getElementById('requestResponseContainer').innerHTML = response.data
            tvasahiNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
            tvasahiNewLink = tvasahiNewLink.substring(0, 38) + '?autoplay=1'
            links = {'tvasahi': tvasahiNewLink}
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('tvasahichecking_btn').style.display = 'none';
        document.getElementById('tvasahichecking_statuscontainer').style.display = 'flex'
        document.getElementById('tvasahiLoader').style.display = 'none';
        document.getElementById('tvasahichecking_text').innerText = 'An error occured while checking TV Asahi ❌'
        console.log('An error occured while trying to check TV Asahi...')
    }
}

function fujitvChecking(){
    try{
        document.getElementById('fujitvchecking_btn').style.display = 'none';
        document.getElementById('fujitvchecking_statuscontainer').style.display = 'flex'
        console.log('Checking Fuji TV...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/fujitv'
        })
        .then(function(response){
            document.getElementById('requestResponseContainer').innerHTML = response.data
            fujitvNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
            fujitvNewLink = fujitvNewLink.substring(0, 38) + '?autoplay=1'
            links = {'fujitv': fujitvNewLink} 
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('fujitvchecking_btn').style.display = 'none';
        document.getElementById('fujitvchecking_statuscontainer').style.display = 'flex'
        document.getElementById('fujitvLoader').style.display = 'none';
        document.getElementById('fujitvchecking_text').innerText = 'An error occured while checking Fuji TV ❌'
        console.log('An error occured while trying to check Fuji TV...')
    }
}

function tokyomxChecking(){
    try{
        document.getElementById('tokyomxchecking_btn').style.display = 'none';
        document.getElementById('tokyomxchecking_statuscontainer').style.display = 'flex'
        console.log('Checking Tokyo MX...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tokyomx'
        })
        .then(function(response){
            document.getElementById('requestResponseContainer').innerHTML = response.data
            tokyomxNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
            tokyomxNewLink = tokyomxNewLink.substring(0, 38) + '?autoplay=1'
            links = {'tokyomx': tokyomxNewLink, "tokyomx_mov3": tokyomxNewLink}
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('tokyomxchecking_btn').style.display = 'none';
        document.getElementById('tokyomxchecking_statuscontainer').style.display = 'flex'
        document.getElementById('tokyomxLoader').style.display = 'none';
        document.getElementById('tokyomxchecking_text').innerText = 'An error occured while checking Tokyo MX, please try VK ❌'
        console.log('An error occured while trying to check Tokyo MX...')
    }
}

function tbsChecking(){
    try{
        document.getElementById('tbschecking_btn').style.display = 'none';
        document.getElementById('tbschecking_statuscontainer').style.display = 'flex'
        console.log('Checking TBS...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/tbs'
        })
        .then(function(response){
            document.getElementById('requestResponseContainer').innerHTML = response.data
            tbsNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
            tbsNewLink = tbsNewLink.substring(0, 38) + '?autoplay=1'
            links = {'tbs': tbsNewLink, 'tbs_mov3': tbsNewLink}
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('tbschecking_btn').style.display = 'none';
        document.getElementById('tbschecking_statuscontainer').style.display = 'flex'
        document.getElementById('tbsLoader').style.display = 'none';
        document.getElementById('tbschecking_text').innerText = 'An error occured while checking TBS with mov3, please try VK ❌'
        console.log('An error occured while trying to check TBS with mov3...')
    }
}

function nhkChecking(){
    try{
        document.getElementById('nhkchecking_btn').style.display = 'none';
        document.getElementById('nhkchecking_statuscontainer').style.display = 'flex'
        console.log('Checking NHK...')
        var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
        axios({
            method: 'get',
            url: 'https://cors-anywhere.herokuapp.com/https://mov3.co/nhk'
        })
        .then(function(response){
            document.getElementById('requestResponseContainer').innerHTML = response.data
            nhkNewLink = document.getElementById('su-ivp').src + '?autoplay=1'
            nhkNewLink = nhkNewLink.substring(0, 38) + '?autoplay=1'
            links = {'nhk': nhkNewLink}
            axios({
                method: 'post',
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
    }catch{
        document.getElementById('nhkchecking_btn').style.display = 'none';
        document.getElementById('nhkchecking_statuscontainer').style.display = 'flex'
        document.getElementById('nhkLoader').style.display = 'none';
        document.getElementById('nhkchecking_text').innerText = 'An error occured while checking NHK ❌'
        console.log('An error occured while trying to check NHK...')
    }
}



function getVkToken(){
    window.open("https://oauth.vk.com/authorize?client_id=7374576&display=page&redirect_uri=https://dev-japanterebi.netlify.app/redirect/vk/token&scope=video&response_type=token&v=5.103", '_self')
}

function atxChecking(){
    try{
        if(window.localStorage.getItem('vkAPIToken_accessToken') !== null){
            var time = (Math.abs(new Date() - new Date(window.localStorage.getItem("vkAPIToken_tokenCreationDate")))/1000) + 120
            if(time>window.localStorage.getItem('vkAPIToken_expiration')){
                getVkToken()
            }else{
                document.getElementById('atxchecking_btn').style.display = 'none';
                document.getElementById('atxchecking_statuscontainer').style.display = 'flex'
                console.log('Checking AT-X on VK...')
                var owner_id = '-177082369'
                var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                requestURL = 'https://api.vk.com/method/video.get?owner_id='+ owner_id + '&count=3&offset=0&access_token=' + window.localStorage.getItem('vkAPIToken_accessToken') + '&v=5.120'
                $.ajax ({
                    url: requestURL,
                    type: 'GET',
                    dataType: 'jsonp',
                    crossDomain: true,
                    success: function (data){
                        console.log(data)
                        var found = false
                        for(item in data.response.items){
                            try{
                                if (data.response.items[item].live == 1){
                                    if (data.response.items[item].title.includes('AT-X')){
                                        found = true
                                        var externalPlayer = data.response.items[item].player + '&autoplay=1'
                                        links = {'atx': externalPlayer}
                                        axios({
                                            method: 'post',
                                            url: linksStorageURL,
                                            data: links
                                        })
                                        .then(function(){
                                            document.getElementById('atxLoader').style.display = 'none';
                                            document.getElementById('atxChecked').style.display = 'inline-block';
                                            console.log('AT-X has been found on VK!')
                                        })
                                    }
                                }else{
                                    console.log('Not live, ignoring...')
                                }
                            }catch{
                                console.log('Not live, ignoring...')
                            }
                        }
                        if (found == false){
                            document.getElementById('atxLoader').style.display = 'none';
                            document.getElementById('atxchecking_text').innerText = 'No AT-X source on VK ❌'
                            console.log('No AT-X on VK...')
                        }
                }})
            }
        }else{
            getVkToken()
        }
    }catch{
        document.getElementById('atxchecking_btn').style.display = 'none';
        document.getElementById('atxchecking_statuscontainer').style.display = 'flex'
        document.getElementById('atxLoader').style.display = 'none';
        document.getElementById('atxchecking_text').innerText = 'An error occured while checking for AT-X on VK ❌'
        console.log('An error occured while trying to check for AT-X on VK...')
    }
}

function tbs_vk_Checking(){
    try{
        if(window.localStorage.getItem('vkAPIToken_accessToken') !== null){
            var time = (Math.abs(new Date() - new Date(window.localStorage.getItem("vkAPIToken_tokenCreationDate")))/1000) + 120
            if(time>window.localStorage.getItem('vkAPIToken_expiration')){
                getVkToken()
            }else{
                document.getElementById('tbs_vk_checking_btn').style.display = 'none';
                document.getElementById('tbs_vk_checking_statuscontainer').style.display = 'flex'
                console.log('Checking TBS on VK...')
                var owner_id = '-177082369'
                var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                requestURL = 'https://api.vk.com/method/video.get?owner_id='+ owner_id + '&count=3&offset=0&access_token=' + window.localStorage.getItem('vkAPIToken_accessToken') + '&v=5.120'
                $.ajax ({
                    url: requestURL,
                    type: 'GET',
                    dataType: 'jsonp',
                    crossDomain: true,
                    success: function (data){
                        console.log(data)
                        var found = false
                        for(item in data.response.items){
                            try{
                                if (data.response.items[item].live == 1){
                                    if (data.response.items[item].title.includes('TBS')){
                                        found = true
                                        var externalPlayer = data.response.items[item].player + '&autoplay=1'
                                        links = {'tbs': externalPlayer}
                                        axios({
                                            method: 'post',
                                            url: linksStorageURL,
                                            data: links
                                        })
                                        .then(function(){
                                            document.getElementById('tbs_vk_Loader').style.display = 'none';
                                            document.getElementById('tbs_vk_Checked').style.display = 'inline-block';
                                            console.log('TBS has been found on VK!')
                                        })
                                    }
                                }else{
                                    console.log('Not live, ignoring...')
                                }
                            }catch{
                                console.log('Not live, ignoring...')
                            }
                        }
                        if (found == false){
                            document.getElementById('tbs_vk_Loader').style.display = 'none';
                            document.getElementById('tbs_vk_checking_text').innerText = 'No TBS source on VK ❌'
                            console.log('No TBS on VK...')
                        }
                }})
            }
        }else{
            getVkToken()
        }
    }catch{
        document.getElementById('tbs_vk_checking_btn').style.display = 'none';
        document.getElementById('tbs_vk_checking_statuscontainer').style.display = 'flex'
        document.getElementById('tbs_vk_Loader').style.display = 'none';
        document.getElementById('tbs_vk_checking_text').innerText = 'An error occured while checking for TBS on VK ❌'
        console.log('An error occured while trying to check for TBS on VK...')
    }
}

function tokyomx_vk_Checking(){
    try{
        if(window.localStorage.getItem('vkAPIToken_accessToken') !== null){
            var time = (Math.abs(new Date() - new Date(window.localStorage.getItem("vkAPIToken_tokenCreationDate")))/1000) + 120
            if(time>window.localStorage.getItem('vkAPIToken_expiration')){
                getVkToken()
            }else{
                document.getElementById('tokyomx_vk_checking_btn').style.display = 'none';
                document.getElementById('tokyomx_vk_checking_statuscontainer').style.display = 'flex'
                console.log('Checking Tokyo MX on VK...')
                var owner_id = '-177082369'
                var linksStorageURL = 'https://animenosekai.herokuapp.com/japanterebi/api/channels'
                requestURL = 'https://api.vk.com/method/video.get?owner_id='+ owner_id + '&count=3&offset=0&access_token=' + window.localStorage.getItem('vkAPIToken_accessToken') + '&v=5.120'
                $.ajax ({
                    url: requestURL,
                    type: 'GET',
                    dataType: 'jsonp',
                    crossDomain: true,
                    success: function (data){
                        console.log(data)
                        var found = false
                        for(item in data.response.items){
                            try{
                                if (data.response.items[item].live == 1){
                                    if (data.response.items[item].title.includes('Tokyo MX')){
                                        found = true
                                        var externalPlayer = data.response.items[item].player + '&autoplay=1'
                                        var links = {'tokyomx': externalPlayer}
                                        axios({
                                            method: 'post',
                                            url: linksStorageURL,
                                            data: links
                                        })
                                        .then(function(){
                                            document.getElementById('tokyomx_vk_Loader').style.display = 'none';
                                            document.getElementById('tokyomx_vk_Checked').style.display = 'inline-block';
                                            console.log('Tokyo MX has been found on VK!')
                                        })
                                    }
                                }
                                else{
                                    console.log('Not live, ignoring...')
                                }
                            }catch{
                                console.log('Not live, ignoring...')
                            }
                        }
                        if (found == false){
                            document.getElementById('tokyomx_vk_Loader').style.display = 'none';
                            document.getElementById('tokyomx_vk_checking_text').innerText = 'No Tokyo MX source on VK ❌'
                            console.log('No Tokyo MX on VK...')
                        }
                }})
            }
        }else{
            getVkToken()
        }
    }
    catch{
        document.getElementById('tokyomx_vk_checking_btn').style.display = 'none';
        document.getElementById('tokyomx_vk_checking_statuscontainer').style.display = 'flex'
        document.getElementById('tokyomx_vk_Loader').style.display = 'none';
        document.getElementById('tokyomx_vk_checking_text').innerText = 'An error occured while checking for Tokyo MX on VK ❌'
        console.log('An error occured while trying to check for Tokyo MX on VK...')
    }
}
