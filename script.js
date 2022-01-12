let introductionButton = document.querySelector("#introduction")
let introductionText = document.querySelector(".inroduction_text")
let sustainablegrowthText = document.querySelector(".sustainablegrowth")
let sustainablegrowthButton = document.querySelector("#sustainable_growth")
let reserveText = document.querySelector(".reserve")
let reserveButton = document.querySelector("#reserve")
let susgrowthText1 = document.querySelector(".susgrowth_text_1")
let susgrowthText2 = document.querySelector(".susgrowth_text_2")
let reserveText1 = document.querySelector(".reserve_text_1")
let reserveText2 = document.querySelector(".reserve_text_2")
let reserveText3 = document.querySelector(".reserve_text_3")
let reserveText4 = document.querySelector(".reserve_text_4")
let reserveText5 = document.querySelector(".reserve_text_5")
let reserveText6 = document.querySelector(".reserve_text_6")
let reserveText7 = document.querySelector(".reserve_text_7")
let switch1 = document.querySelector(".switch1")
let switch2 = document.querySelector(".switch2")
let reserveswitch1 = document.querySelector(".reserveswitch1")
let reserveswitch2 = document.querySelector(".reserveswitch2")
let reserveswitch3 = document.querySelector(".reserveswitch3")
let reserveswitch4 = document.querySelector(".reserveswitch4")
let reserveswitch5 = document.querySelector(".reserveswitch5")
let reserveswitch6 = document.querySelector(".reserveswitch6")
let reserveswitch7 = document.querySelector(".reserveswitch7")
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
let imagesZap1 = document.querySelector("#zap1")
let imagesZap2 = document.querySelector("#zap2")
let imagesZap3 = document.querySelector("#zap3")
let imagesZap4 = document.querySelector("#zap4")
let imagesZap5 = document.querySelector("#zap5")
let imagesZap6 = document.querySelector("#zap6")
let imagesZap7 = document.querySelector("#zap7")

let header1 = document.querySelector(".header_1")
let header2 = document.querySelector(".header_2")
let header = document.querySelector(".header_div")

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
reserveText.style.display = 'none'
reserveText2.style.display = 'none'
reserveText3.style.display = 'none'
reserveText4.style.display = 'none'
reserveText5.style.display = 'none'
reserveText6.style.display = 'none'
reserveText7.style.display = 'none'
imagesZap2.style.display = 'none'
imagesZap3.style.display = 'none'
imagesZap4.style.display = 'none'
imagesZap5.style.display = 'none'
imagesZap6.style.display = 'none'
imagesZap7.style.display = 'none'
switch2.style.opacity = "0.3"
reserveswitch2.style.opacity = "0.3"
reserveswitch3.style.opacity = "0.3"
reserveswitch4.style.opacity = "0.3"
reserveswitch5.style.opacity = "0.3"
reserveswitch6.style.opacity = "0.3"
reserveswitch7.style.opacity = "0.3"

