let copyText = document.getElementById('user-referral');
let copyReferral = document.getElementById('user-ref-copy');

copyReferral.addEventListener('click', function() {
    
    copyText.select();
    copyText.setSelectionRange(0, 149);
    copyText.classList.add('active');
    copyReferral.classList.add('active');

    navigator.clipboard.writeText(copyText.value).then(() => {
        // window.getSelection().removeAllRanges();
        setTimeout(function() {
            copyReferral.classList.remove('active');
            copyText.classList.remove('active');
        }, 1500);
    });

})

// Manual Share Popup Box Links and Message
const sharelink = 'https://endiavolve.com';
const sharemsg = encodeURIComponent('Message here');
const sharetitle = encodeURIComponent('Endiavolve');

const fb = document.getElementById('referral-facebook');
fb.setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${sharelink}&quote=${sharemsg}`);

const whatsapp = document.getElementById('referral-whatsapp');
whatsapp.setAttribute('href', `https://wa.me/?text=${sharemsg}%20${sharelink}`);

const twitter = document.getElementById('referral-twitter');
twitter.setAttribute('href', `https://twitter.com/intent/tweet?text=${sharemsg}&url=${sharelink}`);

const telegram = document.getElementById('referral-telegram');
telegram.setAttribute('href', `https://telegram.me/share/url?url=${sharelink}&text=${sharemsg}`);

const linkedIn = document.getElementById('referral-linkedin');
linkedIn.setAttribute('href', `https://www.linkedin.com/sharing/share-offsite/?url=${sharelink}`);


// Web Share API Functionality
var sharebtn = document.getElementById('invite-share-btn');

sharebtn.addEventListener('click', () => {
    if (navigator.share) {
        sharebtn.removeAttribute('data-bs-toggle');
        navigator.share ({
            title: 'Share this referral',
            url: 'https://referralLink.com'
        }).then(() => {
            console.log('Thanks for sharing!');
        })
        .catch(console.error);
    } else {
        console.log('Not working.')
        sharebtn.setAttribute('data-bs-toggle', 'modal');
    }
});