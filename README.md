# WebpackConfigStarter
A simple config using WebPack to package your ES6 code. It helps you load web page dynamically, you can use any JS library like Vue, React... 


* First Step run npm install
```
npm i
```

* Second run the dynamic web
```
npm start
```

* load webpack (make sure using https instead of http)
```
https://localhost:55555
```
(You may need to click 'advanced' -> 'Proceed to localhost (unsafe)' to continue if using chrome)
# How to build?

* Note: the index.html under root dir won't work because it hasn't been loaded
* You will need to run

```
npm run build
```
or(for development build)
```
npm run dev 
```

* The output files will be compiled into dist folder
* Then you can just open index.html which under dist/
