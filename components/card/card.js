function cardJS() {
  let dragging = false
  let isDragging = false
  let startPosition = { x: 0, y: 0 }
  let scrollLeft = 0
  let scrollTop = 0
  let last = document.querySelector('.dragover')
  const header = document.querySelector('header')
  let draggingColumn
  let droppedColumn
  let startedColumn
  let dragSrcEl


  function isBefore(el1, el2) {
    console.log(el1,el2)
    let cur
    if (el2.parentNode === el1.parentNode) {
      for (cur = el1.previousSibling; cur; cur = cur.previousSibling) {
        if (cur === el2) return true
      }
    }
    return false
  }

  makeMouseScrollable(document.querySelector('#playGround'))
  while (dragging) {
    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(document.querySelector('#playGround'))
  }
  document.querySelector('#playGround').effectAllowed = 'move'


  function drag() {
    dragging = true
    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(document.querySelector('#playGround'))

    return false
  }

  function dragStart(e) {
    dragging = true
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.setData('text/plain', null)
    dragSrcEl = e.target
    dragSrcEl.opacity = 0.5

    startedColumn = this.closest('.column')

    e.dataTransfer.setData('taskId', this.id)
    e.dataTransfer.setData('completed', this.getAttribute('data-completed'))

    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(document.querySelector('#playGround'))
    return false
  }

  function dragEnter(e) {
  }

  function dragOver(e) {
    dragging = true
    draggingColumn = this.closest('.column')
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'


    last = document.querySelectorAll('.dragover')[0]

    if (last === undefined) {
      this.classList.add('dragover')
    } else {
      last.classList.remove('dragover')
      this.classList.add('dragover')
      last = this
    }

    if (dragSrcEl !== this && !this.contains(dragSrcEl)) {
      if (isBefore(dragSrcEl, this)) {
        draggingColumn.insertBefore(dragSrcEl, this);
      } else {
        draggingColumn.insertBefore(dragSrcEl, this.nextElementSibling);
      }
    }

    this.scrollIntoView({ behavior: 'smooth', block: 'end' })

    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(playGround)
    return false
  }

  function dragLeave(e) {
    dragging = true
    e.preventDefault()
    if (this.classList.contains('dragover') && this !== last) {
      this.classList.remove('dragover')
    }

    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(playGround)
    return false
  }

  function dragDrop() {
    this.classList.remove('dragover')
    dragging = false
    header.scrollIntoView({ behavior: 'smooth', block: 'end' })
    makeMouseScrollable(playGround)

    const newColumn = document.querySelector('#newColumn')
    newColumn.style.height = `${findColumnWithLargestHeight().scrollHeight - 34}px`
  }

  async function dragEnd() {
    this.classList.remove('dragover')
    header.scrollIntoView({ behavior: 'smooth', block: 'end' })

    droppedColumn = this.closest('.column')
    //
    // console.log("Dropped Column ID:", droppedColumn.id);
    // console.log("Number of Cards in Dropped Column:", droppedColumn.querySelectorAll(".card").length);
    //
    // const updatedCol = updatedColumn(defaultBoard, droppedColumn.id, droppedColumn, await fetchData());
    // console.log("Updated Column:", updatedCol);
    //
    // updateColumn(defaultBoard, droppedColumn.id, droppedColumn, await fetchData());
    // await console.log("After Update - Find Column:", findColumn(defaultBoard, droppedColumn.id, await fetchData()));
    // console.log("After update: ",JSON.parse(fetchData()))

    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(playGround)
    dragging = true

    return false
  }


  function mouseDown() {
    this.classList.add('dragover')
    dragging = true
    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    scrollTop = 0
    stopMouseScrolling(playGround)
    return false
  }

  function mouseUp() {
    this.classList.remove('dragover')
    isDragging = false
    startPosition = { x: 0, y: 0 }
    scrollLeft = 0
    // let scrollTop = 0;
    stopMouseScrolling(playGround)
    return false
  }

  function dragDropColumn(e) {
    e.preventDefault()
    header.scrollIntoView({ behavior: 'smooth', block: 'end' })
    // const sourceCardId = e.dataTransfer.getData("taskId");
    // const targetCardId = this.getAttribute("id");
    // const completed = e.dataTransfer.getData("completed");


    return false
  }

  function dragOverColumn() {
    this.appendChild(dragSrcEl)
    const newColumn = document.querySelector('#newColumn')
    const columns = document.querySelectorAll('.column')
    const theColumn = getColumnWithMostChildNodes(columns)
    newColumn.style.height = `${calculateSumOfCardHeights(theColumn)+theColumn.querySelectorAll(".card").length*10}px`
    columns.forEach(col => {
      col.style.height = `${newColumn.style.height + 100}px`
    })


    // this.scrollIntoView({behavior:"smooth"})
    if (this.querySelectorAll('.card').length === theColumn.querySelectorAll('.card').length) {

    } else {

      this.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return false
  }

  function addEventsDragAndDrop(el) {
    el.addEventListener('drag', drag, false)
    el.addEventListener('dragstart', dragStart, false)
    el.addEventListener('dragover', dragOver, false)
    el.addEventListener('dragleave', dragLeave, false)
    el.addEventListener('dragenter', dragEnter, false)
    el.addEventListener('drop', dragDrop, false)
    el.addEventListener('dragend', dragEnd, false)
    el.addEventListener('mousedown', mouseDown, false)
    el.addEventListener('mouseup', mouseUp, false)
  }

  const columns = document.querySelectorAll('.column')
  columns.forEach(col => {
    col.addEventListener('dragover', dragOverColumn, false)
    col.addEventListener('drop', dragDropColumn, false)
  })
// make images Draggable <END>

  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    card.draggable = true
    addEventsDragAndDrop(card)
  })


  function makeMouseScrollable(el) {
    el.addEventListener('mousedown', (e) => {
      isDragging = true
      startPosition = {
        x: e.clientX,
        y: e.clientY,
      }
      scrollLeft = document.querySelector('#playGround').scrollLeft
      scrollTop = document.querySelector('#playGround').scrollTop

    })
    el.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false
      }
    })

    el.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - startPosition.x
        const deltaY = e.clientY - startPosition.y

        document.querySelector('#playGround').scrollLeft = scrollLeft - deltaX
        document.querySelector('#playGround').scrollTop = scrollTop - deltaY
      }
    })
  }

  function stopMouseScrolling(el) {
    el.removeEventListener('mousedown', (e) => {
      isDragging = true
      startPosition = {
        x: e.clientX,
        y: e.clientY,
      }
      scrollLeft = document.querySelector('#playGround').scrollLeft
      scrollTop = document.querySelector('#playGround').scrollTop

    })
    el.removeEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false
      }
    })

    el.removeEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - startPosition.x
        const deltaY = e.clientY - startPosition.y

        document.querySelector('#playGround').scrollLeft = scrollLeft - deltaX
        document.querySelector('#playGround').scrollTop = scrollTop - deltaY
      }
    })
  }


  function findColumnWithLargestHeight() {
    // Get all elements with the class "column"
    const columns = document.querySelectorAll('.column')

    // Initialize variables to store the maximum height and corresponding element
    let maxHeight = 0
    let tallestColumn = null

    // Iterate through each column
    columns.forEach((column) => {
      // Get the current column's height
      const columnHeight = column.scrollHeight

      // Check if the current column is taller than the current maximum
      if (columnHeight > maxHeight) {
        // Update the maximum height and corresponding element
        maxHeight = columnHeight
        tallestColumn = column
      }
    })

    // Return the element with the largest height
    return tallestColumn
  }


  function getColumnWithMostChildNodes(columns) {
    let maxColumn
    let maxChildNodes = 0

    columns.forEach(column => {
      const numberOfChildNodes = column.querySelectorAll('.card').length
      if (numberOfChildNodes > maxChildNodes) {
        maxChildNodes = numberOfChildNodes
        maxColumn = column
      }
    })
    return maxColumn
  }


  function calculateSumOfCardHeights(column) {
    // Get all elements with the class "card"
    const cards = column.querySelectorAll('.card')

    // Initialize variable to store the sum of heights
    let sumOfHeights = 0

    // Iterate through each card
    cards.forEach((card) => {
      // Add the height of the current card to the sum
      sumOfHeights += card.clientHeight
    })

    // Return the sum of heights
    return sumOfHeights
  }
}

