//Put focus on on input after it has been rendered
Vue.directive('input-focus', function (el, value) {
    if (value) { el.focus() }
})

//Use to initiate bootstrap tooltip on element
Vue.directive('tooltip', function(el, binding) {
    $(el).tooltip(binding.value)
})