<!DOCTYPE html>
<html class="no-js" lang="ZXX">
	<head>
		<!-- Meta Tags -->
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="keywords" content="Site keywords here">
		<meta name="description" content="#">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<!-- Site Title -->
		<title>{{ $title }}</title>

		<!-- Fav Icon -->
		<link rel="icon" href="img/favicon.png">

		<!-- Google Fonts -->
		<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500&display=swap" rel="stylesheet">

		<!-- Bootstrap -->
		<link rel="stylesheet" href="{{ asset('front/css/bootstrap.min.css') }}">
		<!-- Animate CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/animate.min.css') }}">
		<!-- AOS CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/aos.min.css') }}">
		<!-- Fontawesome -->
		<link rel="stylesheet" href="{{ asset('front/css/font-awesome-all.min.css') }}">
		<!-- Swiper Slider CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/swiper-slider.min.css') }}">
		<!-- Flex Slider CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/flex-slider.css') }}">
		<!-- Select2 CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/select2-min.css') }}">
		<!-- Video Popup -->
		<link rel="stylesheet" href="{{ asset('front/css/video-popup.min.css') }}">
		<!-- Jquery UI CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/jquery-ui.min.css') }}">

		<!-- Main CSS -->
		<link rel="stylesheet" href="{{ asset('front/css/theme-default.css') }}">
		<link rel="stylesheet" href="{{ asset('front/style.css') }}">

	</head>

	<body>
		{{-- <div class="preloader">
			<div class="preloader-inner">
				<div class="preloader-icon">
					<span></span>
					<span></span>
				</div>
			</div>
		</div> --}}
		<!-- End Preloader -->

        <x-header-front-layout></x-header-front-layout>


        {{ $slot }}

        <x-footer-front-layout></x-footer-front-layout>

		<!-- Scrool Top -->
		<a href="#" class="scrollToTop">Go Top<i class="fa-solid fa-angle-right"></i></a>

		<!-- Jquery JS -->
		<script src="{{ asset('front/js/jquery.min.js') }}"></script>
		<script src="{{ asset('front/js/jquery-migrate.js') }}"></script>
		<script src="{{ asset('front/js/jquery-ui.min.js') }}"></script>
		<!-- Bootstrap JS -->
		<script src="{{ asset('front/js/bootstrap.min.js') }}"></script>
		<!-- Aos JS -->
		<script src="{{ asset('front/js/aos.min.js') }}"></script>
		<!-- CK Editor JS -->
		<script src="{{ asset('front/js/ckeditor.min.js') }}"></script>
		<!-- Select2 JS-->
		<script src="{{ asset('front/js/select2-js.min.js') }}"></script>
		<!-- Video Popup JS -->
		<script src="{{ asset('front/js/video-popup.min.js') }}"></script>
		<!-- Swiper SLider JS -->
		<script src="{{ asset('front/js/swiper-slider.min.js') }}"></script>
		<!-- Flex SLider JS -->
		<script src="{{ asset('front/js/flex-slider.js') }}"></script>
		<!-- Waypoints JS -->
		<script src="{{ asset('front/js/waypoints.min.js') }}"></script>
		<!-- Counterup JS -->
		<script src="{{ asset('front/js/jquery.counterup.min.js') }}"></script>
		<!-- Easing JS -->
		<script src="{{ asset('front/js/easing.min.js') }}"></script>
		<!-- Main JS -->
		<script src="{{ asset('front/js/active.js') }}"></script>

		<script>
			/* Slider Property */
			var swiper = new Swiper(".homec-slider-property", {
				autoplay: {
					 delay: 4000,
				},
				navigation: {
				  nextEl: ".swiper-button-next",
				  prevEl: ".swiper-button-prev",
				},
				mousewheel: true,
				keyboard: true,
				// loop: true,
				grabCursor: true,
				spaceBetween: 30,
				centeredSlides: false,
				pagination: {
					el: '.swiper-pagination__property',
					type: 'bullets',
					clickable: true,
				},
				slidesPerView: "4",
				breakpoints: {
				  320: {
					slidesPerView: "1",
				  },
				  428: {
					slidesPerView:"1",
				  },
				  640: {
					slidesPerView: "2",
				  },
				  768: {
					slidesPerView: "2",
				  },
				  1024: {
					slidesPerView: "3",
				  },
				},
			});

			/* Agent Slider */
			var swiper = new Swiper(".homec-slider-agent", {
				autoplay: {
					 delay: 4000,
				},
				navigation: {
				  nextEl: ".swiper-button-next",
				  prevEl: ".swiper-button-prev",
				},
				mousewheel: true,
				keyboard: true,
				// loop: true,
				grabCursor: true,
				spaceBetween: 30,
				centeredSlides: false,
				pagination: {
					el: '.swiper-pagination__agent',
					type: 'bullets',
					clickable: true,
				},
				slidesPerView: "4",
				breakpoints: {
				  320: {
					slidesPerView: "1",
				  },
				  428: {
					slidesPerView:"1",
				  },
				  640: {
					slidesPerView: "2",
				  },
				  768: {
					slidesPerView: "2",
				  },
				  1024: {
					slidesPerView: "3",
				  },
				  1100: {
					slidesPerView: "4",
				  },
				},
			});
		 </script>
	</body>
</html>
