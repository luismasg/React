//where the entry point is
//where to output bundle

const path=require('path');


module.exports= {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    }
};

