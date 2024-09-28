$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Initialize tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Portfolio gallery filter
    $('.filter-btn').on('click', function () {
        var category = $(this).data('category');
        if (category === 'all') {
            $('.portfolio-item').show();
        } else {
            $('.portfolio-item').hide();
            $('.portfolio-item[data-category="' + category + '"]').show();
        }
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });

    // Form validation for booking and contact forms
    $('.needs-validation').submit(function (event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated');
    });
});
