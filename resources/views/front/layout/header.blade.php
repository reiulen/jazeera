<!-- Mobile Menu Modal -->
<div class="modal offcanvas-modal fade" id="offcanvas-modal">
    <div class="modal-dialog offcanvas-dialog">
        <div class="modal-content">
            <div class="modal-header offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <!-- offcanvas-logo-start -->
             <div class="offcanvas-logo">
                <div class="homec-header__logo">
                    <a href="index.html"><img src="{{ asset('front/logo-jazeera.png') }}" style="height: 150px" alt="#"></a>
                </div>
            </div>
            <!-- offcanvas-logo-end -->
            <!-- offcanvas-menu start -->
            <nav id="offcanvas-menu" class="offcanvas-menu">
                <!-- Main Menu -->
                <ul class="nav-menu menu navigation list-none">
                    <li class=" active">
                        <a href="#">Home</a>
                    </li>
                    <li class="">
                        <a href="#">About Us</a>
                    </li>
                    <li class="">
                        <a href="#">Product</a>
                    </li>
                    <li class="">
                        <a href="#">Facilities</a>
                    </li>
                    <li class="">
                        <a href="#">Gallery</a>
                    </li>
                    <li class="">
                        <a href="#">News</a>
                    </li>
                    <li class="">
                        <a href="#">Career</a>
                    </li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                </ul>
                <!-- End Main Menu -->
            </nav>
            <!-- offcanvas-menu end -->
        </div>
    </div>
</div>
<!-- End Mobile Menu Modal -->


<!-- Header -->
<header id="active-sticky" class="homec-header">
    <!-- Topbar -->
    <div class="homec-header__top">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="homec-topbar-flex">
                        <!-- Contact -->
                        <ul class="homec-header__list">
                            <li>
                                <a href="mailto:HomeC34@gmail.com">
                                    <img src="{{ asset('front/img/email-icon.svg') }}" alt="#">
                                    <span>bru.bagasasi@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+00239040248">
                                    <img src="{{ asset('front/img/phone-icon.svg') }}" alt="#">
                                    <span>+02189907080</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:HomeC34@gmail.com">
                                    <img src="{{ asset('front/img/locations-icon.svg') }}" alt="#">
                                    <span>Jl. Raya Cikarang - Cibarusah No.150, Sukaresmi, <br/> Cikarang Sel., Kabupaten Bekasi, Jawa Barat 17530</span>
                                </a>
                            </li>
                        </ul>
                        <!-- End Contact -->
                        <!-- Social -->
                        <ul class="homec-social homec-social__topbar">
                            <li>
                                <a href="#">
                                    <i class="fab fa-tiktok" style="font-size: 23px"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-youtube" style="font-size: 23px" ></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="fab fa-instagram" style="font-size: 23px"></i>
                                </a>
                            </li>
                        </ul>
                        <!-- End Social -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Topbar -->
    <div class="homec-header__middle">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-12">
                    <div class="homec-header__inside">
                        <div class="homec-header__group">
                            <div class="homec-header__logo">
                                <a href="index.html"><img src="{{ asset('front/logo-jazeera.png') }}" alt="#"></a>
                            </div>
                            <div class="homec-header__menu ms-auto">
                                <div class="navbar">
                                    <div class="nav-item">
                                        <!-- Main Menu -->
                                        <ul class="nav-menu menu navigation list-none">
                                            <li class=" active">
                                                <a href="#">Home</a>
                                            </li>
                                            <li class="">
                                                <a href="#">About Us</a>
                                            </li>
                                            <li class="">
                                                <a href="#">Product</a>
                                            </li>
                                            <li class="">
                                                <a href="#">Facilities</a>
                                            </li>
                                            <li class="">
                                                <a href="#">Gallery</a>
                                            </li>
                                            <li class="">
                                                <a href="#">News</a>
                                            </li>
                                            <li class="">
                                                <a href="#">Career</a>
                                            </li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                        </ul>
                                        <!-- End Main Menu -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="offcanvas-toggler" data-bs-toggle="modal" data-bs-target="#offcanvas-modal"><span class="line"></span><span class="line"></span><span class="line"></span>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- End Header -->
