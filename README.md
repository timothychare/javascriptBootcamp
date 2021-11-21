# javascriptBootcamp
javascriptBootcamp

## Dom methods

* appendChild()
  * adds a node to the en dof athe list of children of a spefcific parent node.
* removeChild()
  * removes a child node from the DOM
* createElement()
  * create the HTML element specified by the tagName
* firstChild
  * read-only property returns the nodes first child in the tree
* addEventListener()
  * attaches an event handler to the specified element.
  * attaches an element without overwriting exsiting event handlers.
  * syntax - element.addEventListener(event, function);

## local Storage

* localStorage - returns the length of local storage and its contents as an array
* Methods
  * setItem('key','value') - creates an item in local storage from a key value pair, Each key has to be unique 
  * removeItem() - remove an item by key
  * clear() - clears all local storage IE localStorage.clear()

## selecting HTML elements

### with css

```css
.classname {
  // styles go here
}
```

### with javascript

```Javascript
document.querySelector('.classname')
```
