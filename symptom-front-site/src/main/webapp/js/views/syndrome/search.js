(function($) {

	var constant = {
		MENU_CSS : '.bind-menu-syndrome-search',
		ADD_BUTTON : '.bind-search-add-button',
		REMOVE_BUTTON : '.bind-search-remove-button',
		SYMPTOM_NAME_SELECT : '.bind-search-symptom-name-select'
	};

	var viewModel = {
		keys : ko.observableArray([]),
		values : ko.observableArray([])
	};

	var bindEvent = {
		bindAddElement : function() {
			$(constant.ADD_BUTTON).on(
					'click',
					function() {
						$(this).closest('div .control-group').append(
								$(this).closest('div .row').clone(true));
					});
		},
		bindRemoveElement : function() {
			$(constant.REMOVE_BUTTON).on('click', function() {
				$(this).closest('div .row').remove();
			});
		},
		bindMenuCss : function() {
			$('.list-group-item-success')
					.removeClass('list-group-item-success');
			$(constant.MENU_CSS).addClass('list-group-item-success');
		},
		bindKeyChange : function() {
			$(constant.SYMPTOM_NAME_SELECT).on('change', function() {
				var sn = $(this).val();
				console.debug(sn);
				$.each(viewModel.keys(), function(i, n) {
					console.debug(n.symptomName());
					if (n.symptomName() === sn) {
						viewModel.values(n.syndromes());
					}
				});
			});
		},
		initData : function() {
			$.ajax({
				type : 'POST',
				url : $.SPM.context + '/syndrome/init',
				dataType : 'JSON',
				success : function(data) {
					var temp = ko.mapping.fromJS(data)();
					viewModel.keys(temp);
					if (temp[0]) {
						viewModel.values(temp[0].syndromes());
					}
				}
			});
		}
	};

	var search = {
		init : function() {
			ko.applyBindings(viewModel);
			bindEvent.bindMenuCss();
			bindEvent.bindAddElement();
			bindEvent.bindRemoveElement();
			bindEvent.bindKeyChange();
			bindEvent.initData();
		}
	};

	$(function() {
		search.init();
	});
})(jQuery);