const  presets=[ [
"@babel/preset-env",
{
	"useBuiltIns": "entry"
}
]
];

const plugins = ['@babel/plugin-transform-runtime',["component",
{
	"libraryName": "mint-ui",
	"style": true
}
],["@babel/plugin-transform-modules-commonjs", { "strictMode": false }]];


module.exports={presets,plugins}



