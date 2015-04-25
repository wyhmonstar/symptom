(function($) {

	var constant = {
		MENU_CSS : '.bind-menu-syndrome-search',
		ADD_BUTTON : '.bind-search-add-button',
		REMOVE_BUTTON : '.bind-search-remove-button'
	};

	var viewModel = ko.mapping.fromJS({});
	
	var bindEvent = {
		bindAddElement : function() {
			$(constant.ADD_BUTTON).on('click', function() {
				$(this).closest('div .control-group').append($(this).closest('div .row').clone(true));
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
		initData : function() {
			$.ajax({
				type: post,
				dateType: json,
				url : $.SPM.context + 'syndrome/init',
				success : function(data) {
					ko.mapping.fromJS(data, viewModel);
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
			bindEvent.initData();
		}
	};

	$(function() {
		search.init();
	});
})(jQuery);