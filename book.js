const homeBtn = document.querySelector('.homeBtn');
const homepage= document.querySelector('#my-home-page');
// ---------------------------------
const charliePicture = document.querySelector('#charlie_pic');
const charlieProfile = document.querySelector('#charlie');
// -----------------------------------------

const vanPicture= document.querySelector('#Van_pic');
const vanProfile = document.querySelector('#van');
// --------------------------------------------

const curtisPicture= document.querySelector('#curtis_pic');
const curtisProfile = document.querySelector('#curtis');

let indexAmount = 0;

homeBtn.addEventListener('click', () => {
    charlieProfile.style.zIndex="0";
    homepage.style.zIndex="100";
    curtisProfile.style.zIndex="0";
    vanProfile.style.zIndex="0";
});

charliePicture.addEventListener('click', () => {
    charlieProfile.style.zIndex="100";
    homepage.style.zIndex="0";
    curtisProfile.style.zIndex="0";
    vanProfile.style.zIndex="0";
    
    
    
})


vanPicture.addEventListener('click', () => {
    
    vanProfile.style.zIndex="100";
    homepage.style.zIndex="0";
    curtisProfile.style.zIndex="0";
    charlieProfile.style.zIndex="0";
    
    
})


curtisPicture.addEventListener('click', () => {

    charlieProfile.style.zIndex="0";
    vanProfile.style.zIndex="0";
    homepage.style.zIndex="0";
    curtisProfile.style.zIndex="100";
    
})

