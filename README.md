# microfrontends-with-nx
Seeder kit for creating microfrontends with @nrwl/nx workspaces. CI scripts using Github actions and AWS S3 

---

## Environment Setup

To start with you need an @nrwl/nx workspace 

`npx create-nx-workspace@latest`

Choose an empty workspace for flexibility to set up full-stack angular & react apps depending on your future requirements.

![image](https://user-images.githubusercontent.com/5936702/173212583-74139580-3ec9-4145-b337-8901b9d7b3e6.png)

---

Since we have the workspace ready, we can move forward to install the angular plugin

`cd micro-frontends`
`npm i @nrwl/angular --save-dev`

After the above steps, your package.json should be similar to the above.

![image](https://user-images.githubusercontent.com/5936702/173212618-63b66947-a662-4907-ba2c-085514688106.png)

## Creating host & remote applications

**Add Host Application**

The host is our base application that can help you load the remotes on-demand with routing. Let's create one.

`nx g @nrwl/angular:host host`

![image](https://user-images.githubusercontent.com/5936702/173212641-ec0f3120-39ca-4ed6-ae26-745e600ff632.png)

