const Users = [
    {
      name: "John",
      children: [
        {
          name: "Doe",
          children: [
            {
              name: "Nuck",
            },
          ],
        },
      ],
    },
    {
      name: "Ron",
      children: [
        {
          name: "Jen",
          children: [
            {
              name: "Lee",
            },
          ],
        },
      ],
    },
  ];
  
  function getUser2(users) {
    return users.flatMap((user) => {
      return [user.name, ...getUser2(user.children || [])]; // Use optional chaining
    });
  }
  
  // console.log(getUser(Users));
  console.log(getUser2(Users));
  