<div style="text-align: center;">
<h2>API Design Document</h2>
<h3>Cinema Stand - API</h3>
<p>Authors: Kleo Hasani</p>
<i>Design.md - v1.0</i>
</div>

---

# Context

This will provide an application programing interface (API) that can be consumed by web client by the same name.

## Goal

- To allow users to upload a new movie, TV show to their collection.
- To make it easy to manage your inventory.
- Provide tools to help pick your next movie to watch.

# Requirements

- Postgres database installed.
- Server running this api.

# API Endpoints

\$ (Dynamic) Any word followed by $ means that that word in the URL is dynamic. This will usually be the ID of the item.

| Method | API endpoint                       | Description                                                       |
| ------ | ---------------------------------- | ----------------------------------------------------------------- |
| POST   | **api/v1/login**                   | Login to your account.                                            |
| POST   | **api/v1/register**                | Register a new user.                                              |
| GET    | **api/v1/token_refresh**           | Refresh user token.                                               |
| GET    | **api/v1/collection**              | View your collection.                                             |
| GET    | **api/v1/collection/$A**           | Show all collection alphabetized by arg. Ex. View by letter **A** |
| POST   | **api/v1/collection/new**          | Add new movie or TV show to collection.                           |
| GET    | **api/v1/collection/$item**        | View selected item from collection.                               |
| PUT    | **api/v1/collection/$item/update** | Update current movie or TV show.                                  |
| DELETE | **api/v1/collection/$item/delete** | Remove current movie or TV show from collection.                  |
| GET    | **api/v1/collection/random**       | Select a random movie or TV show from the collection.             |
