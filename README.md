## Universal File Parser

#### _The Node.js's universal file parser Library_

![download-image](https://tyrrrz.me/blog/monadic-parser-combinators/cover.png)

[![Ali-A-Koye - universal-file-parser ](https://img.shields.io/static/v1?label=Ali-A-Koye&message=universal-file-parser&color=yellow&logo=github)](https://github.com/Ali-A-Koye/universal-file-parser) [![License](https://img.shields.io/badge/License-MIT-blue)](https://github.com/Ali-A-Koye/universal-file-parser/blob/master/LICENSE)

an open-source package to make it easy to get images from the client, the package converts from multiple file options (form-data, Base64, and more ) into a buffer format and ready to be used. This package tries to make a central point for the backend to not worry about the supported file incomes from the front end.

## What does this package try to solve?

Working with files is an important task and responsibility of a back-end developer. Usually, we try to stick with one type and accept only one type from the front end , maybe that's base64 or Form-Data or even a URL or something.  
However, it's a difficult task to make sure that the front end or anyone interacting with your API sends the data in the format you want. This package will help you to accept multiple options and, at the end, it will output the buffer so that you can do your operations on it.

This package is new and only supports 3 types ( Base64, URL, and Form Data ) but there is a lot of room to grow in the future.

## Key Features

*   Easy to use.
*   The package can check the request by itself to decide on the needed parser.
*   Supports 3 file formats ( Base64, URL (file by URL ), and multipart/form-data ).
*   You can pass the Options and skip the checking stage ( for performance ).
*   If your data is multipart/form-data , then it will parse the whole body as well.
*   Package built with Typescript, you will get the Typescript benefits of validation of your data if you already use Typescript.

## Table of Contents

*   [_**Demo**_](#demo)
*   [_**Requirements**_](#requirements)
*   [_**Usage**_](#usage)
*   [_**API**_](#api)
*   [_**Author**_](#authors-&&-Contributors)
*   [_**License**_](#license)

## Demo

This is a simple [_**Demo**_](https://github.com/Ali-A-Koye/universal-file-parser/tree/master/demo) environment for the package where you can use and test the package. In the demo folder, there is an Express.js example to show how the package works.

Work with the Demo instruction  :

```plaintext
npm install  // Installing dependencies
node index.js // To start the express.js server
```

## Requirements

In order to work with this package, you are required to have :

*   install node.js and npm

## Installation

To use the package you must first add it to your dependencies in your project.

```plaintext
$ npm i universal-file-parser
```

Then you have to register the package for your project.

### Typescript

```javascript
import ufp from "universal-file-parser";
```

### Javascript

```javascript
const ufp  = require("universal-file-parser").default;
```

## Usage

The package consists of a single function, a parser that accepts some parameters to perform the parsing task and append the result to the request object and is ready to be used.

With our aim for simplicity of this package, the integration part is the easiest and we will demonstrate it below.  

### Parser Function

You need to have this functionality to parse your incoming request, and it's a function call that can happen as middleware or inside a function body call ( flexibility ). The function accepts a few parameters :

*   The first parameter is the expected\_field\_name , which must be the field you want to have the file init after the parsing finishes.
*   The Request Object is the Request Object provided by your framework.
*   The last one is the Options . There is only one option to be set and its type so that it skips the checking stage if you can get your type from the front end.

At the end , it will append the result (buffer) to the req.body\[\`expected\_field\_name\`\]

```javascript
  await ufp("expected_field_name",RequestObject ,{
    "type": "url",
  })
  req.body[`expected_field_name`]; //buffer result
```

### Decision Process :

If you didn't specify the type in the options , the package first tries to check if the provided field in the body is a string. If it's not a string, then the package believes that it's an unknown type and the only option that will be left is to perform a multi-part parser. It will return undefined if it can't find anything after.

If the field is on the body object and it's a string , its most likely that it's a URL or Base64. However, the package checks for URL first and if it's not, then we check for Base64 and if it's not, then the default decision will be a multi-part parser.

## API

Below is a table of acceptable parameters for this library.

### Parser Function Input :

| Parameter | Description | Default | Validations |
| --- | --- | --- | --- |
| field\_name | the field name in the incoming request and expected to have the file. |   | Required |
| req | request object  |   | Required |
| options.type | Type must be enum ( “base64” , “url” , “form-data” ) |   | required |

### Parser Function Output : 

The Buffer Appended to the Field\_name inside the Request.Body.

## Author

[Ali Amjed](https://github.com/Ali-A-Koye)

## License

[The MIT License](http://opensource.org/licenses/MIT)