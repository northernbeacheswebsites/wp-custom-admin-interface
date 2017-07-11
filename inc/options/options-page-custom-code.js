jQuery(document).ready(function ($) {
    
    var cssCode = CodeMirror.fromTextArea(document.getElementById("wp_custom_admin_interface_custom_css_code"), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "css",
        theme: "blackboard",    
        matchBrackets: true,
        autoCloseTags: true,
        autoCloseBrackets: true
    });
    
    var cssCode = CodeMirror.fromTextArea(document.getElementById("wp_custom_admin_interface_custom_login_css_code"), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "css",
        theme: "blackboard",
        matchBrackets: true,
        autoCloseTags: true,
        autoCloseBrackets: true    
    });
    
    
    var javascriptCode = CodeMirror.fromTextArea(document.getElementById("wp_custom_admin_interface_custom_javascript_code"), {
        lineNumbers: true,
        lineWrapping: true,
        mode: "javascript",
        theme: "blackboard",    
        matchBrackets: true,
        autoCloseTags: true,
        autoCloseBrackets: true    
    });
    
    var phpCode = CodeMirror.fromTextArea(document.getElementById("wp_custom_admin_interface_custom_php_code"), {
        lineNumbers: true,
        lineWrapping: true,
        mode: 'application/x-httpd-php',
        theme: "blackboard",
        matchBrackets: true,
        autoCloseTags: true,
        autoCloseBrackets: true
    });
    
});