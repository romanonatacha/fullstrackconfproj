jQuery(document).ready(function(){
    jQuery('input[type="button"]').click(function(){
        var name = jQuery('#name').val();
        var email = jQuery('#email').val();
        var role = jQuery('#role').val();
        var cardNumber = jQuery('#cc-num').val();
        var zip = jQuery('#zip').val();
        var cvv = jQuery('#cvv').val();
        var expMonth = jQuery('#exp-month').val();
        var expYear = jQuery('#exp-year').val();
        
        ...... Do whatever you need & then change the input values
        ...... if all validation has passed the use jQuery('#form').submit(); to submit the form otherwise reset the form:
        jQuery('#fname').val("");
        jQuery('#lname').val("");
        jQuery('#message').val("");



    });
});