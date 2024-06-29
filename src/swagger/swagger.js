/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         email:
 *           type: string
 *           description: The email of the user
 *       example:
 *         id: d5fE_asz
 *         username: johndoe
 *         email: johndoe@example.com
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 */
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 *       404:
 *         description: The user was not found
 */
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         title:
 *           type: string
 *           description: The title of the post
 *         content:
 *           type: string
 *           description: The content of the post
 *         userId:
 *           type: string
 *           description: The id of the user
 *       example:
 *         id: d5fE_asz
 *         title: My First Post
 *         content: This is the content of my first post.
 *         userId: 60d0fe4f5311236168a109ca
 */

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: The posts managing API
 */

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Returns the list of all the posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: The list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     responses:
 *       200:
 *         description: The post description by id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: The post was not found
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       201:
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       500:
 *         description: Some server error
 */

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update the post by the id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: The post was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 *       404:
 *         description: The post was not found
 *       500:
 *         description: Some error happened
 */

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Remove the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     responses:
 *       200:
 *         description: The post was deleted
 *       404:
 *         description: The post was not found
 */


