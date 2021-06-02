let introductionButton = document.querySelector("#introduction")
let introductionText = document.querySelector(".inroduction_text")
let sustainablegrowthText = document.querySelector(".sustainablegrowth")
let sustainablegrowthButton = document.querySelector("#sustainable_growth")
let susgrowthText1 = document.querySelector(".susgrowth_text_1")
let susgrowthText2 = document.querySelector(".susgrowth_text_2")
let switch1 = document.querySelector(".switch1")
let switch2 = document.querySelector(".switch2")
let envManagementText = document.querySelector(".env_management_text")
let envManagementButton = document.querySelector("#env_management")


let header1 = document.querySelector(".header_1")
let header2 = document.querySelector(".header_2")

introductionText.style.display = 'none';
sustainablegrowthText.style.display = 'none';
susgrowthText2.style.display = 'none';
envManagementText.style.display = 'none'

introductionButton.addEventListener("click", function(){
    introductionText.style.display = 'block';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none'
    header1.style.display = 'none';
    header2.style.display = 'none';
})

sustainablegrowthButton.addEventListener("click", function(){
    sustainablegrowthText.style.display = 'block';
    introductionText.style.display = 'none';
    envManagementText.style.display = 'none'
    header1.style.display = 'none';
    header2.style.display = 'none';
})

switch1.addEventListener("click",function(){
    susgrowthText1.style.display = 'block';
    susgrowthText2.style.display = 'none';
})

switch2.addEventListener("click",function(){
    susgrowthText2.style.display = 'block';
    susgrowthText1.style.display = 'none';
})

envManagementButton.addEventListener("click", function(){
    envManagementText.style.display = 'block'
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
})