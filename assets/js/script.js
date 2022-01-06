$(document).ready(function () {


    /* ------- Smooth scroll ------- */
    $(".pagescroll a:not(.default-link)").on("click", function (event) {
        event.preventDefault();
        let action = $(this.hash).offset().top;
        action -= 95;
        $("html,body").animate({
            scrollTop: action
        }, 150);
    });

    /* ----------- Counters ---------- */
    $(".counters").appear(function () {
        $(".count_nums").countTo();
    });

    /* ----------- Parallax ---------- */

    if ($(window).width() > 992) {

        $(".parallax").parallaxie({
            //speed value btw (-1 to 1)
            speed: 0.55,
            offset: 0,
        });
        $(".parallax.parallax-slow").parallaxie({
            speed: 0.31,
        });
    }


    // table search

    $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#search_table tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // video search

    $("#search_video").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#video_cards .video-card").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });


    // slider

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
    })


    var videos = [
        // 1
        {
            "image": "video1.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 2
        {
            "image": "video2.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 3
        {
            "image": "video3.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 4
        {
            "image": "video1.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 5
        {
            "image": "video2.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 6
        {
            "image": "video3.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 7
        {
            "image": "video1.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 8
        {
            "image": "video2.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 9
        {
            "image": "video3.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 10
        {
            "image": "video1.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 11
        {
            "image": "video2.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 12
        {
            "image": "video3.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 13
        {
            "image": "video1.jpg",
            "title": "Avocet",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 14
        {
            "image": "video2.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 15
        {
            "image": "video3.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 16
        {
            "image": "video1.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 17
        {
            "image": "video2.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 18
        {
            "image": "video3.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 19
        {
            "image": "video1.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 20
        {
            "image": "video2.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 21
        {
            "image": "video3.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        },
        // 22
        {
            "image": "video1.jpg",
            "title": "ProSource",
            "des": "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font."
        }
    ];


    function addVideo(num) {
        var video_cards = "";
        for (let i = 0; i < num; i++) {
            if (videos.length) {
                video_cards += `<div class="col-xl-3 col-md-4 col-sm-6 mb-4 video-card">
                    <a href="video.html" class="text-dark">
                        <div class="card">
                            <img class="card-img-top w-100" src="assets/images/${videos[0].image}" alt="Image">
                            <div class="card-body bg-light">
                                <h4 class="card-title">${videos[0].title}</h4>
                                <p class="card-text">${videos[0].des}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
                videos = videos.slice(1);
                console.log(videos)
            }else if(videos.length == 0){
                $("#plus_video_cards").hide();
            }
        }
        $("#video_cards").prepend(video_cards)
    }


    // add elements on load
    addVideo(7)


    // add elements on click
    $("#plus_video_cards").click(function(e){
        e.preventDefault();
        addVideo(8)
    })


})