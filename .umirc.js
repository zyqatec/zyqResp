export default {
  plugins: [['umi-plugin-dva',{
    dva:true
  }],
  ],
  "proxy": {
    "/api": {
      "target": "http://jsonplaceholder.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}
