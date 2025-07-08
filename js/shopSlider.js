$(function(){
  let divWidth = $('.shop').width()
  let imgCount =$('.shopImgList li').length
  
  for(let i = 0; i < imgCount ;i++){
    $('#contentButton').append(`<li></li>`)
  }
    $('#contentButton li:first').addClass('clicked')

    $('.shopImgList li').width(divWidth)
    $('.shopImgList').width(divWidth * imgCount)

    let index = 0
    let timer = setInterval(moveToNext, 5000)

    $('#contentButton li').click(function(){
        clearInterval(timer)
        index = $(this).index()

        $('.shopImgList').animate({
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

        $('.shopImgList').animate({
            left: divWidth * index * -1,
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $(`#contentButton li`).not(`:eq(${index})`).removeClass('clicked')

    }

})