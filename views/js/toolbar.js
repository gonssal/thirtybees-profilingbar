String.prototype.replaceColours = function () {
	return (
		this
		.replace(/color:green/g, 'color:#4F805D')
		.replace(/color:#EF8B00/g, 'color:#A46A1F')
		.replace(/color:red/g, 'color:#B0413E')
		.replace(/color:blue/g, 'color:#416db0')
	);
};
String.prototype.replacePreSQL = function () {
	return (
		this
		.replace(/<pre>/g, '<pre><code class="language-sql">')
		.replace(/<\/pre>/g, '</code></pre>')
	);
};
String.prototype.replacePrePHP = function () {
	return (
		this
		.replace(/<pre>/g, '<pre><code class="language-php">')
		.replace(/<\/pre>/g, '</code></pre>')
	);
};

$(document).ready(function() {

	$('body').append('\
		<!-- START of thirty bees Web Debug Toolbar -->\
		<div id="sfMiniToolbar" class="sf-minitoolbar" data-no-turbolink>\
			<a href="#" title="Show thirty bees toolbar" tabindex="-1" id="sfToolbarMiniToggler" accesskey="D">\
				<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve">\
					<g fill="none" transform="translate(-123.59 -353.51)">\
					<g transform="translate(157.26 352.89)">\
					<path d="m24.276 10.644c11.732 0 21.276 9.4918 21.276 21.159 0 6.5764-3.034 12.46-7.7806 16.343l7.6445 7.491c6.64-5.833 10.839-14.352 10.839-23.835 0-17.536-14.345-31.802-31.979-31.802-9.704 0-18.406 4.3262-24.276 11.136l7.6525 7.4977c3.9015-4.862 9.8975-7.99 16.624-7.99" fill="#AAAAAA" transform="translate(.47340 .625)"/>\
					</g>\
					<g transform="translate(122.97 353.79)">\
					<path d="m90.08 71.912c-0.468-4.335-2.666-8.471-6.597-12.404l-18.247-18.254c-2.8085-2.8082-5.3657-4.3374-7.6744-4.5874-2.3061-0.2486-4.5539 0.2818-6.7357 1.5913 1.1226-2.4947 1.4955-4.8678 1.1213-7.1152-0.3742-2.246-1.8089-4.6165-4.304-7.1139l-16.564-16.569c-4.739-4.7426-9.091-7.2241-13.054-7.4437-3.96-0.21695-7.999 1.7328-12.118 5.8519-4.1164 4.1178-6.0813 8.1758-5.8949 12.17 0.18646 3.995 2.6208 8.331 7.2989 13.012l13.568 13.573c3.8769-3.8783 3.8769-10.164 0-14.043l-6.5491-6.5517c-2.121-2.1217-3.3229-4.008-3.6019-5.6628-0.2816-1.6534 0.5144-3.418 2.3854-5.2897 1.9331-1.9339 3.7274-2.7607 5.3816-2.4802 1.6528 0.2817 3.5397 1.4828 5.6606 3.6045l15.907 15.913c1.998 1.9987 3.2118 3.807 3.6508 5.43 0.4351 1.623-0.3133 3.4022-2.2465 5.3361l-4.0237 4.0252 6.6444 6.6456 3.6495-3.6508c2.1196-2.1205 4.0091-3.0094 5.662-2.6668 1.6528 0.3426 3.5093 1.5437 5.5667 3.6033l17.593 17.598c1.9344 1.9352 3.0412 3.8241 3.3215 5.6654 0.2816 1.8414-0.484 3.6669-2.2915 5.4764-1.748 1.7474-3.5239 2.4643-5.3354 2.1522-1.8088-0.3109-3.6481-1.4035-5.5204-3.2766l-7.9548-7.9579c-3.9787-3.9802-10.43-3.9802-14.41 0l15.16 15.167c3.9298 3.9313 8.0632 6.0993 12.398 6.5054 4.3371 0.4061 8.5644-1.4511 12.682-5.5702 4.1162-4.1191 5.9423-8.3454 5.4729-12.684" fill="#AAAAAA" transform="translate(.62461 .62447)"/>\
					</g>\
					<g transform="translate(124.72 402.84)">\
					<path d="m37.48 37.369h-37.48v-37.369c5.7891 0 10.481 4.7919 10.481 10.702v15.964h16.516c5.7891 0 10.483 4.7919 10.483 10.702" fill="#AAAAAA" transform="translate(.625 .625)"/>\
					</g>\
					</g>\
				</svg>\
			</a>\
		</div>\
		<div id="sfToolbarClearer" class="sf-toolbar-clearer"></div>\
		<div id="sfToolbarMainContent" class="sf-toolbarreset clear-fix" data-no-turbolink>\
		</div>\
		<!-- END of Symfony Web Debug Toolbar -->\
	');

	var $toolbarContent = $('#sfToolbarMainContent');

	/**
	 * Exceptions
	 */
	var $exceptionContainer = $('#psException');
	var $exceptionCount = $exceptionContainer.length;
	if ($exceptionCount > 0) {
		$label = $exceptionCount == 1 ? '1 Exception' : ($exceptionCount + ' Exceptions');
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-exception sf-toolbar-status-red">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAAAAA" d="M21,4v13.8c0,2.7-2.5,5.2-5.2,5.2H6c-0.6,0-1-0.4-1-1s0.4-1,1-1h9.8c1.6,0,3.2-1.7,3.2-3.2V4\
							c0-0.6,0.4-1,1-1S21,3.4,21,4z M5.5,20C4.1,20,3,18.9,3,17.5V3.5C3,2.1,4.1,1,5.5,1h10.1C16.9,1,18,2.1,18,3.5v14.1\
							c0,1.4-1.1,2.5-2.5,2.5H5.5z M9,11.4C9,11.7,9.3,12,9.6,12h1.8c0.3,0,0.6-0.3,0.6-0.6V4.6C12,4.3,11.7,4,11.4,4H9.6\
							C9.3,4,9,4.3,9,4.6V11.4z M9,16.4C9,16.7,9.3,17,9.6,17h1.8c0.3,0,0.6-0.3,0.6-0.6v-1.8c0-0.3-0.3-0.6-0.6-0.6H9.6\
							C9.3,14,9,14.3,9,14.6V16.4z"/>\
						</svg>\
						<span class="sf-toolbar-value">' + $label + '</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info"></div>\
			</div>\
		');
		var $cont = $toolbarContent.children('.sf-toolbar-block').last();
		var $contToolbarInfo = $cont.find('.sf-toolbar-info');
		$exceptionContainer.each(function() {
			$contToolbarInfo.append($(this).html().replacePrePHP());
			$(this).remove();
		});
	}

	/**
	 * Profiling
	 */
	var $pC = $('#prestashop_profiling');

	// Time & memory
	var $curr = $pC.find('.col-4').first();
	if ($curr.length === 1) {
		var $loadTime = $curr.children('.table').first().find('tr:nth-child(1)').children('td:nth-child(2)').children('span').prop('outerHTML');
		var $dbQueries = $curr.children('.table').first().find('tr:nth-child(3)').first().children('td:nth-child(2)').children('span').prop('outerHTML');
		var $dbQueriesTime = $curr.children('.table').first().find('tr:nth-child(2)').first().children('td:nth-child(2)').children('span').prop('outerHTML');
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAAAAA" d="M15.1,4.3c-2.1-0.5-4.2-0.5-6.2,0C8.6,4.3,8.2,4.1,8.2,3.8V3.4c0-1.2,1-2.3,2.3-2.3h3c1.2,0,2.3,1,2.3,2.3\
						v0.3C15.8,4.1,15.4,4.3,15.1,4.3z M20.9,14c0,4.9-4,8.9-8.9,8.9s-8.9-4-8.9-8.9s4-8.9,8.9-8.9S20.9,9.1,20.9,14z M16.7,15\
						c0-0.6-0.4-1-1-1H13V8.4c0-0.6-0.4-1-1-1s-1,0.4-1,1v6.2c0,0.6,0.4,1.3,1,1.3h3.7C16.2,16,16.7,15.6,16.7,15z"/>\
						</svg>\
						<span class="sf-toolbar-value">' + $loadTime.replaceColours() + '</span>\
						<span class="sf-toolbar-label">ms</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// System
	var $curr = $pC.find('.col-4').first();
	if ($curr.length === 1) {
		var $psVer = $curr.children('.table').first().find('tr').first().children('td:nth-child(2)').text();
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-block-config sf-toolbar-status-normal sf-toolbar-block-right">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 90 90" enable-background="new 0 0 90 90" xml:space="preserve">\
							<g fill="none" transform="translate(-123.59 -353.51)">\
							<g transform="translate(157.26 352.89)">\
							<path d="m24.276 10.644c11.732 0 21.276 9.4918 21.276 21.159 0 6.5764-3.034 12.46-7.7806 16.343l7.6445 7.491c6.64-5.833 10.839-14.352 10.839-23.835 0-17.536-14.345-31.802-31.979-31.802-9.704 0-18.406 4.3262-24.276 11.136l7.6525 7.4977c3.9015-4.862 9.8975-7.99 16.624-7.99" fill="#AAAAAA" transform="translate(.47340 .625)"/>\
							</g>\
							<g transform="translate(122.97 353.79)">\
							<path d="m90.08 71.912c-0.468-4.335-2.666-8.471-6.597-12.404l-18.247-18.254c-2.8085-2.8082-5.3657-4.3374-7.6744-4.5874-2.3061-0.2486-4.5539 0.2818-6.7357 1.5913 1.1226-2.4947 1.4955-4.8678 1.1213-7.1152-0.3742-2.246-1.8089-4.6165-4.304-7.1139l-16.564-16.569c-4.739-4.7426-9.091-7.2241-13.054-7.4437-3.96-0.21695-7.999 1.7328-12.118 5.8519-4.1164 4.1178-6.0813 8.1758-5.8949 12.17 0.18646 3.995 2.6208 8.331 7.2989 13.012l13.568 13.573c3.8769-3.8783 3.8769-10.164 0-14.043l-6.5491-6.5517c-2.121-2.1217-3.3229-4.008-3.6019-5.6628-0.2816-1.6534 0.5144-3.418 2.3854-5.2897 1.9331-1.9339 3.7274-2.7607 5.3816-2.4802 1.6528 0.2817 3.5397 1.4828 5.6606 3.6045l15.907 15.913c1.998 1.9987 3.2118 3.807 3.6508 5.43 0.4351 1.623-0.3133 3.4022-2.2465 5.3361l-4.0237 4.0252 6.6444 6.6456 3.6495-3.6508c2.1196-2.1205 4.0091-3.0094 5.662-2.6668 1.6528 0.3426 3.5093 1.5437 5.5667 3.6033l17.593 17.598c1.9344 1.9352 3.0412 3.8241 3.3215 5.6654 0.2816 1.8414-0.484 3.6669-2.2915 5.4764-1.748 1.7474-3.5239 2.4643-5.3354 2.1522-1.8088-0.3109-3.6481-1.4035-5.5204-3.2766l-7.9548-7.9579c-3.9787-3.9802-10.43-3.9802-14.41 0l15.16 15.167c3.9298 3.9313 8.0632 6.0993 12.398 6.5054 4.3371 0.4061 8.5644-1.4511 12.682-5.5702 4.1162-4.1191 5.9423-8.3454 5.4729-12.684" fill="#AAAAAA" transform="translate(.62461 .62447)"/>\
							</g>\
							<g transform="translate(124.72 402.84)">\
							<path d="m37.48 37.369h-37.48v-37.369c5.7891 0 10.481 4.7919 10.481 10.702v15.964h16.516c5.7891 0 10.483 4.7919 10.483 10.702" fill="#AAAAAA" transform="translate(.625 .625)"/>\
							</g>\
							</g>\
						</svg>\
						<span class="sf-toolbar-value">' + $psVer + '</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// Controller
	var $curr = $pC.find('.col-4').first();
	if ($curr.length === 1) {
		var $psVer = $curr.children('.table').first().find('tr').first().children('td:nth-child(2)').text();
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
					<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
					<path fill="#AAAAAA" d="M13,3v18c0,1.1-0.9,2-2,2s-2-0.9-2-2V3c0-1.1,0.9-2,2-2S13,1.9,13,3z M23.2,4.6l-1.8-1.4\
						C21.2,2.9,20.8,3,20.4,3h-1.3H14v2.1V8h5.1h1.3c0.4,0,0.8-0.3,1.1-0.5l1.8-1.6C23.6,5.6,23.6,4.9,23.2,4.6z M19.5,9.4\
						C19.2,9.1,18.8,9,18.4,9h-0.3H14v2.6V14h4.1h0.3c0.4,0,0.8-0.1,1.1-0.3l1.8-1.5c0.4-0.3,0.4-0.9,0-1.3L19.5,9.4z M3.5,7\
						C3.1,7,2.8,7,2.5,7.3L0.7,8.8c-0.4,0.3-0.4,0.9,0,1.3l1.8,1.6C2.8,11.9,3.1,12,3.5,12h0.3H8V9.4V7H3.9H3.5z"/>\
					</svg>\
						<span class="sf-toolbar-value">Controller</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// Remove empty row
	$pC.children('.row').first().remove();

	// Hooks
	var $curr = $pC.find('.col-4').first();
	if ($curr.length === 1) {
		var $label = $curr.children('.table').first().find('tr').last().children('th:first-child').text();
		var $time = $curr.children('.table').first().find('tr').last().children('th:nth-child(2)').children('span').prop('outerHTML');
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAAAAA" d="M20.1,1H3.9C2.3,1,1,2.3,1,3.9v16.3C1,21.7,2.3,23,3.9,23h16.3c1.6,0,2.9-1.3,2.9-2.9V3.9\
							C23,2.3,21.7,1,20.1,1z M21,20.1c0,0.5-0.4,0.9-0.9,0.9H3.9C3.4,21,3,20.6,3,20.1V3.9C3,3.4,3.4,3,3.9,3h16.3C20.6,3,21,3.4,21,3.9\
							V20.1z M5,5h14v3H5V5z M5,10h3v9H5V10z M10,10h9v9h-9V10z"/>\
						</svg>\
						<span class="sf-toolbar-value">' + $label + '</span>\
						<span class="sf-toolbar-label">in</span>\
						<span class="sf-toolbar-value">' + $time.replaceColours() + '</span>\
						<span class="sf-toolbar-label">ms</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// Modules
	var $curr = $pC.find('.col-4').first();
	if ($curr.length === 1) {
		var $label = $curr.children('.table').first().find('tr').last().children('th:first-child').text();
		var $time = $curr.children('.table').first().find('tr').last().children('th:nth-child(2)').children('span').prop('outerHTML');
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAA" d="M2.26 6.09l9.06-4.67a1.49 1.49 0 0 1 1.37 0l9.06 4.67a1.49 1.49 0 0 1 0 2.65l-9.06 4.67a1.49 1.49 0 0 1-1.37 0L2.26 8.74a1.49 1.49 0 0 1 0-2.65zM20.55 11L12 15.39 3.45 11a1.36 1.36 0 0 0-1.25 2.42l9.17 4.73a1.36 1.36 0 0 0 1.25 0l9.17-4.73A1.36 1.36 0 0 0 20.55 11zm0 4.47L12 19.86l-8.55-4.41a1.36 1.36 0 0 0-1.25 2.42l9.17 4.73a1.36 1.36 0 0 0 1.25 0l9.17-4.73a1.36 1.36 0 0 0-1.25-2.42z"/>\
						</svg>\
						<span class="sf-toolbar-value">' + $label + '</span>\
						<span class="sf-toolbar-label">in</span>\
						<span class="sf-toolbar-value">' + $time.replaceColours() + '</span>\
						<span class="sf-toolbar-label">ms</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// Anchors, just remove
	var $curr = $pC.find('.col-4').first();
	if ($curr.length === 1) {
		$curr.remove();
	}

	// Remove empty row
	$pC.children('.row').first().remove();

	// DB queries
	var $curr = $pC.find('.row').first();
	if ($curr.length === 1) {
		var $label = $curr.children('h2').children('a').text();
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-database sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAAAAA" d="M5,8h14c1.7,0,3-1.3,3-3s-1.3-3-3-3H5C3.3,2,2,3.3,2,5S3.3,8,5,8z M18,3.6c0.8,0,1.5,0.7,1.5,1.5S18.8,6.6,18,6.6s-1.5-0.7-1.5-1.5S17.2,3.6,18,3.6z M19,9H5c-1.7,0-3,1.3-3,3s1.3,3,3,3h14c1.7,0,3-1.3,3-3S20.7,9,19,9z M18,13.6\
						c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.8,13.6,18,13.6z M19,16H5c-1.7,0-3,1.3-3,3s1.3,3,3,3h14c1.7,0,3-1.3,3-3S20.7,16,19,16z M18,20.6c-0.8,0-1.5-0.7-1.5-1.5s0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5S18.8,20.6,18,20.6z"></path>\
						</svg>\
						<span class="sf-toolbar-value">' + $dbQueries.replaceColours() + ' queries</span>\
						<span class="sf-toolbar-label">in</span>\
						<span class="sf-toolbar-value">' + $dbQueriesTime.replaceColours() + '</span>\
						<span class="sf-toolbar-label">ms</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info"><div class="sf-toolbar-info-group">' + $curr.html().replaceColours().replacePreSQL() + '</div></div>\
			</div>\
		');
		$curr.remove();
		var $cont = $toolbarContent.children('.sf-toolbar-block').last();
		var $contToolbarInfo = $cont.find('.sf-toolbar-info');
	}
	// DB duplicated queries
	var $curr = $pC.find('.row').first();
	if ($curr.length === 1 && typeof $contToolbarInfo !== 'undefined') {
		var $label = $curr.children('h2').children('a').text();
		$contToolbarInfo.append('<div class="sf-toolbar-info-group">' + $curr.html().replaceColours().replacePreSQL() + '</div>');
		$curr.remove();
	}
	// DB table stress
	var $curr = $pC.find('.row').first();
	if ($curr.length === 1 && typeof $contToolbarInfo !== 'undefined') {
		var $label = $curr.children('h2').children('a').text();
		$contToolbarInfo.append('<div class="sf-toolbar-info-group">' + $curr.html().replaceColours().replacePreSQL() + '</div>');
		$curr.remove();
	}
	// Handle <pre> tags
	if (typeof $cont !== 'undefined') {
		$cont.find('td.pre').each(function() {
			var $t = $(this);
			var $pre = $t.children('pre');
			$t.addClass('condensed');
			$t.click(function(e) {
				e.preventDefault();
				$cont.find('td.pre').not($t).addClass('condensed');
				$t.toggleClass('condensed');
			});
			$t.prepend('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
				<path fill="#AAAAAA" d="M11.61,0.357c-4.4,0-7.98,3.58-7.98,7.98c0,1.696,0.526,3.308,1.524,4.679l-4.374,4.477\
					c-0.238,0.238-0.369,0.554-0.369,0.891c0,0.336,0.131,0.653,0.369,0.891c0.238,0.238,0.554,0.369,0.891,0.369\
					c0.336,0,0.653-0.131,0.893-0.371l4.372-4.475c1.369,0.996,2.98,1.521,4.674,1.521c4.4,0,7.98-3.58,7.98-7.98\
					S16.01,0.357,11.61,0.357z M17.07,8.337c0,3.011-2.449,5.46-5.46,5.46c-3.011,0-5.46-2.449-5.46-5.46s2.449-5.46,5.46-5.46\
					C14.62,2.877,17.07,5.326,17.07,8.337z"/>\
			</svg>');
		});
	}
	// Create tabs for info-groups
	if (typeof $contToolbarInfo !== 'undefined') {
		$tabIndex = 0;
		$contToolbarInfo.find('.sf-toolbar-info-group').each(function() {
			var $t = $(this);
			var $h = $(this).children('h2');
			var $id = 'info-group-' + $tabIndex.toString();
			$h.attr('id', $id);
			if ($tabIndex == 0) {
				$contToolbarInfo.prepend('<ul class="sf-toolbar-info-tabs"><li>Jump to:</li></ul>')
			}
			else {
				$contToolbarInfo.children('.sf-toolbar-info-tabs').append('<li><a href="#' + $id + '">' + $h.children('a').text() + '</a></li>');
			}
			$tabIndex++;
		});
	}

	// ObjectModel instances
	var $curr = $pC.find('.row').first();
	if ($curr.length === 1) {
		var $label = $curr.children('h2').children('a').text();
		$curr.children('h2').remove();
		var $count = 0;
		$curr.find('.table').find('tr').children('td:nth-child(2)').children('span').each(function() {
			if ($.isNumeric($(this).text())) {
				$count += parseInt($(this).text());
			}
		});
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-database sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAAAAA" d="M15.8,6.4h-1.1c0,0-0.1,0.1-0.1,0l0.8-0.7c0.5-0.5,0.5-1.3,0-1.9l-1.4-1.4c-0.5-0.5-1.4-0.5-1.9,0l-0.6,0.8\
						c-0.1,0,0,0,0-0.1V2.1c0-0.8-1-1.4-1.8-1.4h-2c-0.8,0-1.9,0.6-1.9,1.4v1.1c0,0,0.1,0.1,0.1,0.1L5.1,2.5c-0.5-0.5-1.3-0.5-1.9,0\
						L1.8,3.9c-0.5,0.5-0.5,1.4,0,1.9l0.8,0.6c0,0.1,0,0-0.1,0H1.4C0.7,6.4,0,7.5,0,8.2v2c0,0.8,0.7,1.8,1.4,1.8h1.2c0,0,0.1-0.1,0.1-0.1\
						l-0.8,0.7c-0.5,0.5-0.5,1.3,0,1.9L3.3,16c0.5,0.5,1.4,0.5,1.9,0l0.6-0.8c0.1,0-0.1,0-0.1,0.1v1.2c0,0.8,1.1,1.4,1.9,1.4h2\
						c0.8,0,1.8-0.6,1.8-1.4v-1.2c0,0-0.1-0.1,0-0.1l0.7,0.8c0.5,0.5,1.3,0.5,1.9,0l1.4-1.4c0.5-0.5,0.5-1.4,0-1.9L14.6,12\
						c0-0.1,0,0.1,0.1,0.1h1.1c0.8,0,1.3-1.1,1.3-1.8v-2C17.1,7.5,16.5,6.4,15.8,6.4z M8.6,13c-2.1,0-3.8-1.7-3.8-3.8\
						c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C12.3,11.3,10.6,13,8.6,13z"/>\
							<path fill="#AAAAAA" d="M22.3,15.6l-0.6,0.2c0,0,0,0.1,0,0l0.3-0.5c0.2-0.4,0-0.8-0.4-1l-1-0.4c-0.4-0.2-0.8,0-1,0.4l-0.1,0.5\
						c0,0,0,0,0,0l-0.2-0.6c-0.2-0.4-0.8-0.5-1.2-0.3l-1.1,0.4c-0.4,0.2-0.8,0.7-0.7,1.1l0.2,0.6c0,0,0.1,0,0.1,0l-0.5-0.3\
						c-0.4-0.2-0.8,0-1,0.4l-0.4,1c-0.2,0.4,0,0.8,0.4,1l0.5,0.1c0,0,0,0,0,0l-0.6,0.2c-0.4,0.2-0.5,0.8-0.4,1.2l0.4,1.1\
						c0.2,0.4,0.7,0.8,1.1,0.7l0.6-0.2c0,0,0-0.1,0,0l-0.3,0.5c-0.2,0.4,0,0.8,0.4,1l1,0.4c0.4,0.2,0.8,0,1-0.4l0.1-0.5c0,0,0,0,0,0\
						l0.2,0.6c0.2,0.4,0.9,0.5,1.2,0.3l1.1-0.4c0.4-0.2,0.8-0.7,0.6-1.1l-0.2-0.6c0,0-0.1,0,0,0l0.5,0.3c0.4,0.2,0.8,0,1-0.4l0.4-1\
						c0.2-0.4,0-0.8-0.4-1l-0.5-0.1c0,0,0,0,0,0l0.6-0.2c0.4-0.2,0.5-0.8,0.3-1.2l-0.4-1.1C23.2,15.9,22.7,15.5,22.3,15.6z M19.9,20.5\
						c-1.1,0.4-2.3-0.1-2.7-1.2c-0.4-1.1,0.1-2.3,1.2-2.7c1.1-0.4,2.3,0.1,2.7,1.2C21.5,18.9,21,20.1,19.9,20.5z"/>\
						</svg>\
						<span class="sf-toolbar-value">' + $count + '</span>\
						<span class="sf-toolbar-label">' + $label + '</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// Included files
	var $curr = $pC.find('.row').first();
	if ($curr.length === 1) {
		var $label = $curr.children('h2').children('a').text();
		$curr.children('h2').remove();
		var $count = parseInt($curr.find('.table').find('tr:last-child').children('td:first-child').text());
		$toolbarContent.append('\
			<div class="sf-toolbar-block sf-toolbar-database sf-toolbar-status-normal">\
				<a href="#">\
					<div class="sf-toolbar-icon">\
						<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
							<path fill="#AAAAAA" d="M20.5,4H18V2.5C18,1.7,17.3,1,16.5,1h-9C6.7,1,6,1.7,6,2.5V4H3.5C2.7,4,2,4.7,2,5.5v16C2,22.3,2.7,23,3.5,\
							23h17c0.8,0,1.5-0.7,1.5-1.5v-16C22,4.7,21.3,4,20.5,4z M9,4h6v1H9V4z M19,20H5V7h1.1c0.2,0.6,0.8,1,1.4,1h9c0.7,0,1.2-0.4,1.4-1H19\
							V20z M17,11c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h8C16.6,10,17,10.4,17,11z M17,14c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1\
							s0.4-1,1-1h8C16.6,13,17,13.4,17,14z M13,17c0,0.6-0.4,1-1,1H8c-0.6,0-1-0.4-1-1s0.4-1,1-1h4C12.6,16,13,16.4,13,17z"/>\
						</svg>\
						<span class="sf-toolbar-value">' + $count + '</span>\
						<span class="sf-toolbar-label">' + $label + '</span>\
					</div>\
				</a>\
				<div class="sf-toolbar-info">' + $curr.html().replaceColours() + '</div>\
			</div>\
		');
		$curr.remove();
	}

	// Close button
	$toolbarContent.append('\
		<a class="hide-button" id="sfToolbarHideButton" title="Close Toolbar" tabindex="-1" accesskey="D">\
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">\
			<path fill="#AAAAAA" d="M21.1,18.3c0.8,0.8,0.8,2,0,2.8c-0.4,0.4-0.9,0.6-1.4,0.6s-1-0.2-1.4-0.6L12,14.8l-6.3,6.3\
				c-0.4,0.4-0.9,0.6-1.4,0.6s-1-0.2-1.4-0.6c-0.8-0.8-0.8-2,0-2.8L9.2,12L2.9,5.7c-0.8-0.8-0.8-2,0-2.8c0.8-0.8,2-0.8,2.8,0L12,9.2\
				l6.3-6.3c0.8-0.8,2-0.8,2.8,0c0.8,0.8,0.8,2,0,2.8L14.8,12L21.1,18.3z"></path>\
			</svg>\
		</a>');


	/* Handle toolbar-info position */
	var toolbarBlocks = [].slice.call($toolbarContent[0].querySelectorAll('.sf-toolbar-block'));
	var i;
	for (i = 0; i < toolbarBlocks.length; ++i) {
		toolbarBlocks[i].onmouseover = function () {
			var toolbarInfo = this.querySelectorAll('.sf-toolbar-info')[0];
			var pageWidth = document.body.clientWidth;
			var elementWidth = toolbarInfo.offsetWidth;
			var leftValue = (elementWidth + this.offsetLeft) - pageWidth;
			var rightValue = (elementWidth + (pageWidth - this.offsetLeft)) - pageWidth;
			/* Reset right and left value, useful on window resize */
			toolbarInfo.style.right = '';
			toolbarInfo.style.left = '';
			if (elementWidth >= pageWidth) {
				if (leftValue <= this.offsetLeft) {
					toolbarInfo.style.left = "-" + leftValue.toString() + "px";
				}
				else {
					toolbarInfo.style.left = "-" + this.offsetLeft.toString() + "px";
				}
				toolbarInfo.style.maxWidth = ($toolbarContent[0].offsetWidth - 20).toString() + "px";
				toolbarInfo.style.overflowX = "auto";
			}
			else if (leftValue > 0 && rightValue > 0) {
				toolbarInfo.style.right = (rightValue * -1) + 'px';
			} else if (leftValue < 0) {
				toolbarInfo.style.left = 0;
			} else {
				toolbarInfo.style.right = '0px';
			}
		};
	}

	// Detect when footer changes and make room if necessary
	var mut = new MutationObserver(function(mutations, mut){
		if (!$('#footer').hasClass('hide')) {
			$('#sfMiniToolbar, #sfToolbarMainContent').css('bottom', '50px');
		}
		else {
			$('#sfMiniToolbar, #sfToolbarMainContent').css('bottom', '');
		}
	});
	mut.observe(document.getElementById("footer"),{
		'attributes': true
	});

	// Toolbar toggling
	$('#sfToolbarHideButton').on('click', function (event) {
		event.preventDefault();
		var p = this.parentNode;
		p.style.display = 'none';
		(p.previousElementSibling || p.previousSibling).style.display = 'none';
		document.getElementById('sfMiniToolbar').style.display = 'block';
	});
	$('#sfToolbarMiniToggler').on('click', function (event) {
		event.preventDefault();
		var elem = this.parentNode;
		if (elem.style.display == 'none') {
			document.getElementById('sfToolbarMainContent').style.display = 'none';
			document.getElementById('sfToolbarClearer').style.display = 'none';
			elem.style.display = 'block';
		} else {
			document.getElementById('sfToolbarMainContent').style.display = 'block';
			document.getElementById('sfToolbarClearer').style.display = 'block';
			elem.style.display = 'none'
		}
	});

});