function getBaseURL() {
    return window.location.protocol+"//"+window.location.host+"/";
}

function getPluginUrl(plugname){
    return getHatUrl('plugin', plugname);
}

function getResourceUrl(resourcename){
    return getHatUrl('resource', resourcename);
}

function getTemplateUrl(templatename){
    return getHatUrl("template", templatename);
}