import { project_filters, projects, skills } from './data.js'

// show each word in the welcome section

$(document).ready(function () {
    var DELAY_SPEED = 50;
    var FADE_SPEED = 100;
    var str = [];
    var myColTbl = ["#FF0000","#0000FF","#00FF00","#FF00FF","#00FFFF","#FFFF00","#000000","#FFFFFF"]
    var myColCnt = 0;

    // change the color of welcome section 
    function flashFunc() {
        var f = document.getElementById('welcome-last');
        var spans = f.getElementsByTagName("span");
        
        for (var i = 0; i < spans.length; i++) {
            console.log(i)
        spans[i].style.color = myColTbl[myColCnt];
        }
        myColCnt = ( myColCnt < myColTbl.length -1 ) ? myColCnt + 1 : 0;
    }
    setInterval(function() {
        flashFunc()
    }, 1000);

    $('#welcome-section > span').each(function (i) {
        $(this).css('opacity', '1');
        str[i] = $(this).text();
        $(this).text('');
        var no = i;
        var self = this;
        var interval = setInterval(function () {
            if (no == 0 || $('#welcome-section > span').eq(no - 1).children('span:last').css('opacity') == 1) {
                clearInterval(interval);
                for (var j = 0; j < str[no].length; j++) {
                    $(self).append('<span>' + str[no].substr(j, 1) + '</span>');
                    $(self).children('span:last').delay(DELAY_SPEED * j).animate({ opacity: '1' }, FADE_SPEED);
                }
                $(self).append('</br></br>');
            }
        }, 50);
        
    });

    // hide the humbergur menu
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    })

    //parameter of animation
    var ani = {
        delay: 200,
        distance: '200px',
        origin: 'bottom'
    };

    var scrollClass = '.fadeIn'
    $(function () {
        ScrollReveal({ reset: false, moblie: true }).reveal(scrollClass, ani);
    })
    
    // loop for project filters
    $.each(project_filters, function (idx, obj) {
        $('<button class="project-filter" data-filter='+obj+'>'+obj+'</button>')
            .appendTo('.project-btns')
    });

    // loopp for projects
    $.each(projects, function (idx, obj) {
        $('<div id=project'+ obj.id +' class="project fadeIn" >' +
            '<a href=""><img class=project-pic src="" alt=project-picture>' +
            '<div class="mask"><div class="caption"></div></div></a></div>')
            .find('a').attr('href', obj.url).end()
            .find('img').attr('src', obj.image).end()
            .find('.caption').html(obj.caption.replace(/\n/g, '<br>')).end()
            .appendTo('#projects')
        $('#project' + obj.id).attr('data-category', '['+obj.langs+']' )

    });

    // loop for skills
    $.each(skills, function (idx, obj) {
        $('<div class="skill fadeIn">'+obj+'</div>')
            .appendTo('#skills')
    });

    
    // filter function
    var $btn = $('.project-filter')
     
    $btn.on('click', function(e) {
      e.preventDefault();
       
      var btnTxt = $(this).attr('data-filter');
      var pro = $('.project')
        $.each(pro, function (i, e) {
            var data_category = $(e).data('category')
            if (btnTxt == 'all') {
                $(e).addClass('animate').fadeIn()
            } else {
                $(e).fadeIn()
                if (data_category.indexOf(btnTxt) === -1) {
                    $(e).addClass('animate').fadeOut()
                }
            }
        })
    });
});



