const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")


module.exports = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js", 
        clean: true
    },
    mode : "development",
    devServer: {
        static: path.resolve(__dirname, "src"),
        compress: true,
        port: 8080,
        open: true
    },
    module : {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: "/node_modules/"
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader"
                }
            ]
        },
        {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: "asset/resource"
          }
    ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ]
}