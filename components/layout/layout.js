let Data = {
  boards: [
    {
      id: '1',
      name: 'Platform Launch',
      columns: [
        {
          name: 'Todo',
          statusColor: '#452423',
          status: 'Todo',
          tasks: [
            {
              id: '13ba62ad-8896-4951-b233-ab7439c0896c',
              title: 'Build UI for search',
              description: '',
              status: 'Todo',
              subtasks: [{ title: 'Search page', isCompleted: false }],
            },
            {
              id: '165b6b33-c592-4adc-9475-538d038c01d0',
              title: 'Build settings UI',
              description: '',
              status: 'Todo',
              subtasks: [
                { title: 'Account page', isCompleted: false },
                { title: 'Billing page', isCompleted: false },
              ],
            },
            {
              id: '0065b203-f4de-46c8-ac19-0accc7e85a58',
              title: 'QA and test all major user journeys',
              description:
                'Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.',
              status: 'Todo',
              subtasks: [
                { title: 'Internal testing', isCompleted: false },
                { title: 'External testing', isCompleted: false },
              ],
            },
          ],
        },
        {
          name: 'Doing',
          statusColor: '#998122',
          status: 'Doing',
          tasks: [
            {
              id: '69eb5ce8-4720-441e-b7b4-0c1d8a59143d',
              title: 'Design settings and search pages',
              description: '',
              status: 'Doing',
              subtasks: [
                { title: 'Settings - Account page', isCompleted: true },
                { title: 'Settings - Billing page', isCompleted: true },
                { title: 'Search page', isCompleted: false },
              ],
            },
            {
              id: '4a934216-0b96-475d-8284-d027e8657df3',
              title: 'Build UI for onboarding flow',
              description: '',
              status: 'Todo',
              subtasks: [
                { title: 'Sign up page', isCompleted: true },
                { title: 'Sign in page', isCompleted: false },
                { title: 'Welcome page', isCompleted: false },
              ],
            },
            {
              id: 'd281d4b7-6576-4dfd-a9fb-30ac16bebeab',
              title: 'Add account management endpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                { title: 'Upgrade plan', isCompleted: true },
                { title: 'Cancel plan', isCompleted: true },
                { title: 'Update payment method', isCompleted: false },
              ],
            },
            {
              id: 'f0c31e18-fd90-48f1-ac16-5b879a67dc08',
              title: 'Design onboarding flow',
              description: '',
              status: 'Doing',
              subtasks: [
                { title: 'Sign up page', isCompleted: true },
                { title: 'Sign in page', isCompleted: false },
                { title: 'Welcome page', isCompleted: false },
              ],
            },
            {
              id: 'a08b169e-f940-45a3-b9d9-ffd8371e4139',
              title: 'Add search enpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                { title: 'Add search endpoint', isCompleted: true },
                { title: 'Define search filters', isCompleted: false },
              ],
            },
            {
              id: '790c810b-e300-4f7c-9359-f44b73184baa',
              title: 'Add authentication endpoints',
              description: '',
              status: 'Doing',
              subtasks: [
                { title: 'Define user model', isCompleted: true },
                { title: 'Add auth endpoints', isCompleted: false },
              ],
            },
            {
              id: '8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d',
              title:
                'Research pricing points of various competitors and trial different business models',
              description:
                "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
              status: 'Doing',
              subtasks: [
                {
                  title: 'Research competitor pricing and business models',
                  isCompleted: true,
                },
                {
                  title: 'Outline a business model that works for our solution',
                  isCompleted: false,
                },
                {
                  title:
                    'Talk to potential customers about our proposed solution and ask for fair price expectancy',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          name: 'Done',
          statusColor: '#660421',
          status: 'Done',
          tasks: [
            {
              id: 'c1af8e06-e7e8-49c7-9851-f7ea1fdb73b9',
              title: 'Conduct 5 wireframe tests',
              description:
                'Ensure the layout continues to make sense and we have strong buy-in from potential users.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Complete 5 wireframe prototype tests',
                  isCompleted: true,
                },
              ],
            },
            {
              id: '51c18214-dbd6-4baf-99e8-f94fbdef0814',
              title: 'Create wireframe prototype',
              description:
                'Create a greyscale clickable wireframe prototype to test our asssumptions so far.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Create clickable wireframe prototype in Balsamiq',
                  isCompleted: true,
                },
              ],
            },
            {
              id: 'd408b2f5-1238-4ebf-a159-4ef1d2dafa3b',
              title: 'Review results of usability tests and iterate',
              description:
                "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
              status: 'Done',
              subtasks: [
                {
                  title:
                    'Meet to review notes from previous tests and plan changes',
                  isCompleted: true,
                },
                {
                  title: 'Make changes to paper prototypes',
                  isCompleted: true,
                },
                { title: 'Conduct 5 usability tests', isCompleted: true },
              ],
            },
            {
              id: 'b02f04ff-b50e-41a2-bf16-af05e8da83ec',
              title:
                'Create paper prototypes and conduct 10 usability tests with potential customers',
              description: '',
              status: 'Done',
              subtasks: [
                {
                  title: 'Create paper prototypes for version one',
                  isCompleted: true,
                },
                { title: 'Complete 10 usability tests', isCompleted: true },
              ],
            },
            {
              id: '05f68021-21ee-4368-9972-7cdd426785c8',
              title: 'Market discovery',
              description:
                'We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.',
              status: 'Done',
              subtasks: [
                {
                  title: 'Interview 10 prospective customers',
                  isCompleted: true,
                },
              ],
            },
            {
              id: '6fa0ac4e-1f4e-4975-bc78-ecae9e19ce5b',
              title: 'Competitor analysis',
              description: '',
              status: 'Done',
              subtasks: [
                {
                  title: 'Find direct and indirect competitors',
                  isCompleted: true,
                },
                {
                  title: 'SWOT analysis for each competitor',
                  isCompleted: true,
                },
              ],
            },
            {
              id: '42013358-5841-4fac-9138-6bdff385d643',
              title: 'Research the market',
              description:
                'We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.',
              status: 'Done',
              subtasks: [
                { title: 'Write up research analysis', isCompleted: true },
                { title: 'Calculate TAM', isCompleted: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: '2',
      name: 'Marketing Plan',
      columns: [
        {
          name: 'Todo',
          statusColor: '#444752',
          tasks: [
            {
              id: '2dbea4db-61c2-44bd-930c-d00e9f43e3fe',
              title: 'Plan Product Hunt launch',
              description: '',
              status: 'Todo',
              subtasks: [
                { title: 'Find hunter', isCompleted: false },
                { title: 'Gather assets', isCompleted: false },
                { title: 'Draft product page', isCompleted: false },
                { title: 'Notify customers', isCompleted: false },
                { title: 'Notify network', isCompleted: false },
                { title: 'Launch!', isCompleted: false },
              ],
            },
            {
              id: 'b3e6034a-55b2-443c-8c47-2d83b0a82ec7',
              title: 'Share on Show HN',
              description: '',
              status: '',
              subtasks: [
                { title: 'Draft out HN post', isCompleted: false },
                { title: 'Get feedback and refine', isCompleted: false },
                { title: 'Publish post', isCompleted: false },
              ],
            },
            {
              id: '2a1b61bf-0092-483a-b6e8-1a75b73cf185',
              title: 'Write launch article to publish on multiple channels',
              description: '',
              status: '',
              subtasks: [
                { title: 'Write article', isCompleted: false },
                { title: 'Publish on LinkedIn', isCompleted: false },
                { title: 'Publish on Inndie Hackers', isCompleted: false },
                { title: 'Publish on Medium', isCompleted: false },
              ],
            },
          ],
        },
        { name: 'Doing', tasks: [], statusColor: '#238798' },

        { name: 'Done', tasks: [], statusColor: '#987311' },
      ],
    },
    {
      id: '3',
      name: 'Roadmap',
      columns: [
        {
          name: 'Now',
          statusColor: '#546878',
          tasks: [
            {
              id: 'ac713791-b937-440a-8caf-0b178fc45720',
              title: 'Launch version one',
              description: '',
              status: '',
              subtasks: [
                {
                  title: 'Launch privately to our waitlist',
                  isCompleted: false,
                },
                {
                  title: 'Launch publicly on PH, HN, etc.',
                  isCompleted: false,
                },
              ],
            },
            {
              id: '260d9248-4f73-459f-93e4-10e975fc9929',
              title: 'Review early feedback and plan next steps for roadmap',
              description:
                "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
              status: '',
              subtasks: [
                { title: 'Interview 10 customers', isCompleted: false },
                {
                  title: 'Review common customer pain points and suggestions',
                  isCompleted: false,
                },
                {
                  title: 'Outline next steps for our roadmap',
                  isCompleted: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  selectedBoard: '1',
  selectedColumn: 0,
  selectedTask: 0,
}

const currentBoard = document.querySelector('.currentBoard')

function getBoardName(boardId) {
  const selectedBoard = boardData.boards.find((board) => board.id === boardId)

  currentBoard.textContent = selectedBoard?.name
  console.log('current boarddd: ', currentBoard)
}
const boardData = fetchData() || Data

const playGround = document.querySelector('#playGround')

const boardList = document.querySelector('.board-list')

const board_Links = document.querySelectorAll('.board__link')

function renderBoard(boardId) {
  const numberOfCreatedBoards = document.querySelector('.numberOfCreatedBoards')
  numberOfCreatedBoards.textContent = `All boards (${boardData.boards.length})`

  // Check if boardData.boards is an array
  getBoardName(boardId)

  // If no boardId is provided, default to the first board in the array
  if (!boardId && boardData.boards.length > 0) {
    boardId = boardData.boards[0].id
  }
  // Find the board by ID
  const board = boardData.boards.find((board) => board.id === boardId)
  console.log('boardID: ', boardId)

  boardData.selectedBoard = boardId

  // Check if the board is NOT found
  if (!board) {
    console.error(`Board with id ${boardId} not found.`)
    playGround.innerHTML = `
        <div class="w-full h-full flex items-center flex-col gap-8 justify-center">
            <!-- ADD NEW TASK BUTTON -->
          <p class="text-gray-color text-center">This board List is empty. Create a new column to get started.</p>
          <button onclick="openModal('add-board-modal')" class="toggle-modal-button whitespace-nowrap btn rounded-full text-center font-plus-jakarta-sans font-bold cursor-pointer transition duration-200 ease-in-out text-[15px] focus:outline-none hover:bg-primary-light-color bg-primary-color text-white p-4" role="button">
            <span>+</span>
            <span>Create New Board</span>
          </button>
        </div>
    `
    boardList.innerHTML = `
        <p class="text-gray-color pl-8">Not created any board yet.</p>`
    return
  }

  // Check if board.id is defined and not null
  if (board.id === undefined || board.id === null) {
    console.error('Invalid board ID:', board.id)
    return
  }

  const isBoardRendered = document.getElementById(board.id) !== null

  // Update the board list (assuming boardList is a valid reference)
  boardList.innerHTML = generateKanbanBoardNames(boardData)

  // Render the selected board only if it's not already rendered
  if (!isBoardRendered) {
    // Assuming playGround is a valid reference
    playGround.innerHTML = generateKanbanBoard(board)

    playGround.appendChild(createNewColumnElement())

    // Update the selected board in boardData
    boardData.selectedBoard = board.id
    console.log('update selected board to: ', board)
    boardData.selectedColumn = board.columns[0]
    // Highlight the active link in the board list

    const newColumnButtons = document.querySelectorAll('.new-column')

    if (newColumnButtons.length > 0) {
      newColumnButtons.forEach((newColumnButton) => {
        newColumnButton.addEventListener('click', (e) => {
          e.preventDefault()
          openModal('edit-board-modal')
        })
      })
    } else {
      console.error('No elements found with class ".new-column"')
    }

    const boardLinks = document.querySelectorAll('.board__link')

    boardLinks.forEach((link) => {
      link.classList.remove('active')
      link.addEventListener('click', (event) => {
        event.preventDefault()
        const boardId = link.getAttribute('data-board-id')
        console.log(boardId)
        renderBoard(boardId)
        boardData.selectedBoard = boardId
        console.log(boardData.selectedBoard)
        saveDOM()
      })

      if (link.getAttribute('data-board-id') === board.id) {
        link.classList.add('active')
        boardId = board.id
      }
    })
  }

  if (boardData.boards.length > 0) {
    deleteBoardButton.classList.remove('hidden')
    addTaskButton.classList.remove('disabled')
  }else {
    deleteBoardButton.classList.add('hidden')
    addTaskButton.classList.add('disabled')
  }
  cardJS()
}

function generateUniqueId() {
  return Date.now().toString(36)
}

function generateStatusToDropdown(status) {
  return `
  <li class="dropdown-option cursor-pointer p-3 hover:bg-content-color duration-200">
    <span class="option-text font-medium text-[13px] leading-[23px] text-[#828FA3]">
      ${status}
    </span>
  </li>
  `
}

function generateTaskCard(task) {
  return `
    <div
      id="${task.id}"
      modal-id="${task.id}"
      status="${task.status}"
      class="${
        task.status
      } card select-none toggle-modal-button bg-content-color w-280 h-fit py-6 px-4 rounded-lg font-bold shadow-sh-color shadow-sm hover:cursor-pointer hover:text-primary-color subpixel-antialiased"
      onclick="openTaskModal('${task.id}')"
    >
    <span class="hidden task-description">${task.description}</span>
    <span class="hidden subtasks-json">${JSON.stringify(task.subtasks)}</span>
      <p class="card__title text-color capitalize">${task.title}</p>
      <p class="card__status text-slate-500">${
        task.subtasks.filter((subtask) => subtask.isCompleted).length
      } of ${task.subtasks.length} substasks</p>
    </div>
  `
}

function openTaskModal(taskId) {
  // Find the task with the given ID from boardData
  const task = findTaskById(taskId)
  let selectedBoard = boardData.selectedBoard

  const statusValues = extractStatusValues(boardData, selectedBoard)
  const dropdownOptions = statusValues.map(generateStatusToDropdown).join('')

  // Update the HTML content of the dropdown
  const dropdownElement = document?.querySelector('.dropdown-options')

  if (dropdownElement) {
    dropdownElement.innerHTML = dropdownOptions
  }

  // Ensure sBtnText is properly defined here (modify as needed)
  // const sBtnText = document.querySelector('.dBtn-text')

  // Open the modal with the task data
  if (task) {
    // Generate the modal HTML
    const modalHtml = generateTaskModal(task, dropdownElement, statusValues)

    // Open the modal with the generated HTML
    openModal('open-task-modal', boardData.selectedBoard)

    // Update the HTML content of the task modal
    const taskModal = document.getElementById('open-task-modal')
    taskModal.innerHTML = modalHtml

    // Set up the dropdown for the task modal
    setupDropdown(taskModal.querySelector('.dropdown-menu'), task)
  }
}

function deleteTask(taskId) {
  const task = document.getElementById(taskId)
  const column = task.closest('.column')
  column.querySelector('.tasksNumber').innerHTML = `(${
    column.querySelectorAll('.card').length - 1
  })`
  task.remove()

  closeModal('open-task-modal')
  // Log a message if the task is not found (for debugging purposes)
  saveDOM()
  console.warn(`Task with ID ${taskId} not found.`)
}

function populateEditModal(task) {
  // This is a generic example, you should replace it with your actual logic
  const titleInput = document.getElementById('edit-task-title')
  const descriptionInput = document.getElementById('edit-task-description')

  // Populate the modal inputs with task details
  titleInput.value = task.title
  descriptionInput.value = task.description
  // ... (populate other fields as needed)
}

function editTask(taskId) {
  // Find the task by ID
  const task = findTaskById(taskId)

  // Populate the edit modal with task details
  populateEditModal(task)
  closeModal('open-task-modal')
  // Open the edit modal
  openModal('edit-task-modal')

  // Handle the "Save Changes" button click
  const saveChangesButton = document.getElementById('save-changes-button')
  saveChangesButton.addEventListener('click', () => {
    saveChanges(task)
  })
}

function saveChanges(task) {
  // Get the updated values from the modal inputs
  const titleInput = document.getElementById('edit-task-title')
  const descriptionInput = document.getElementById('edit-task-description')

  // Update the task in the data structure
  task.title = titleInput.value
  task.description = descriptionInput.value

  renderBoard(boardData.selectedBoard)
  // Close the edit modal
  closeModal('edit-task-modal')
}

function generateTaskModal(task, dropdownElement, statusValues) {
  // Extract task details
  const taskName = task.title
  const taskDescription = task.description || 'No description available'
  const subtasksCount = task.subtasks.length
  const completedSubtasksCount = task.subtasks.filter(
    (subtask) => subtask.isCompleted,
  ).length

  // Generate unique IDs for subtasks and update boardData
  const subtasksWithIds = task.subtasks.map((subtask) => {
    subtask.id = generateUniqueIdFromTitle(subtask.title) // Update subtask ID in boardData
    return subtask
  })

  // Update boardData with modified subtasks
  const board = boardData.boards.find((board) =>
    board.columns
      .flatMap((column) => column.tasks)
      .flatMap((t) => t.subtasks)
      .some((s) => s.id === task.subtasks[0].id),
  )

  if (board) {
    const column = board.columns.find((column) =>
      column.tasks.some((t) => t.subtasks[0].id === task.subtasks[0].id),
    )

    if (column) {
      const taskToUpdate = column.tasks.find(
        (t) => t.subtasks[0].id === task.subtasks[0].id,
      )

      if (taskToUpdate) {
        taskToUpdate.subtasks = subtasksWithIds
      }
    }
  }

  // Generate subtasks HTML
  const subtasksHtml = subtasksWithIds
    .map((subtask) => generateSubtaskItem(subtask, task))
    .join('')

  // Modal HTML
  const modalHtml = `
  <div class="h-full">
    <div class="flex items-center gap-4 justify-between mb-6">
      <button class="edit-task rounded-full w-full text-center py-4 font-bold cursor-pointer transition duration-200 ease-in-out text-[13px] leading-6 outline-none text-primary-color dark:bg-white bg-[#635fc71a] hover:bg-[#635FC740]" onclick="editTask('${
        task.id
      }')">Edit Task</button>
      <button class="delete-task font-bold text-white bg-danger-color hover:opacity-80 duration-100 rounded-full w-full p-4" onclick="deleteTask('${
        task.id
      }')">Delete Task</button>
    </div>

    <div>
      <h3 class="text-color text-[18px] font-bold">${taskName}</h3>
    </div>
    <div class="mt-6 text-[#828FA3] font-bold tracking-wide text-[13px]">${taskDescription}</div>
    <div class="relative form-label flex flex-col gap-2 text-gray-color font-plus-jakarta-sans font-bold text-[12px] leading-5">
      <h3 class="subtasksCompletedStatus">Subtasks (${completedSubtasksCount} of ${subtasksCount})</h3>
      <div class="subtasks mt-6 flex flex-col bg-page-color">
        ${subtasksHtml}
      </div>

      <div class="dropdown">
        <div class="dropdown-menu relative w-full">
          <div class="dropdown-btn status min-w-full w-full justify-between flex items-center px-4 py-2 rounded border focus:outline-none active:border-[#635FC7] group">
            <span class="dBtn-text m-0 text-gray-color cursor-pointer transition duration-400 ease-in-out text-[13px] leading-6">${
              task.status
            }</span>
            <span class="dropdown-sign">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="8" viewBox="0 0 11 8" fill="none">
                <path d="M0.79834 1.54858L5.49682 6.24707L10.1953 1.54858" stroke="#635FC7" stroke-width="2"/>
              </svg>
            </span>
          </div>
          ${dropdownElement ? dropdownElement.outerHTML : ''}
        </div>
      </div>
    </div>
  </div>
`
  console.log('taskStatus: ', task.status)
  // Get the dropdown options
  const dropdownOptions = statusValues.map(generateStatusToDropdown).join('')

  // Set up the dropdown for the task modal
  const dropdownMenu = dropdownElement.querySelector('.dropdown-menu')
  if (dropdownMenu) {
    dropdownMenu.innerHTML = dropdownOptions
    setupDropdown(dropdownMenu, task)
  }

  return modalHtml
}

function updateTaskStatus(task, newStatus) {
  // Update the task status in boardData
  const board = boardData.boards.find((board) =>
    board.columns
      .flatMap((column) => column.tasks)
      .some((t) => t.subtasks[0].id === task.subtasks[0].id),
  )

  if (board) {
    const column = board.columns.find((column) =>
      column.tasks.some((t) => t.subtasks[0].id === task.subtasks[0].id),
    )

    console.log(column, 'column')

    if (column) {
      const taskToUpdate = column.tasks.find(
        (t) => t.subtasks[0].id === task.subtasks[0].id,
      )
      console.log(taskToUpdate, 'taskToUpdate')

      const boardToChange = boardData.boards.map((boards) => {
        if (boards.id === board.id) {
          const findIndexOfBoard = boardData.boards.findIndex(
            (brd) => brd.id === board.id,
          )

          const findIndexOfColumn = boardData.boards[
            findIndexOfBoard
          ].columns.findIndex((clmn) => clmn.name === column.name)

          const removeTaskFromColumn = boardData.boards[
            findIndexOfBoard
          ].columns[findIndexOfColumn].tasks.findIndex(
            (tsk) => tsk.id === taskToUpdate.id,
          )

          const addTaskToColumn = boardData.boards[
            findIndexOfBoard
          ].columns.findIndex((column) => column.name === newStatus)
          console.log(addTaskToColumn)
          if (removeTaskFromColumn !== -1) {
            boardData.boards[findIndexOfBoard].columns[
              findIndexOfColumn
            ].tasks.splice(removeTaskFromColumn, 1)
            console.log(`Task removed successfully.`, boardData)
          } else {
            console.log(`Task is not found.`)
          }

          boardData.boards[findIndexOfBoard].columns[
            addTaskToColumn
          ].tasks.unshift(taskToUpdate)

          renderBoard(boardData.selectedBoard)
        }
      })

      if (taskToUpdate) {
        console.log(
          `Updating task status from ${taskToUpdate.status} to ${newStatus}`,
        )
        taskToUpdate.status = newStatus
      }
    }
  }

  // Log the current state of the boardData for debugging

  // Render the updated board
}

function removeTaskFromColumn(indexOfTask) {
  if (indexOfTask !== -1) {
    complexJsonObject.projects.splice(indexOfTask, 1)
    console.log(`Project with title '${title}' removed successfully.`)
  } else {
    console.log(`Project with title '${title}' not found.`)
  }
}

function toggleSubtaskCompleted(subtaskId) {
  // Find the corresponding subtask in the data structure
  const subtask = findSubtaskById(subtaskId)

  // Toggle the isCompleted property
  if (subtask) {
    subtask.isCompleted = !subtask.isCompleted

    // Find the task containing the subtask in the data structure
    const taskContainingSubtask = findTaskContainingSubtask(subtask)

    if (taskContainingSubtask) {
      // Find the column containing the task in the data structure
      const columnContainingTask = findColumnContainingTask(
        taskContainingSubtask,
      )

      if (columnContainingTask) {
        // Find the board containing the column in the data structure
        const boardContainingColumn =
          findBoardContainingColumn(columnContainingTask)

        if (boardContainingColumn) {
          // Update the boardData with the modified structure
          const boardIndex = boardData.boards.findIndex(
            (board) => board === boardContainingColumn,
          )
          const columnIndex = boardContainingColumn.columns.findIndex(
            (column) => column === columnContainingTask,
          )
          const taskIndex = columnContainingTask.tasks.findIndex(
            (task) => task === taskContainingSubtask,
          )

          boardData.boards[boardIndex].columns[columnIndex].tasks[taskIndex] =
            taskContainingSubtask

          // Update the UI
          updateSubtaskUI(subtask)

          const subtasksCompletedStatus = document.querySelector(
            '.subtasksCompletedStatus',
          )

          subtasksCompletedStatus.innerHTML = `${
            taskContainingSubtask.subtasks.filter(
              (subtask) => subtask.isCompleted,
            ).length
          } of ${taskContainingSubtask.subtasks.length} substasks`

          console.log(subtasksCompletedStatus)
        }
      }
    }
  }

  // Update the UI to reflect the new state
  updateSubtaskUI(subtask)

  // Render the board to reflect the changes
  renderBoard(fetchData().selectedBoard)
}

// Function to find the task containing a subtask
function findTaskContainingSubtask(subtask) {
  for (const board of boardData.boards) {
    for (const column of board.columns) {
      for (const task of column.tasks) {
        if (task.subtasks.includes(subtask)) {
          return task
        }
      }
    }
  }
  return null
}

// Function to find the column containing a task
function findColumnContainingTask(task) {
  for (const board of boardData.boards) {
    for (const column of board.columns) {
      if (column.tasks.includes(task)) {
        return column
      }
    }
  }
  return null
}

// Function to find the board containing a column
function findBoardContainingColumn(column) {
  for (const board of boardData.boards) {
    if (board.columns.includes(column)) {
      return board
    }
  }
  return null
}

// Update the updateSubtaskUI function
function updateSubtaskUI(subtask) {
  const checkbox = document.getElementById(subtask.id)
  // Update the checkbox state
  if (checkbox) {
    checkbox.checked = subtask.isCompleted
  }

  // You can add additional UI updates here as needed
}

// Assume you have a function to find a subtask by title
function findSubtaskById(subtaskId) {
  // Implement your logic to find the subtask by ID in your data structure
  // For example, you can use boardData to find the subtask
  // Replace this with your actual implementation

  return boardData.boards
    .flatMap((board) => board.columns)
    .flatMap((column) => column.tasks)
    .flatMap((task) => task.subtasks)
    .find((subtask) => subtask.id === subtaskId)
}

function findTaskById(taskId) {
  // Loop through boards to find the task with the given ID
  for (const board of boardData.boards) {
    for (const column of board.columns) {
      const task = column.tasks.find((task) => task.id === taskId)
      if (task) {
        return task
      }
    }
  }
  return null // Task not found
}

function generateUniqueIdFromTitle(title) {
  // Use a hash function or any unique ID generation method based on the title
  // For simplicity, let's use a basic hash function for illustration
  const hash = title
    .split('')
    .reduce((acc, char) => (acc * 31 + char.charCodeAt(0)) | 0, 0)
  return `subtask-${hash}`
}

function generateSubtaskItem(subtask, task) {
  // Generate HTML for each subtask
  return `
    <div class="chechbox-content flex items-center text-color p-3 gap-4 cursor-pointer relative hover:bg-[635fc740] hover:transition duration-200 active:ease-in" onclick="toggleSubtaskCompleted('${
      subtask.id
    }')">
      <i class="icon-tick checkbox-icon absolute top-4 text-white left-4 scale-1 duration-150"></i>
      <input
        type="checkbox"
        id="${subtask.id}"
        class="checkbox-input relative h-4 w-4 bg-white bg-text-color rounded-[2px] appearance-none border-[1px] border-solid border-[rgba(130, 143, 163, 0.25)] cursor-pointer checked:bg-primary-color rounded-[2px]"
        ${subtask.isCompleted ? 'checked' : ''}
      />
      <label
        for="${subtask.id}"
        class="text-color pointer-events-none cursor-pointer w-full font-bold text-[12px] leading-normal"
      >${subtask.title}</label>
    </div>
  `
}

function generateColumn(column) {
  const tasksHtml = column.tasks.map((task) => generateTaskCard(task)).join('')

  return `
    <div id="${column.name}" class="column relative h-full text-color flex flex-col items-start w-280 gap-5 overflow-visible">
      <h3 class="column__header text-[#828fa3] flex items-center gap-3">
        <span style="background-color: ${column.statusColor}; border-radius: 50%" class="w-4 h-4 rounded-ful status-color"></span>
        <span class="tracking-widest text-sm font-bold column-name">${column.name} 
        </span>
        <span class="tasksNumber text-sm font-bold">(${column.tasks.length})</span>
      </h3>
        ${tasksHtml}
    </div>
  `
}

function generateKanbanBoardName(board) {
  return `
    <li board-id="${board.id}" board-name="${board.name}">
      <button 
        data-board-id="${board.id}"
        class="btn board__link w-full flex items-center gap-4 text-[#828fa3] rounded-r-full text-left font-plus-jakarta-sans font-bold cursor-pointer transition duration-200 ease-in-out text-[15px] focus:outline-none hover:bg-btn-hover-color hover:text-primary-color md:mr-6 p-[10px] md:py-4 px-6"
        role="button"
      >
        <i class="icon-layout"></i>
        <span>${board.name}</span>
      </button>
    </li>
  `
}

function generateKanbanBoardNames(boardData) {
  return boardData.boards
    .map((board) => generateKanbanBoardName(board))
    .join('')
}

function generateKanbanBoard(board) {
  if (!board || !board.columns) {
    console.error('Invalid board data:', board)

    return 'salom' // Return an empty string or handle the error appropriately
  }

  playGround.setAttribute('board-id', `${board.id}`)
  return board.columns.map((column) => generateColumn(column)).join('')
}

boardList.innerHTML = generateKanbanBoardNames(boardData)


function createNewColumnElement() {
  // Create div element
  const divElement = document.createElement('button')

  // Set class attribute
  divElement.setAttribute(
    'class',
    'toggle-modal-button w-280 new-column h-fit mt-10 flex rounded-md bg-gradient-primary cursor-pointer items-center content-center overflow-visible mb-48 bg-gradient-to-br from-[#995eb40a] to-[#723b8883]',
  )

  // Set id attributeadd
  divElement.setAttribute('id', 'newColumn')

  // Set modal-id attribute
  divElement.setAttribute('modal-id', 'edit-board-modal')

  // Create span element
  const spanElement = document.createElement('span')

  // Set class attribute for span
  spanElement.setAttribute(
    'class',
    'text-color text-center text-slate-500 capitalize text-2xl',
  )

  // Create inner HTML for span
  spanElement.innerHTML =
    '<span class="text-3xl text-center">+</span> New Column'

  // Append span element to div element
  divElement.appendChild(spanElement)

  // Return the generated element
  return divElement
}

function generateColumnDataFromDOM() {
  const columns = []

  // Assuming your columns are contained in a container with the class "column-container"
  const columnContainer = document.querySelector('#playGround')

  // Iterate through each column in the container
  columnContainer
    .querySelectorAll('.column')
    .forEach((columnElement, columnIndex) => {
      const column = {
        name: columnElement.getAttribute('id'),
        tasks: [],
        statusColor:
          columnElement.querySelector('.status-color').style.backgroundColor,
      }
      console.log(column)

      // Iterate through each task in the column
      columnElement
        .querySelectorAll('.card')
        .forEach((taskElement, taskIndex) => {
          const task = {
            id: taskElement.getAttribute('id'),
            title: taskElement.querySelector('.card__title').textContent,
            description:
              taskElement.querySelector('.task-description').textContent,
            status: taskElement.closest('.column').querySelector('.column-name')
              .textContent, // Use the column name as the initial task status
            subtasks: JSON.parse(
              taskElement.querySelector('.subtasks-json').textContent,
            ),
          }
          column.tasks.push(task)
        })

      columns.push(column)
    })

  return columns
}

function replaceColumnsInSelectedBoardByIdInPlace(
  boardData,
  boardId,
  newColumns,
) {
  const foundBoard = boardData.boards.find((board) => board.id === boardId)

  if (foundBoard) {
    const selectedBoardIndex = boardData.boards.indexOf(foundBoard)
    boardData.boards[selectedBoardIndex].columns = newColumns
  } else {
    console.error('Board not found.')
  }
}

// LOCAL STORAGE

function setData(data) {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem('kanban', serializedData)
    Data = data
  } catch (error) {
    console.error('Error saving data to local storage:', error)
  }
}

// Function to fetch data from local storage
function fetchData() {
  try {
    const serializedData = localStorage.getItem('kanban')
    if (serializedData === null) {
      return Data
    }
    Data = JSON.parse(serializedData)

    return JSON.parse(serializedData)
  } catch (error) {
    console.error('Error fetching data from local storage:', error)

    return null
  }
}

function saveDOM() {
  const currentBoard = document
    .querySelector('#playGround')
    .getAttribute('board-id')
  replaceColumnsInSelectedBoardByIdInPlace(
    boardData,
    currentBoard,
    generateColumnDataFromDOM(),
  )
  setData(boardData)
}

window.addEventListener('beforeunload', function (event) {
  boardData.selectedBoard = playGround.getAttribute('board-id')
  saveDOM()
})

const deleteBoardButton = document.querySelector('.delete-board')
const addTaskButton = document.querySelector('[modal-id="add-task-modal"]')

if (boardData.boards.length > 0) {
  const initialBoardId = boardData.selectedBoard
  console.log(initialBoardId,boardData);
  deleteBoardButton.classList.remove('hidden')
  addTaskButton.classList.remove('disabled')
  renderBoard(initialBoardId)
}else {
  deleteBoardButton.classList.add('hidden')
  addTaskButton.classList.add('disabled')
  renderBoard()
}

function openInnerModal(modalId) {
  console.log('asfsa');
  if (modalId === '') {
    const innerModal = document.querySelector('.inner-modal')

    innerModal.classList.toggle('hidden')
    innerModal.classList.toggle('flex')
  } else {
    const innerModal = document.querySelector('.inner-modal')

    innerModal.classList.add('hidden')
    innerModal.classList.remove('flex')
  }
}