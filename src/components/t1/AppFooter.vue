<template>
    <div class="footer-container">
        <div class="footer-upper">
            <div class="footer-element">
                <img src="../../assets/img/logo-light.png" alt="">
                <p>
                    Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home
                </p>
                <div class="contact">
                    <div class="phone-number">
                        <i class="fa-solid fa-phone"></i>
                        <span> 1-677-124-4427</span>
                    </div>
                    <div class="call-hours">
                        <i class="fa-solid fa-clock"></i>
                        <span> Mon - Sat 8.00 - 18.00</span>
                    </div>
                </div>

            </div>

            <div class="footer-element">
                <h2>
                    Popular Courses
                </h2>
                <ul class="courses-list">
                    <li>
                        <div class="course-title">
                            Business English
                        </div>
                        <div class="course-teacher">
                            Preston Marshall
                        </div>
                    </li>
                    <li>
                        <div class="course-title">
                            Social Computing
                        </div>
                        <div class="course-teacher">
                            David Sanders
                        </div>
                    </li>
                    <li>
                        <div class="course-title">
                            Learn Spanish
                        </div>
                        <div class="course-teacher">
                            Jennie King
                        </div>
                    </li>
                </ul>
            </div>

            <div class="footer-element">
                <H2> Support </H2>
                <ul class="support-list">
                    <li>
                        User dashboard
                    </li>
                    <li>Contact us</li>
                    <li> FAQ </li>
                    <li> Course Offer </li>
                    <li> Events </li>
                </ul>
            </div>

            <div class="footer-element">
                <h2>
                    Flexible Learning
                </h2>
                <img src="../../assets/img/footer-img-1.png" alt="globe">

            </div>
        </div>
        <hr>
        <div class="footer-bottom">
            <p>
                © 2017 COpyrights Mikado Themes
            </p>
            <div class="socials">
                <span>
                    CALL +44 300 303 0266
                </span>
                <span>
                    FOLLOW US
                </span>
                <span class="social-icons">
                    <i class="fa-brands fa-x-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                </span>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.footer-container {
    @apply w-3/4 mx-auto pt-36 pb-12
}

.footer-upper {
    @apply flex text-white justify-between gap-4 pb-24
}

.footer-element {
    @apply w-1/4 flex flex-col gap-6
}

.footer-element h2 {
    @apply text-2xl font-semibold text-white
}

.footer-element:first-child img {
    @apply w-2/5 mb-3
}

.footer-element:first-child p {
    @apply w-3/4
}

.footer-element ul {
    @apply flex flex-col text-gray-300
}

.footer-element ul.courses-list {
    @apply gap-6
}

.footer-element ul.support-list {
    @apply gap-3
}

.footer-element ul .course-title {
    @apply text-lg font-semibold
}

div.contact {
    @apply text-sm font-semibold cursor-pointer flex flex-col gap-2
}

div.contact i {
    @apply me-3
}

div.contact div:hover i,
.course-title:hover,
ul.support-list li:hover {
    @apply transition ease-in text-[var(--theme-blue)] cursor-pointer
}

.course-teacher:hover {
    @apply text-gray-600 cursor-pointer
}

hr {
    @apply mb-12 border-gray-500
}

.footer-bottom {
    @apply flex justify-between text-gray-500 text-sm
}

.footer-bottom .socials {
    @apply flex gap-5
}

.footer-bottom .socials .social-icons {
    @apply flex gap-4
}


.footer-bottom .socials .social-icons:hover {
    @apply cursor-pointer text-[var(--theme-blue)]
}
</style>