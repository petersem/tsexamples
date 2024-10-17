
- install node
- install npm
- install vs code
- initialise node project
  - mkdir xyz
  - cd xyz
  - npm init -y
- install typescript
  - npm install -g typescript
  - tsc --version
- Configure ts build output dir and debugging in tsconfig.json (and ES6)
  ```
  {
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "out",
    "sourceMap": true
  }
}
  ```
- on-going builds 
    <ctrl><shift><b> then select watch tope-level folder
- add typescript dependency to project
  - npm install typescript --save-dev
  - npm install -g ts-node
  - npm i --save-dev @types/node
- install unit testing framework 'JEST'(javascript and ts frameworks, plus type definitions)
  - npm install jest ts-jest --save-dev
  - npm install @types/jest --save-dev
  - npm install --save-dev @jest/globals
- Extras
  - npm install -g axios
  - npm i --save-dev axios
  - npm i -g quicktype
>     quicktype trivia.json --just-types --lang ts -o iTrivia.ts
