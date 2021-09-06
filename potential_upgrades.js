// TODO: if I want to show a filter on the left with the rest.

// Clone Client History to use as template
var container = document.querySelector('filters-sidebar-section div');

var clone = container.querySelector('filters-sidebar-section div [filtername="clientHires"]').cloneNode(true);
clone.id = 'currentJobHires';
clone.removeAttribute('component');
clone.removeAttribute('listeners');

// Change title
clone.querySelector('.cursor-pointer div strong').innerText = 'Job History'

// Remove counts
clone.querySelectorAll('.text-muted').forEach(function(item, index) {
    item.innerText = ''
})

// Add new filter to container
container.appendChild(clone);
clone = container.querySelector('#currentJobHires');

//Add listener for show/hiding checkboxes
document.querySelector('#currentJobHires .up-btn').addEventListener('click', function() {
    console.log('hello')
});

//TODO: start here
// Add listener for when they check or uncheck
var checksHandler = function (event) {

}
clone.addEventListener('check', checksHandler);
clone.addEventListener('uncheck', checksHandler);
