# Tables



##  1. User

    user_id         | string
    first_name      | string
    last_name       | string
    email           | string
    hashed_password | string
    created_at      | string
    updated_at      | string

##  2. Feeds

    feed_id         | string
    content         | string
    created_at      | timestamp
    updated_at      | timestamp
    created_by      | string
    last_content    | string
    is_deleted      | boolean


## 3. User Followers
    user_id | string
    follower_id | string