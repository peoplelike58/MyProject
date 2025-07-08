$(function(){
  let divWidth = $('.cycle').width()
  let imgCount =$('.cycleImgList li').length
  
  for(let i = 0; i < imgCount ;i++){
    $('#contentButton').append(`<li></li>`)
  }
    $('#contentButton li:first').addClass('clicked')

    $('.cycleImgList li').width(divWidth)
    $('.cycleImgList').width(divWidth * imgCount)

    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('.cycleImgList').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000)

    })

    function moveToNext(){
        if (index < imgCount - 1) {
            index++
        } else {
            index = 0
        }

        $('.cycleImgList').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked')

    }



})