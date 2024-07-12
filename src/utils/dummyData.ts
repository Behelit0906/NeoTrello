const dummyData = {
  boards: [
    {
      id: "f5efa9ec-4ec7-4370-85e8-b31d1873c752",
      title: "Board 1",
      lists: [
        {
          id: "c1c73b9d-7f17-46c8-92d4-74a726e75aa1",
          title: "To Do",
          cards: [
            { id: "c07d2ea6-b77f-4552-809d-4a47d812a548", title: "Task 1", description: "Task 1's description" },
            { id: "549c151c-cb78-4c3d-a524-7c2a30c13e6a", title: "Task 2", description: "Task 2's description" }
          ]
        },
        {
          id: "7cc8979f-66b9-44d9-8a16-de554972e3af",
          title: "In Progress",
          cards: [
            { id: "f9f2569a-36c9-43ab-ba83-d00465d25710", title: "In Progress 1", description: "In progress description" }
          ]
        }
      ]
    },
    {
      id: "f5efa9ec-4ec7-4370-85e8-b31d1873c747",
      title: "Board 2",
      lists: []
    }
  ]
}

export default dummyData;