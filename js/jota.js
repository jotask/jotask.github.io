/**
 * Created by Jota on 10/06/2017.
 */
function loadProjects(){
    loadProject("rosjam");
}

function loadProject(project){
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', 'projects/'+project+'.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById(project).innerHTML = xhr.responseText;
        }
    }
    xhr.send();
}