introductionButton.addEventListener("click", function () {
    introductionText.style.display = 'block';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

sustainablegrowthButton.addEventListener("click", function () {
    sustainablegrowthText.style.display = 'block';
    introductionText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

switch1.addEventListener("click", function () {
    susgrowthText1.style.display = 'block';
    susgrowthText2.style.display = 'none';
    switch1.style.opacity = "1"
    switch2.style.opacity = "0.3"
})

switch2.addEventListener("click", function () {
    susgrowthText2.style.display = 'block';
    susgrowthText1.style.display = 'none';
    switch1.style.opacity = "0.3"
    switch2.style.opacity = "1"
})

reserveButton.addEventListener("click", function () {
    sustainablegrowthText.style.display = 'none';
    introductionText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'block';
})

reserveswitch1.addEventListener("click", function () {
    reserveText1.style.display = 'block';
    imagesZap1.style.display = 'block';
    imagesZap2.style.display = 'none'
    imagesZap3.style.display = 'none'
    imagesZap4.style.display = 'none'
    imagesZap5.style.display = 'none'
    imagesZap6.style.display = 'none'
    imagesZap7.style.display = 'none'
    reserveText2.style.display = 'none';
    reserveText3.style.display = 'none';
    reserveText4.style.display = 'none';
    reserveText5.style.display = 'none';
    reserveText6.style.display = 'none';
    reserveText7.style.display = 'none';
    reserveswitch1.style.opacity = "1"
    reserveswitch2.style.opacity = "0.3"
    reserveswitch3.style.opacity = "0.3"
    reserveswitch4.style.opacity = "0.3"
    reserveswitch5.style.opacity = "0.3"
    reserveswitch6.style.opacity = "0.3"
    reserveswitch7.style.opacity = "0.3"
})

reserveswitch2.addEventListener("click", function () {
    reserveText1.style.display = 'none';
    reserveText2.style.display = 'block';
    imagesZap1.style.display = 'none';
    imagesZap2.style.display = 'block'
    imagesZap3.style.display = 'none'
    imagesZap4.style.display = 'none'
    imagesZap5.style.display = 'none'
    imagesZap6.style.display = 'none'
    imagesZap7.style.display = 'none'
    reserveText3.style.display = 'none';
    reserveText4.style.display = 'none';
    reserveText5.style.display = 'none';
    reserveText6.style.display = 'none';
    reserveText7.style.display = 'none';
    reserveswitch1.style.opacity = "0.3"
    reserveswitch2.style.opacity = "1"
    reserveswitch3.style.opacity = "0.3"
    reserveswitch4.style.opacity = "0.3"
    reserveswitch5.style.opacity = "0.3"
    reserveswitch6.style.opacity = "0.3"
    reserveswitch7.style.opacity = "0.3"
})

reserveswitch3.addEventListener("click", function () {
    reserveText1.style.display = 'none';
    reserveText2.style.display = 'none';
    reserveText3.style.display = 'block';
    imagesZap1.style.display = 'none';
    imagesZap2.style.display = 'none'
    imagesZap3.style.display = 'block'
    imagesZap4.style.display = 'none'
    imagesZap5.style.display = 'none'
    imagesZap6.style.display = 'none'
    imagesZap7.style.display = 'none'
    reserveText4.style.display = 'none';
    reserveText5.style.display = 'none';
    reserveText6.style.display = 'none';
    reserveText7.style.display = 'none';
    reserveswitch1.style.opacity = "0.3"
    reserveswitch2.style.opacity = "0.3"
    reserveswitch3.style.opacity = "1"
    reserveswitch4.style.opacity = "0.3"
    reserveswitch5.style.opacity = "0.3"
    reserveswitch6.style.opacity = "0.3"
    reserveswitch7.style.opacity = "0.3"
})

reserveswitch4.addEventListener("click", function () {
    reserveText1.style.display = 'none';
    reserveText2.style.display = 'none';
    reserveText3.style.display = 'none';
    reserveText4.style.display = 'block';
    imagesZap1.style.display = 'none';
    imagesZap2.style.display = 'none'
    imagesZap3.style.display = 'none'
    imagesZap4.style.display = 'block'
    imagesZap5.style.display = 'none'
    imagesZap6.style.display = 'none'
    imagesZap7.style.display = 'none'
    reserveText5.style.display = 'none';
    reserveText6.style.display = 'none';
    reserveText7.style.display = 'none';
    reserveswitch1.style.opacity = "0.3"
    reserveswitch2.style.opacity = "0.3"
    reserveswitch3.style.opacity = "0.3"
    reserveswitch4.style.opacity = "1"
    reserveswitch5.style.opacity = "0.3"
    reserveswitch6.style.opacity = "0.3"
    reserveswitch7.style.opacity = "0.3"
})
reserveswitch5.addEventListener("click", function () {
    reserveText1.style.display = 'none';
    reserveText2.style.display = 'none';
    reserveText3.style.display = 'none';
    reserveText4.style.display = 'none';
    reserveText5.style.display = 'block';
    imagesZap1.style.display = 'none';
    imagesZap2.style.display = 'none'
    imagesZap3.style.display = 'none'
    imagesZap4.style.display = 'none'
    imagesZap5.style.display = 'block'
    imagesZap6.style.display = 'none'
    imagesZap7.style.display = 'none'
    reserveText6.style.display = 'none';
    reserveText7.style.display = 'none';
    reserveswitch1.style.opacity = "0.3"
    reserveswitch2.style.opacity = "0.3"
    reserveswitch3.style.opacity = "0.3"
    reserveswitch4.style.opacity = "0.3"
    reserveswitch5.style.opacity = "1"
    reserveswitch6.style.opacity = "0.3"
    reserveswitch7.style.opacity = "0.3"
})

reserveswitch6.addEventListener("click", function () {
    reserveText1.style.display = 'none';
    reserveText2.style.display = 'none';
    reserveText3.style.display = 'none';
    reserveText4.style.display = 'none';
    reserveText5.style.display = 'none';
    reserveText6.style.display = 'block';
    imagesZap1.style.display = 'none';
    imagesZap2.style.display = 'none'
    imagesZap3.style.display = 'none'
    imagesZap4.style.display = 'none'
    imagesZap5.style.display = 'none'
    imagesZap6.style.display = 'block'
    imagesZap7.style.display = 'none'
    reserveText7.style.display = 'none';
    reserveswitch1.style.opacity = "0.3"
    reserveswitch2.style.opacity = "0.3"
    reserveswitch3.style.opacity = "0.3"
    reserveswitch4.style.opacity = "0.3"
    reserveswitch5.style.opacity = "0.3"
    reserveswitch6.style.opacity = "1"
    reserveswitch7.style.opacity = "0.3"
})

reserveswitch7.addEventListener("click", function () {
    reserveText1.style.display = 'none';
    reserveText2.style.display = 'none';
    reserveText3.style.display = 'none';
    reserveText4.style.display = 'none';
    reserveText5.style.display = 'none';
    reserveText6.style.display = 'none';
    reserveText7.style.display = 'block';
    imagesZap1.style.display = 'none';
    imagesZap2.style.display = 'none'
    imagesZap3.style.display = 'none'
    imagesZap4.style.display = 'none'
    imagesZap5.style.display = 'none'
    imagesZap6.style.display = 'none'
    imagesZap7.style.display = 'block'
    reserveswitch1.style.opacity = "0.3"
    reserveswitch2.style.opacity = "0.3"
    reserveswitch3.style.opacity = "0.3"
    reserveswitch4.style.opacity = "0.3"
    reserveswitch5.style.opacity = "0.3"
    reserveswitch6.style.opacity = "0.3"
    reserveswitch7.style.opacity = "1"
})

envManagementButton.addEventListener("click", function () {
    envManagementText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    header.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

envSecurityButton.addEventListener("click", function () {
    envSecurityText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

reservoirsButton.addEventListener("click", function () {
    reservoirsText.style.display = 'block';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

fishingButton.addEventListener("click", function () {
    fishingText.style.display = 'block';
    forestryText.style.display = 'none';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

forestryButton.addEventListener("click", function () {
    fishingText.style.display = 'none';
    forestryText.style.display = 'block';
    reservoirsText.style.display = 'none';
    envSecurityText.style.display = 'none';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
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
    header.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
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
    header.style.display = 'none';
    water_managmentText.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
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
    header.style.display = 'none';
    wasteText.style.display = 'none';
    reserveText.style.display = 'none';
})

wasteButton.addEventListener("click", function () {
    wasteText.style.display = 'block';
    introductionText.style.display = 'none';
    sustainablegrowthText.style.display = 'none';
    envManagementText.style.display = 'none';
    header.style.display = 'none';
    envSecurityText.style.display = 'none';
    reservoirsText.style.display = 'none';
    fishingText.style.display = 'none';
    forestryText.style.display = 'none';
    airenv_conditionText.style.display = 'none';
    energyText.style.display = 'none';
    water_managmentText.style.display = 'none';
    reserveText.style.display = 'none';
})

document.querySelectorAll('.close').forEach(item => {
    item.addEventListener('click', event => {
        introductionText.style.display = 'none';
        sustainablegrowthText.style.display = 'none';
        envManagementText.style.display = 'none';
        header.style.display = 'block';
        envSecurityText.style.display = 'none';
        reservoirsText.style.display = 'none';
        fishingText.style.display = 'none';
        forestryText.style.display = 'none';
        airenv_conditionText.style.display = 'none';
        energyText.style.display = 'none';
        water_managmentText.style.display = 'none';
        wasteText.style.display = 'none';
        reserveText.style.display = 'none';
    })
})