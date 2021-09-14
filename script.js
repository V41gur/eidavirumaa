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
let envSecurityText = document.querySelector(".env_security_text")
let envSecurityButton = document.querySelector("#env_security")
let reservoirsText = document.querySelector(".reservoirs_text")
let reservoirsButton = document.querySelector("#reservoirs")
let fishingText = document.querySelector(".fishing_text")
let fishingButton = document.querySelector("#fishing")
let forestryText = document.querySelector(".forestry_text")
let forestryButton = document.querySelector("#forestry")
let airenv_conditionText = document.querySelector(".airenv_condition_text")
let airenv_conditionButton = document.querySelector("#airenv_condition")
let energyText = document.querySelector(".energy_text")
let energyButton = document.querySelector("#energy")
let water_managmentText = document.querySelector(".water_managment_text")
let water_managmentButton = document.querySelector("#water_managment")
let wasteText = document.querySelector(".waste_text")
let wasteButton = document.querySelector("#waste")
let eco_lableText = document.querySelector(".eco_lable_text")
let eco_lableButton = document.querySelector("#eco_lable")


let header1 = document.querySelector(".header_1")
let header2 = document.querySelector(".header_2")

fishingText.style.display = 'none';
introductionText.style.display = 'none';
sustainablegrowthText.style.display = 'none';
susgrowthText2.style.display = 'none';
envManagementText.style.display = 'none';
envSecurityText.style.display = 'none';
reservoirsText.style.display = 'none';
forestryText.style.display = 'none';
airenv_conditionText.style.display = 'none';
energyText.style.display = 'none';
water_managmentText.style.display = 'none';
wasteText.style.display = 'none';
eco_lableText.style.display = 'none';

introductionButton.addEventListener("click", function () {
    introductionText.style.display = 'block';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

sustainablegrowthButton.addEventListener("click", function () {
    sustainablegrowthText.style.display = 'block';
    introductionText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

switch1.addEventListener("click", function () {
    susgrowthText1.style.display = 'block';
    susgrowthText2.style.display = 'none';
})

switch2.addEventListener("click", function () {
    susgrowthText2.style.display = 'block';
    susgrowthText1.style.display = 'none';
})

envManagementButton.addEventListener("click", function () {
    envManagementText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

envSecurityButton.addEventListener("click", function () {
    envSecurityText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

reservoirsButton.addEventListener("click", function () {
    reservoirsText.style.display = 'block';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

fishingButton.addEventListener("click", function () {
    fishingText.style.display = 'block';
    forestryText.style.display = 'none';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

forestryButton.addEventListener("click", function () {
    fishingText.style.display = 'none';
    forestryText.style.display = 'block';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

airenv_conditionButton.addEventListener("click", function () {
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'block';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

energyButton.addEventListener("click", function () {
    energyText.style.display = 'block';
    airenv_conditionText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

water_managmentButton.addEventListener("click", function () {
    water_managmentText.style.display = 'block';
    energyText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    wasteText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

wasteButton.addEventListener("click", function () {
    wasteText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    eco_lableText.style.display = 'none';
})

eco_lableButton.addEventListener("click", function () {
    eco_lableText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header1.style.display = 'none';
    header2.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
})