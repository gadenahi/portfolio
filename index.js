import { project_filters, projects, skills, certificate_filters, org_filters, certificates } from './data.js'

$(document).ready(function () {
    var DELAY_SPEED = 50;
    var FADE_SPEED = 100;
    var str = [];
    var myColTbl = ["#FF0000", "#0000FF", "#00FF00", "#FF00FF", "#00FFFF", "#FFFF00", "#000000", "#FFFFFF", "#00008B"]
    var myColCnt = 0;
    var flashColorState

    // loop for project filters
    $.each(project_filters, function (idx, obj) {
        $('<button class="project-filter btns-filter" data-filter=' + obj + '>' + obj + '</button>')
            .appendTo('.project-btns')
    });

    // loop for projects
    $.each(projects, function (idx, obj) {
        $('<div id=project' + obj.id + ' class="project fadeIn" >' +
            '<a href=""><img class=project-pic src="" alt=project-picture>' +
            '<div class="mask"><div class="caption"></div></div></a></div>')
            .find('a').attr('href', obj.url).end()
            .find('img').attr('src', obj.image).end()
            .find('.caption').html(obj.caption.replace(/\n/g, '<br>')).end()
            .appendTo('#projects')
        $('#project' + obj.id).attr('data-category', '[' + obj.category + ']')
    });

    // loop for skills
    $.each(skills, function (idx, obj) {
        $('<div class="skill fadeIn">' + obj + '</div>')
            .appendTo('#skills')
    });

    // loop for certificate filters
    $.each(certificate_filters, function (idx, obj) {
        $('<button class="certificate-filter btns-filter" data-filter=' + obj + '>' + obj + '</button>')
            .appendTo('.certificate-btns')
    });
    // loop for org filters
    $.each(org_filters, function (idx, obj) {
        $('<button class="certificate-filter btns-filter ' + obj + '" data-filter=' + obj + '>' + obj + '</button>')
            .appendTo('.org-btns')
    });

    // loop for certificates
    $.each(certificates, function (idx, obj) {
        $('<a id=certificate' + obj.id +
            ' class="certificate fadeIn ' + obj.org +
            '" href="' + obj.url + '">' + obj.caption + '</a>')
            .appendTo('#certificates')
        $('#certificate' + obj.id).attr('data-category', '[' + obj.category + ']')
    });

    // show the each words
    $('#welcome-section > span').each(function (i) {
        $(this).css('opacity', '1');
        str[i] = $(this).text();  // To get the text from span in welcome section
        $(this).text('');  // clear text in span of welcome section
        var no = i;  // span #
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

    // change the color of welcome section 
    function flashFunc() {
        var f = document.getElementById('welcome-last');
        var spans = f.getElementsByTagName("span");

        for (var i = 0; i < spans.length; i++) {
            spans[i].style.color = myColTbl[myColCnt];
        }
        myColCnt = (myColCnt < myColTbl.length - 1) ? myColCnt + 1 : 0;
    }

    // Flashtimer ON 
    var flashTimer = setInterval(function () {
        flashFunc()
    }, 1000);
    flashColorState = "ON"

    // Scroll to enable fadein, change color of welcome words and to show pagetop
    const targetPageTop = $('#pagetop')
    targetPageTop.hide()  // hide pagetop at default

    $(window).scroll(function () {
        const wHeight = $(window).height()  // height of window
        const scrollAmount = $(window).scrollTop()  // Location of the scroll 
        $('.fadeIn').each(function () {
            const targetFadein = $(this).offset().top;  // location of target fadein
            if (scrollAmount > targetFadein - wHeight + 60) {
                $(this).addClass('scrollin')
            } else {
                $(this).removeClass('scrollin')
            }
        })

        const targetWLast = $('#welcome-last').offset().top;  // location of target Welcome last phrase
        if (scrollAmount > targetWLast) {
            clearInterval(flashTimer)
            flashColorState = "OFF"
            targetPageTop.fadeIn()
        } else {
            targetPageTop.fadeOut()
            if (flashColorState === "OFF") {
                flashTimer = setInterval(function () {
                    flashFunc()
                }, 1000);
                flashColorState = "ON"
            }
        }
    })

    // scrollup animation 
    targetPageTop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
     });

    // hide the humbergur menu
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    })

    // Project filter function
    function filterBtn(targetFilter, btnTxt) {
        $.each(targetFilter, function (i, e) {
            var data_category = $(e).data('category')
            if (btnTxt == 'all') {
                $(e).addClass('animate').fadeIn()
            } else {
                $(e).fadeIn()  // to show element before fadeout
                if (data_category.indexOf(btnTxt) === -1) {
                    $(e).addClass('animate').fadeOut()
                    console.log("success")
                }
            }
        })
    }

    // Action when click btn of project filter
    var $proBtn = $('.project-filter')
    $proBtn.on('click', function (e) {
        var btnTxt = $(this).attr('data-filter');
        var target = $('.project')
        filterBtn(target, btnTxt)
    });

    // Action when click btn of certificate filter
    var $cerBtn = $('.certificate-filter')
    $cerBtn.on('click', function (e) {
        var btnTxt = $(this).attr('data-filter');
        var target = $('.certificate')
        filterBtn(target, btnTxt)
    });
});



