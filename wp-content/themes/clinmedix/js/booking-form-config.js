"use strict"; // Start of use strict
// no conflict prototype
(function($) {
    if ($('.appointment-form .select-date').length) {

        // trigger datepicker
        //$('.appointment-form .select-date-input').datepicker();

        // trigger for div
        $('.frm-control.select-date .fa-calendar-alt').on('click', function() {
            $('.appointment-form .select-date-input').datepicker('show');
        });
    }
})(jQuery);