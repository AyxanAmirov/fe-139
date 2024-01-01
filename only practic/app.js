let picker = $('#colorpicker')
let path = $('#svg-path')
picker.on('change',function(){
    path.css('background-color',$(this).val())
})