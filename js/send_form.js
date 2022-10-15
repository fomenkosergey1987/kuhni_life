(function() {

	var app = {

		initialize : function () {
			this.setUpListeners();
		},

		setUpListeners: function () {
			$('form').on('submit', app.submitForm);
			$('form').on('keydown', 'input', app.removeError);
		},

		submitForm: function (e) {
			e.preventDefault();

			var form = $(this),
				submitBtn = form.find('button[type="submit"]');

			if( app.validateForm(form) === false ) return false;

			submitBtn.attr('disabled', 'disabled');

			var str = form.serialize();

            send_url = '';

			if (form.hasClass('send-wish-form')){
                send_url = 'contact_form/wish.php';
			}
			if (form.hasClass('order-bring-form')){
                send_url = 'contact_form/bring.php';
			}
			if (send_url === ''){
                send_url = 'contact_form/contact.php';
			}

            $.ajax({
				url: send_url,
				type: 'POST',
				data: str
			})
                .done(function(msg) {
                    if(msg === "OK"){
                        var result = "Спасибо за заявку! Мы с вами свяжемся!"
                        $('.modal-title').html(result);
                        $('.modal').modal('show');
                    }else{
                        $('.modal-title').html(msg);
                        $('.modal').modal('show');
                    }
                })
				.always(function() {
					submitBtn.removeAttr('disabled');
				});

		},

		validateForm: function (form){
			var inputs = form.find('input'),
				valid = true;

			inputs.tooltip('destroy');

			$.each(inputs, function(index, val) {
				var input = $(val),
					val = input.val(),
					formGroup = input.parents('.home-contact-form-row'),
                    hasRequired = formGroup.hasClass('required'),
					label = formGroup.find('label').text().toLowerCase(),
					textError = 'Введите ' + label;

				if(val.length === 0 && hasRequired){
					formGroup.addClass('has-error').removeClass('has-success');
                    setTimeout(function () {
                        input.tooltip({
                            trigger: 'manual',
                            placement: 'right',
                            title: textError
                        }).tooltip('show');
                        valid = false;
                    }, 200);
				}else{
					formGroup.addClass('has-success').removeClass('has-error');
				}
			});

			return valid;
		},

		removeError: function () {
			$(this).tooltip('destroy');
            setTimeout(function () {
                $(this).parents('.form-group').removeClass('has-error');
            } , 200)
		}

	}

	app.initialize();

}());