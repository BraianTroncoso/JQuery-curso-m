import $ from 'https://cdn.skypack.dev/jquery'

const $ = (args) => {
  if (typeof arg === 'function'){
    document.addEventListener('DOMContenLoaded', arg)
  }


  // Selector de css
  elements.css = (...args) => {
 }

  if(typeof arg === 'string'){
    const elements = document.querySelectorAll(arg)
    const isString = typeof property === 'string'
    
    elements.css = (...args) => {
      const [property, value] = args
      if (isString) el.style[property] = value
      else{
        const entriesCSS = Object.entries(property)
        entries.forEach(([property, value]) => {
          el.style[property] = value
        })
      }
      
    }
    return elements
  }
}

// $(document).ready(fn) -> la forma larga
// $(fn) -> la forma corta, es lo mismo.

$(()=> { // DOMContenLoaded
  console.log('DOMContentLoaded')

  $('button')
  .css('background', '#09f')
  .css('border', '#fff')
  .css({
    padding: '16px',
    borderRadius: '4px'
  })
  .on('click', () => 
    alert('hola twitch!')
  )

$('li').each((index, el) => {
  if (index === 0) $(el).css('color', '#09f')
  if (index === 1) $(el).css('color', 'red')
  if (index === 2) $(el).css('color', 'green')
  
 })
})