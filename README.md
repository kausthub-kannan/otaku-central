# Otaku Central
Exciting Wiki Fandom for Anime Otakus!

### Running the Server
Following cmd in the terminal runs the server. Do establish the ```PORT``` variable in the ```.env``` file before running the server.
```bat
deno run --watch --allow-net --allow-env --allow-read main.ts
```

### Note to Developers!  
The server side uses ```Deno``` and ```Prisma``` hence requires a few files to be generated. Type down the below commands in your terminal  
```bat
deno run -A npm:prisma@^4.5 db pull
deno run -A --unstable npm:prisma@^4.5 generate --data-proxy
```
This should generate the ```generated/client``` folder and required ```node modules```. Note that the ```pull``` command is to protect the already existing model interfaces. If you have added a few more interfaces to the schema in the ```schema.prisma``` file, please change it to ```push```.
