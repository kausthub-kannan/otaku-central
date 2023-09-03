# Otaku Central
Exciting Wiki Fandom for Anime Otakus!

### Data Model
<a href="https://ibb.co/R2BQWX1"><img src="https://i.ibb.co/31MSHxw/data-model.png" alt="data-model" border="0"></a>

### Running the Server
Following cmd in the terminal runs the server. To establish the ```PORT``` variable in the ```.env``` file before 
running the server.
```bash
 $ npm run start:dev -- -b swc
```

### Note to Developers!  
The server side uses ```npm``` and ```prisma``` hence requires a few files to be generated. Type down the below commands
in your terminal  
```bash
$ npm i
$ npx prima db pull
$ npx prisma generate
```
This should generate the ```@prisma/client/generator-build``` folder and required packages in ```node modules```. Note
that the ```pull``` command is to protect the already existing model interfaces. If you have added a few more interfaces
to the schema in the ```schema.prisma``` file, please change it to ```push```.
