//clicking these buttons and go to pokemons-page
$(".banner-button").on("click", function () {   
    $(".banner").css("display", "none")
    $(".pokemonsPage").css("display", "flex")
})

//mouseover on pokemons and some styles add
$(".poke-img").on("mouseover", function () {    
    $(this).css({                               //select only the element which is mouseovered, not select all the elements which has .poke-img class 
        "filter": "contrast(100%) blur(5px)",
        "animation": "pokeImg-anim 1s"
    })
    $(this).siblings(".poke-name").css("opacity", "1")  //select this' elements sibling which has class of "poke-name"
})
$(".poke-img").on("mouseout", function () {
    $(this).css({
        "filter": "blur(0px)",
        "animation": "none"
        
    })
    $(this).siblings(".poke-name").css("opacity", "0")
})

$(".poke-img").on("click", function () {
    $(".poke-audio").trigger("pause")
    $(this).siblings(".poke-audio").trigger("play")

    $(".poke-img").css({
        "filter": "blur(0px)",
        "animation": "none"
    })
    $(this).css({
        "filter": "blur(5px)",
        "animation": "anim 1s"
    })

    $(".poke-name").css("opacity", "0")
    $(this).siblings(".poke-name").css("opacity", "1")
})

// $(".poke-img").each(function () {            // This is the alternative code of previous block of code
//     $(this).on("click", function () {        // But in this code, current pokemon's audio does not stop when clicking others
//         $(this).css({                        // Therefore, multiple pokemons' audios can play at the same time
//             "filter": "blur(0px)",
//             "animation": "none"
//         })
//         $(this).siblings(".poke-audio").trigger("play")
//         $(this).siblings(".poke-name").css("opacity", "1")
//     })
// })

//instead of adding every pokemons'image manuelly, this loop does it automatically
var pokeImg = $(".poke-img").length;
for (var i = 1; i <= pokeImg; i++) {
    $(`.poke-img-${i}`).css({
        "background": `url(images/pokemon-${i}.png) no-repeat center center / contain`
    })
}
//click this button(X) and go to banner page
$(".x-btn").on("click", function () {
    $(".banner").css("display", "flex")
    $(".pokemonsPage").css("display", "none")
    $(".poke-audio").trigger("pause")
})

//audios stop when double clicking on pokemons
$(".poke-img").on("dblclick", function () {
    $(".poke-audio").trigger("pause")
})