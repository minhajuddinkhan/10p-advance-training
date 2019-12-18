# API Routes

- GET Feeds
    - Route: `/api/v1/feeds`
- POST Feeds
    - Route: api/feeds
    - user details to be fetched from the token
    - timestamp to be calculated on server
    - body:
     ```
     {
         content: string,
     }
     ```

- DELETE Feeds
    - Method: DELETE
    - Route: `api/v1/feeds/:id`

- Update Feeds
    - Method: PUT
    - Route: `api/v1/feeds/:id`
    - body
      ```
      {
        content: string
      }
      ```
