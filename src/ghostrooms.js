var map
function ridgeview() {
    $("#BBedroom2").hide()
    $("#LStorage").hide()
    $("#RStorage").hide()
    $("#Workshop").hide()
    $("#BHallway").hide()
    $("#SBathroom").hide()
    $("#GBedroom").hide()
    $("#BBedroom").hide()
    $("#Attic").hide()
    console.log("Ridgeview")
}
function getGhostrooms() {
    $('lroom').text("Living room")
    $('kitchen').text("Kitchen")
    $('garage').text("Garage")
    $('hallway').text("Hallway")
    $('mbedroom').text("Master bedroom")
    $('bbedroom').text("Boys bedroom")
    $('bathroom').text("Bathroom")
    $('bhallway').text("Basement hallway")

}
document.createElement("attic")
document.createElement("livingroom")
document.createElement("kitchen")
document.createElement("garage")
document.createElement("hallway")
document.createElement("mbedroom")
document.createElement("bbedroom")
document.createElement('bathroom')
document.createElement('bhallway')
document.createElement('rstorage')
document.createElement('lstorage')
document.createElement('foyer')
document.createElement('lroom')
document.createElement('dining')
document.createElement('workshop')
document.createElement('toilet')
document.createElement('uhallway')
document.createElement('bathroom')
document.createElement('utility')
document.createElement('sbathroom')
document.createElement('gbedroom')
document.createElement('gbrpurple')
document.createElement('tbbblue')
document.createElement('utoilet')
document.createElement('bbedroomaqua')
document.createElement('basement')
$(document).ready(function() {
    ridgeview()
    $("#Foyer").click(function() {
        correctRoom = "Foyer"
        console.log(correctRoom)
        $(this).css("color", "blue")
    })
})