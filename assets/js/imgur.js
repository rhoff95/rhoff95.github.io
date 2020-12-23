const username = `RobbyHoff`;
const response_type = 'access_token';
const page = '0';

const access_token = `7e0a6e15ce80bd3ddb4f256544801038a87ea560`;
const refresh_token = `cadc379a386ae67f7f5409d0bf079338f78d7e3c`;

// Anonymous
// const clientId = '4801a0b98299a9e';
// const clientSecret = '38254d0abf7eafd87cc8bc671101bdcde1ac26e5';

// With callback
const clientId = '2fa5cf425dab68e';
const clientSecret = 'd2bded3c6258c7e2d883c7bce8f0ac4842c86a30';

// OAuth 2 No Callback
// const clientId = 'b126b132ca1f71f';
// const clientSecret = '43d87eb2b3fe9f56cde335721b1b9fde0ab1b416';

const clientIdAuthHeaders = {
    "Authorization": `Client-ID ${clientId}`
};
const bearerTokenAuthHeaders = {
    "Authorization": `Bearer ${access_token}`
};

const userSubmissions = `https://api.imgur.com/3/account/${username}/submissions/${page}`;
const userImages = `https://api.imgur.com/3/account/me/images`
const generateAccessToken = `https://api.imgur.com/oauth2/token`;


const authUrlClientId = `client_id=${clientId}`

function getImgurSubmissions(link) {

    // var form = new FormData();
// Generate Access Token
// form.append("refresh_token", `${refresh_token}`);
// form.append("client_id", `${clientId}`);
// form.append("client_secret", `${clientSecret}`);
// form.append("grant_type", `refresh_token`);

    // var settings = {
    //     "url": userSubmissions,
    //     "method": "GET",
    //     "timeout": 0,
    //     "headers": bearerTokenAuthHeaders,
    //     "processData": false,
    //     "mimeType": "multipart/form-data",
    //     "contentType": false,
    //     "data": form
    // };

    // $.ajax(settings).done(function (response) {

        // const data = JSON.parse(response).data;

        // data.forEach(post => {
        //     post.images.forEach(image => {

                // const link = 'assets/img/Reaper_familiar_skeleton.png';
                // const link = image.link;

                var item = document.createElement('a');
                item.className = 'item';
                item.href = link;

                var eyeOverlay = document.createElement('i');
                eyeOverlay.className = 'fa fa-eye';
                eyeOverlay.setAttribute(
                    'aria-hidden',
                    'true');

                var itemCover = document.createElement('div');
                itemCover.className = 'item-cover';
                itemCover.setAttribute(
                    'style',
                    `background-image: url(${link})`);

                item.appendChild(eyeOverlay);
                item.appendChild(itemCover);

                // var submissionContainer = document.createElement('div');
                // submissionContainer.className='item scroll-animated-from-right';
                //
                // var submissionImage = document.createElement('div');
                // submissionImage.className = 'background-image';
                // submissionImage.setAttribute("style", `background-image: url(${link});`);
                // submissionImage.textContent='text';
                //
                // submissionContainer.appendChild(submissionImage);

                console.log(link);

                document.getElementById('portfolioList').appendChild(item);
            // });
        // });
    // });
}

/*
access_token: "a3ee7ddc2d00102404410eef5eadba2bc299a30c"
account_id: 19534038
account_username: "RobbyHoff"
expires_in: 315360000
refresh_token: "d66012db9854e346ee9e59f9d2860bfb71a3496a"
scope: ""
token_type: "bearer"


 */