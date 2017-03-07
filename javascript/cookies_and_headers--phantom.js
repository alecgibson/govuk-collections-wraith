// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (phantom, ready) {

    page.customHeaders = {
        'GOVUK-ABTest-EducationNavigation': 'B'
    };

    phantom.open(phantom.url, function () {
        setTimeout(ready, 2000);
    });
}
