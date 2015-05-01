{
  changes: [
    file: {
      id: STRING,
      //permalink: STRING,
      name: path + STRING,
      size: INTEGER,
      commits:[
        {
          status:
          (
          created
          |
          updated
          |
          deleted
          ),
          date: DATE,
          author: {
            login: STRING,
            id: STRING,
            user_url: STRING,
            avatar_url: STRING
          },
          delta: INTEGER,
          message: STRING
        }],
      created:{
        date: new Date().getTime(),,new Date).toUTCString()
        author: {
          login: STRING,
          id: STRING,
          user_url: STRING,
          avatar_url: STRING
        },
        last_modified: DATE
      }
    }
  ]
}

