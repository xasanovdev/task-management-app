export const boardInitialData = {
    "boards": [
        {
            "name": "Platform Launch",
            'id': 1,
            "columns": [
                {
                    "name": "Todo",
                    "tasks": [
                        {
                            "id": "13ba62ad-8896-4951-b233-ab7439c0896c",
                            "title": "Build UI for search",
                            "description": "",
                            "status": "Todo",
                            "subtasks": [{ "title": "Search page", "isCompleted": false }]
                        },
                        {
                            "id": "165b6b33-c592-4adc-9475-538d038c01d0",
                            "title": "Build settings UI",
                            "description": "",
                            "status": "Todo",
                            "subtasks": [
                                { "title": "Account page", "isCompleted": false },
                                { "title": "Billing page", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "0065b203-f4de-46c8-ac19-0accc7e85a58",
                            "title": "QA and test all major user journeys",
                            "description": "Once we feel version one is ready, we need to rigorously test it both internally and externally to identify any major gaps.",
                            "status": "Todo",
                            "subtasks": [
                                { "title": "Internal testing", "isCompleted": false },
                                { "title": "External testing", "isCompleted": false }
                            ]
                        }
                    ]
                },
                {
                    "name": "Doing",
                    "tasks": [
                        {
                            "id": "69eb5ce8-4720-441e-b7b4-0c1d8a59143d",
                            "title": "Design settings and search pages",
                            "description": "",
                            "status": "Doing",
                            "subtasks": [
                                { "title": "Settings - Account page", "isCompleted": true },
                                { "title": "Settings - Billing page", "isCompleted": true },
                                { "title": "Search page", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "4a934216-0b96-475d-8284-d027e8657df3",
                            "title": "Build UI for onboarding flow",
                            "description": "",
                            "status": "Todo",
                            "subtasks": [
                                { "title": "Sign up page", "isCompleted": true },
                                { "title": "Sign in page", "isCompleted": false },
                                { "title": "Welcome page", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "d281d4b7-6576-4dfd-a9fb-30ac16bebeab",
                            "title": "Add account management endpoints",
                            "description": "",
                            "status": "Doing",
                            "subtasks": [
                                { "title": "Upgrade plan", "isCompleted": true },
                                { "title": "Cancel plan", "isCompleted": true },
                                { "title": "Update payment method", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "f0c31e18-fd90-48f1-ac16-5b879a67dc08",
                            "title": "Design onboarding flow",
                            "description": "",
                            "status": "Doing",
                            "subtasks": [
                                { "title": "Sign up page", "isCompleted": true },
                                { "title": "Sign in page", "isCompleted": false },
                                { "title": "Welcome page", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "a08b169e-f940-45a3-b9d9-ffd8371e4139",
                            "title": "Add search enpoints",
                            "description": "",
                            "status": "Doing",
                            "subtasks": [
                                { "title": "Add search endpoint", "isCompleted": true },
                                { "title": "Define search filters", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "790c810b-e300-4f7c-9359-f44b73184baa",
                            "title": "Add authentication endpoints",
                            "description": "",
                            "status": "Doing",
                            "subtasks": [
                                { "title": "Define user model", "isCompleted": true },
                                { "title": "Add auth endpoints", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "8fcf9b2e-0fdb-4cf6-acdf-8969d96af37d",
                            "title": "Research pricing points of various competitors and trial different business models",
                            "description": "We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.",
                            "status": "Doing",
                            "subtasks": [
                                {
                                    "title": "Research competitor pricing and business models",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Outline a business model that works for our solution",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Talk to potential customers about our proposed solution and ask for fair price expectancy",
                                    "isCompleted": false
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Done",
                    "tasks": [
                        {
                            "id": "c1af8e06-e7e8-49c7-9851-f7ea1fdb73b9",
                            "title": "Conduct 5 wireframe tests",
                            "description": "Ensure the layout continues to make sense and we have strong buy-in from potential users.",
                            "status": "Done",
                            "subtasks": [
                                {
                                    "title": "Complete 5 wireframe prototype tests",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": "51c18214-dbd6-4baf-99e8-f94fbdef0814",
                            "title": "Create wireframe prototype",
                            "description": "Create a greyscale clickable wireframe prototype to test our asssumptions so far.",
                            "status": "Done",
                            "subtasks": [
                                {
                                    "title": "Create clickable wireframe prototype in Balsamiq",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": "d408b2f5-1238-4ebf-a159-4ef1d2dafa3b",
                            "title": "Review results of usability tests and iterate",
                            "description": "Keep iterating through the subtasks until we're clear on the core concepts for the app.",
                            "status": "Done",
                            "subtasks": [
                                {
                                    "title": "Meet to review notes from previous tests and plan changes",
                                    "isCompleted": true
                                },
                                {
                                    "title": "Make changes to paper prototypes",
                                    "isCompleted": true
                                },
                                { "title": "Conduct 5 usability tests", "isCompleted": true }
                            ]
                        },
                        {
                            "id": "b02f04ff-b50e-41a2-bf16-af05e8da83ec",
                            "title": "Create paper prototypes and conduct 10 usability tests with potential customers",
                            "description": "",
                            "status": "Done",
                            "subtasks": [
                                {
                                    "title": "Create paper prototypes for version one",
                                    "isCompleted": true
                                },
                                { "title": "Complete 10 usability tests", "isCompleted": true }
                            ]
                        },
                        {
                            "id": "05f68021-21ee-4368-9972-7cdd426785c8",
                            "title": "Market discovery",
                            "description": "We need to define and refine our core product. Interviews will help us learn common pain points and help us define the strongest MVP.",
                            "status": "Done",
                            "subtasks": [
                                {
                                    "title": "Interview 10 prospective customers",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": "6fa0ac4e-1f4e-4975-bc78-ecae9e19ce5b",
                            "title": "Competitor analysis",
                            "description": "",
                            "status": "Done",
                            "subtasks": [
                                {
                                    "title": "Find direct and indirect competitors",
                                    "isCompleted": true
                                },
                                {
                                    "title": "SWOT analysis for each competitor",
                                    "isCompleted": true
                                }
                            ]
                        },
                        {
                            "id": "42013358-5841-4fac-9138-6bdff385d643",
                            "title": "Research the market",
                            "description": "We need to get a solid overview of the market to ensure we have up-to-date estimates of market size and demand.",
                            "status": "Done",
                            "subtasks": [
                                { "title": "Write up research analysis", "isCompleted": true },
                                { "title": "Calculate TAM", "isCompleted": true }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "Marketing Plan",
            'id': 2,
            "columns": [
                {
                    "name": "Todo",
                    "tasks": [
                        {
                            "id": "2dbea4db-61c2-44bd-930c-d00e9f43e3fe",
                            "title": "Plan Product Hunt launch",
                            "description": "",
                            "status": "Todo",
                            "subtasks": [
                                { "title": "Find hunter", "isCompleted": false },
                                { "title": "Gather assets", "isCompleted": false },
                                { "title": "Draft product page", "isCompleted": false },
                                { "title": "Notify customers", "isCompleted": false },
                                { "title": "Notify network", "isCompleted": false },
                                { "title": "Launch!", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "b3e6034a-55b2-443c-8c47-2d83b0a82ec7",
                            "title": "Share on Show HN",
                            "description": "",
                            "status": "",
                            "subtasks": [
                                { "title": "Draft out HN post", "isCompleted": false },
                                { "title": "Get feedback and refine", "isCompleted": false },
                                { "title": "Publish post", "isCompleted": false }
                            ]
                        },
                        {
                            "id": "2a1b61bf-0092-483a-b6e8-1a75b73cf185",
                            "title": "Write launch article to publish on multiple channels",
                            "description": "",
                            "status": "",
                            "subtasks": [
                                { "title": "Write article", "isCompleted": false },
                                { "title": "Publish on LinkedIn", "isCompleted": false },
                                { "title": "Publish on Inndie Hackers", "isCompleted": false },
                                { "title": "Publish on Medium", "isCompleted": false }
                            ]
                        }
                    ]
                },
                { "name": "Doing", "tasks": [] },
                { "name": "Done", "tasks": [] }
            ]
        },
        {
            "name": "Roadmap",
            id: 3,
            "columns": [
                {
                    "name": "Now",
                    "tasks": [
                        {
                            "id": "ac713791-b937-440a-8caf-0b178fc45720",
                            "title": "Launch version one",
                            "description": "",
                            "status": "",
                            "subtasks": [
                                {
                                    "title": "Launch privately to our waitlist",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Launch publicly on PH, HN, etc.",
                                    "isCompleted": false
                                }
                            ]
                        },
                        {
                            "id": "260d9248-4f73-459f-93e4-10e975fc9929",
                            "title": "Review early feedback and plan next steps for roadmap",
                            "description": "Beyond the initial launch, we're keeping the initial roadmap completely empty. This meeting will help us plan out our next steps based on actual customer feedback.",
                            "status": "",
                            "subtasks": [
                                { "title": "Interview 10 customers", "isCompleted": false },
                                {
                                    "title": "Review common customer pain points and suggestions",
                                    "isCompleted": false
                                },
                                {
                                    "title": "Outline next steps for our roadmap",
                                    "isCompleted": false
                                }
                            ]
                        }
                    ]
                },
                { "name": "Next", "tasks": [] },
                { "name": "Later", "tasks": [] }
            ]
        }
    ],
    "selectedBoard": 0,
    "selectedColumn": 0,
    "selectedTask": 0
}

