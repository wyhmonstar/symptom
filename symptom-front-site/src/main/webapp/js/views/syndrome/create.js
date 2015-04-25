(function($) {

	var constant = {
		MENU_CSS : '.bind-menu-syndrome-create',
		CREATE_FROM : '.bind-create-from',
		CREATE_SUBMIT_BUTTON : '.bind-create-submit-button',
		SYMPTOM_NAME : '症状名',
		DESCRIPTION : '症状描述',
		SYNDROME_ELEMENT_START : '症素A',
		SYNDROME_ELEMENT_END : '症素A'
	};

	var bindEvent = {
		validateFrom : function() {
			$(constant.CREATE_FROM).validate({
				errorElement : 'span',
				errorClass : 'help-block',
				focusInvalid : false,
				rules : {
					symptomName : {
						required : [ constant.SYMPTOM_NAME, true ],
						maxlength : 100
					},
					description : {
						required : [ constant.DESCRIPTION, true ],
						maxlength : 5000
					},
					syndromeElementStart : {
						required : [ constant.SYNDROME_ELEMENT_START, true ],
						maxlength : 100
					},
					syndromeElementEnd : {
						required : [ constant.SYNDROME_ELEMENT_END, true ],
						maxlength : 100
					}
				},
				highlight : function(element) {
					$(element).closest('div').addClass('has-error');
				},
				success : function(label) {
					label.closest('div').removeClass('has-error');
					label.remove();
				},
				errorPlacement : function(error, element) {
					element.parent('div').append(error);
				},
				submitHandler : function(form) {
					form.submit();
				}
			});
		},
		doValidate : function() {
			$(constant.CREATE_SUBMIT_BUTTON).on('click', function() {
				if ($(constant.CREATE_FROM).validate().form()) {
					$(constant.CREATE_FROM).submit();
				}
			});
		},
		bindMenuCss : function() {
			$(".list-group-item-success")
					.removeClass("list-group-item-success");
			$(constant.MENU_CSS).addClass("list-group-item-success");
		}
	};

	var create = {
		init : function() {
			bindEvent.validateFrom();
			bindEvent.doValidate();
			bindEvent.bindMenuCss();
		}
	};

	$(function() {
		create.init();
	});
})(jQuery);